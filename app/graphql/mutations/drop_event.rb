# frozen_string_literal: true
class Mutations::DropEvent < Mutations::BaseMutation
  field :event, Types::EventType, null: false

  argument :id,
           Integer,
           deprecation_reason:
             "IDs are transitioning to the ID type.  For the moment, please use the transitionalId field until \
all id fields are replaced with ones of type ID.",
           required: false
  argument :transitional_id, ID, required: false, camelize: true

  load_and_authorize_convention_associated_model :events, :id, :drop

  def resolve(**_args)
    DropEventService.new(event: event).call!
    { event: event }
  end
end
