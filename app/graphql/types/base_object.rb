class Types::BaseObject < GraphQL::Schema::Object
  include Concerns::ContextAccessors

  def self.association_loader(model_class, association)
    define_method association do
      AssociationLoader.for(model_class, association).load(object)
    end
  end

  def self.association_loaders(model_class, *associations)
    associations.each do |association|
      association_loader model_class, association
    end
  end

  def self.pagination_field(name, pagination_type, filters_input_type, **options, &block)
    field name, pagination_type, null: false, **options do
      argument :page, Int, required: false
      argument :per_page, Int, required: false, camelize: false
      argument :filters, filters_input_type, required: false
      argument :sort, [Types::SortInputType], required: false

      instance_eval(&block) if block
    end
  end

  field_class Types::BaseField
end
