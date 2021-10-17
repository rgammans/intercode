# frozen_string_literal: true
class Types::ProductVariantType < Types::BaseObject
  field :id,
        Integer,
        deprecation_reason:
          "IDs are transitioning to the ID type.  For the moment, please use the transitionalId field until \
all id fields are replaced with ones of type ID.",
        null: false
  field :transitional_id, ID, method: :id, null: false, camelize: true
  field :product, Types::ProductType, null: false

  association_loaders ProductVariant, :product

  field :name, String, null: false
  field :description, String, null: true
  field :description_html, String, null: true

  def description_html
    return unless object.description
    context[:cadmus_renderer].render(object.description, :html)
  end

  field :image_url, String, null: true

  def image_url
    object.image&.url
  end

  field :override_price, Types::MoneyType, null: true, deprecation_reason: 'Use override_pricing_structure instead'
  field :override_pricing_structure, Types::PricingStructureType, null: true
  field :position, Integer, null: true

  field :order_quantities_by_status, [Types::OrderQuantityByStatusType], null: false

  def order_quantities_by_status
    OrderQuantityByStatusLoader.for(ProductVariant).load(object)
  end

  def override_price
    object.override_pricing_structure&.price
  end
end
