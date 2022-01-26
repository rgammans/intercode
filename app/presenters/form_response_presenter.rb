# frozen_string_literal: true
class FormResponsePresenter
  attr_reader :form, :response, :viewer_role, :team_member_name, :controller

  def initialize(form, response, team_member_name: nil, viewer_role: nil, controller: nil)
    @form = form
    @response = response
    @viewer_role = viewer_role&.to_s
    @team_member_name = team_member_name
    @controller = controller
  end

  def as_json(replacement_content_format: 'text')
    form
      .form_items
      .each_with_object({}) do |form_item, json|
        field = form_item.identifier.to_s
        next if field.blank?

        json[field] = response.read_form_response_attribute(field)
        replacement_content = replacement_content_for_form_item(form_item, json[field], replacement_content_format)
        json[field] = replacement_content if replacement_content.present?
      end
  end

  def as_json_with_rendered_markdown(group_cache_key, object_cache_key, default_content)
    raw_json = as_json(replacement_content_format: 'markdown')
    render_promises =
      form.form_items.filter_map do |form_item|
        render_form_item(group_cache_key, object_cache_key, default_content, form_item, raw_json)
      end

    Promise.all(render_promises).then { |render_results| raw_json.merge(render_results.to_h) }
  end

  private

  def render_form_item(group_cache_key, object_cache_key, default_content, form_item, raw_json)
    field = form_item.identifier.to_s

    unless form_item.item_type == 'free_text' && form_item.properties['format'] == 'markdown'
      return Promise.resolve([field, raw_json[field]])
    end

    markdown = raw_json[field]
    render_markdown_for_field(field, markdown, group_cache_key, object_cache_key, default_content).then do |html|
      [field, html]
    end
  end

  def replacement_content_for_form_item(form_item, content, format)
    return unless should_replace_content_for_form_item?(form_item, content)

    hidden_text =
      I18n.t("forms.hidden_text.#{form_item.visibility}", team_member_name_pluralized: team_member_name&.pluralize)

    form_item_format = form_item.item_type == 'free_text' ? form_item.properties['format'] : 'text'
    form_item_format == 'markdown' && format == 'markdown' ? "<em>#{hidden_text}</em>" : hidden_text
  end

  def should_replace_content_for_form_item?(form_item, content)
    form_item.visibility != 'normal' && content.present? && !form_item.visible_to?(viewer_role)
  end

  def render_markdown_for_field(field, value, group_cache_key, object_cache_key, default_content)
    loader = MarkdownLoader.for(group_cache_key, default_content, controller)
    loader.load([[object_cache_key, field], value, local_images])
  end

  def local_images
    @local_images ||=
      case response
      when Event, EventProposal
        response.images.includes(:blob).index_by { |image| image.filename.to_s }
      else
        {}
      end
  end
end
