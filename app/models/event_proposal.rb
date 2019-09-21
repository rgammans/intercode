class EventProposal < ApplicationRecord
  include Concerns::AgeRestrictions
  include Concerns::EventEmail
  include Concerns::FormResponse

  STATUSES = Set.new(%w[draft proposed reviewing accepted rejected withdrawn])

  register_form_response_attrs :title,
    :email,
    :event_email,
    :age_restrictions,
    :team_mailing_list_name,
    :length_seconds,
    :description,
    :short_blurb,
    :registration_policy,
    :can_play_concurrently,
    :timeblock_preferences

  belongs_to :convention
  belongs_to :owner, class_name: 'UserConProfile', optional: true
  belongs_to :event, optional: true
  belongs_to :event_category

  STATUSES.each do |status|
    scope status, -> { where(status: status) }
  end

  scope :submitted, -> { where.not(status: 'draft') }
  scope :reminded, -> { where.not(reminded_at: nil) }
  scope :not_reminded, -> { where(reminded_at: nil) }

  serialize :registration_policy, ActiveModelCoder.new('RegistrationPolicy')
  serialize :timeblock_preferences, JsonArrayCoderWrapper.new(
    ActiveModelCoder.new('EventProposal::TimeblockPreference')
  )

  validates :status, inclusion: { in: STATUSES }
  validate :length_fits_in_convention

  def to_liquid
    EventProposalDrop.new(self)
  end

  private

  def length_fits_in_convention
    return unless length_seconds && length_seconds > convention.length_seconds
    errors.add :length_seconds, "Event cannot be longer than #{convention.name}"
  end
end
