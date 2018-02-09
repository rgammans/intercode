class FormResponseChange < ApplicationRecord
  belongs_to :response, polymorphic: true
  belongs_to :user_con_profile

  serialize :previous_value, JSON
  serialize :new_value, JSON

  scope :not_notified, -> { where(notified_at: nil) }
end
