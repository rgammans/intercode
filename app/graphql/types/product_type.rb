# frozen_string_literal: true
class Types::ProductType < Types::BaseObject
  field :id,
        Integer,
        deprecation_reason:
          'IDs are transitioning to the ID type.  For the moment, please use the transitionalId field until all id fields are replaced with ones of type ID.',
        null: false
  field :transitional_id, ID, method: :id, null: false, camelize: true
  field :product_variants, [Types::ProductVariantType], null: false
  field :available, Boolean, null: false
  field :name, String, null: false
  field :description, String, null: true
  field :description_html, String, null: true
  field :provides_ticket_type, Types::TicketTypeType, null: true

  association_loaders Product, :product_variants, :provides_ticket_type

  def description_html
    return unless object.description_template
    context[:cadmus_renderer].render(object.description_template, :html)
  end

  field :image_url, String, null: true

  def image_url
    object.image&.url
  end

  field :price, Types::MoneyType, null: false, deprecation_reason: 'Use pricing_structure instead'
  field :pricing_structure, Types::PricingStructureType, null: false
  field :payment_options, [String], null: false
  field :order_quantities_by_status, [Types::OrderQuantityByStatusType], null: false

  def order_quantities_by_status
    OrderQuantityByStatusLoader.for(Product).load(object)
  end

  def price
    object.pricing_structure.price
  end
end
