# frozen_string_literal: true
class FormItemsLoader < GraphQL::Batch::Loader
  def perform(keys)
    clauses = []
    keys.each do |(form_id, identifier)|
      clauses << "(forms.id = #{ActiveRecord::Base.connection.quote form_id} AND identifier = #{ActiveRecord::Base.connection.quote identifier})"
    end
    form_items_scope = FormItem.joins(:form).includes(:form).where(clauses.join(" OR "))

    form_items_by_key = form_items_scope.to_a.index_by { |item| [item.form.id, item.identifier] }
    keys.each { |key| fulfill(key, form_items_by_key[key]) }
  end
end
