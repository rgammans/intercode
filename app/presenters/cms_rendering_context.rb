class CmsRenderingContext
  include Cadmus::RenderingHelper
  include Cadmus::Renderable
  attr_reader :cms_parent, :controller, :assigns, :cached_partials, :cached_files

  def initialize(cms_parent:, controller:, assigns: {})
    @cms_parent = cms_parent
    @controller = controller
    @assigns = assigns
    @cached_partials = {}
    @cached_files = {}
  end

  def convention
    return nil unless cms_parent.is_a?(Convention)
    cms_parent
  end

  def render_page_content(page)
    preload_page_content(page)
    cadmus_renderer.render(page.liquid_template, :html, assigns: { 'page' => page })
  end

  def preload_page_content(page)
    cached_partials.update(page.cms_partials.index_by(&:name).transform_values(&:liquid_template))
    cached_files.update(page.cms_files.index_by(&:filename))
  end

  def preload_cms_layout_content(cms_layout = nil)
    cms_layout ||= cms_parent&.default_layout
    return unless cms_layout

    cached_partials.update(
      cms_layout.cms_partials.index_by(&:name).transform_values(&:liquid_template)
    )

    cached_files.update(cms_layout.cms_files.index_by(&:filename))
  end

  # Cadmus checks this when rendering a layout
  def liquid_assigns_for_layout(cms_layout)
    {
      'content_for_head' => controller.render_to_string(partial: 'layouts/head'),
      'content_for_navbar' => navigation_bar(cms_layout)
    }
  end

  # These variables will automatically be made available to Cadmus CMS content.  For
  # example, you'll be able to do {{ user.name }} in a page template.
  def liquid_assigns
    cms_variables.merge(assigns)
  end

  # These variables aren't available from Cadmus CMS templates, but are available to
  # custom Liquid filters and tags via the Liquid::Context object.  Exposing the
  # controller is useful for generating URLs in templates.
  def liquid_registers
    liquid_assigns.merge(
      'controller' => controller,
      :cached_partials => cached_partials,
      :cached_files => cached_files,
      :file_system => Cadmus::PartialFileSystem.new(convention)
    )
  end

  def cms_variables
    @cms_variables ||= begin
      cms_parent.cms_variables.pluck(:key, :value).each_with_object({}) do |(key, value), hash|
        hash[key] = value
      end
    end
  end

  def navigation_bar(cms_layout = nil)
    controller.render_to_string partial: 'layouts/navigation_bar', locals: {
      navbar_classes: cms_layout&.navbar_classes || ApplicationHelper::DEFAULT_NAVBAR_CLASSES
    }
  end
end
