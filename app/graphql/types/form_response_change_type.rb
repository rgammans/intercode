# frozen_string_literal: true
class Types::FormResponseChangeType < Types::BaseObject
  # no ID field because these can be autogenerated by CompactingFormResponseChangesPresenter

  field :user_con_profile, Types::UserConProfileType, null: false
  field :field_identifier, String, null: false
  field :new_value, Types::JSON, null: true
  field :previous_value, Types::JSON, null: true
  field :compacted, Boolean, null: false
  field :created_at, Types::DateType, null: false
  field :updated_at, Types::DateType, null: false
  field :notified_at, Types::DateType, null: true

  association_loaders FormResponseChange, :user_con_profile
end
