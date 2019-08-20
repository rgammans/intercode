class UserConProfile < ApplicationRecord
  include Concerns::FormResponse
  include Concerns::Names

  MAIL_PRIV_NAMES = Set.new(
    %w[gms attendees vendors unpaid alumni].map { |group| "mail_to_#{group}" }
  )
  PRIV_NAMES = Set.new(
    %w[staff gm_liaison outreach] +
    MAIL_PRIV_NAMES.to_a
  )

  belongs_to :convention
  belongs_to :user
  has_one :ticket, dependent: :destroy
  has_many :team_members, dependent: :destroy
  has_many :signups, dependent: :destroy
  has_many :signup_requests, dependent: :destroy
  has_many :event_proposals, foreign_key: :owner_id, dependent: :nullify
  has_many :orders, dependent: :destroy
  has_and_belongs_to_many :staff_positions
  has_many :permissions, through: :staff_positions

  delegate :email, to: :user, allow_nil: true

  validates :name, presence: true
  validates :preferred_contact,
    inclusion: { in: %w[email day_phone evening_phone], allow_blank: true }

  before_create :generate_ical_secret
  after_commit :send_user_activity_alerts, on: :create
  after_commit :touch_team_member_events, on: [:create, :update]

  scope :has_privileges, ->(priv_names) {
    sql_clauses = priv_names.map { |priv_name| "#{priv_name} = ?" }
    where(sql_clauses.join(' OR '), *sql_clauses.map { |_clause| true })
  }

  scope :has_any_privileges, -> { has_privileges(PRIV_NAMES) }

  scope :is_team_member, -> { joins(:team_members).distinct }

  scope :has_staff_position, -> { joins(:staff_positions).distinct }

  scope :can_have_bio, -> {
    where(id: has_any_privileges.select(:id))
      .or(where(id: has_staff_position.select(:id)))
      .or(where(id: is_team_member.select(:id)))
  }

  register_form_response_attrs :first_name,
    :last_name,
    :nickname,
    :birth_date,
    :address,
    :city,
    :state,
    :zipcode,
    :country,
    :day_phone,
    :evening_phone,
    :best_call_time,
    :preferred_contact,
    :receive_whos_free_emails

  def paid?
    ticket
  end

  def unpaid?
    !ticket
  end

  def age_as_of_convention
    age_as_of convention.starts_at
  end

  # More or less copied from:
  # http://stackoverflow.com/questions/819263/get-persons-age-in-ruby
  def age_as_of(date)
    return unless birth_date

    on_or_after_birthday = (
      date.month > birth_date.month || (
        date.month == birth_date.month &&
        date.day >= birth_date.day
      )
    )

    date.year - birth_date.year - (on_or_after_birthday ? 0 : 1)
  end

  def age
    age_as_of Date.today
  end

  def full_address
    [address, city_state_zip, country].reject(&:blank?).join("\n")
  end

  def city_state_zip
    [city_state, zipcode].reject(&:blank?).join(' ')
  end

  def city_state
    [city, state].reject(&:blank?).join(', ')
  end

  def user_con_profile_privileges
    PRIV_NAMES.select { |priv| send(priv) }
  end

  def privileges
    user.privileges + user_con_profile_privileges
  end

  def privileges=(privileges)
    PRIV_NAMES.each do |priv|
      send("#{priv}=", privileges.include?(priv))
    end
  end

  %w[has_any_privileges is_team_member can_have_bio].each do |scope_name|
    define_method "#{scope_name}?" do
      self.class.public_send(scope_name).where(id: id).any?
    end
  end

  def email=(email)
    self.user = User.find_by(email: email)
    self.first_name ||= user.first_name
    self.last_name ||= user.last_name
  end

  def preferred_contact_humanized
    case preferred_contact
    when 'day_phone' then 'Daytime phone'
    when 'evening_phone' then 'Evening phone'
    when 'email' then 'Email'
    else preferred_contact.try(:humanize)
    end
  end

  def to_liquid
    UserConProfileDrop.new(self)
  end

  def name_without_nickname
    [first_name, last_name].compact.join(' ')
  end

  def name_parts
    [
      first_name,
      nickname.present? ? "\"#{nickname}\"" : nil,
      last_name
    ]
  end

  def bio_name
    [
      first_name,
      (show_nickname_in_bio && nickname.present?) ? "\"#{nickname}\"" : nil,
      last_name
    ].compact.join(' ')
  end

  def gravatar_url
    if gravatar_enabled?
      "https://gravatar.com/avatar/#{Digest::MD5.hexdigest(email.strip.downcase)}"
    else
      "https://gravatar.com/avatar/#{Digest::MD5.hexdigest('badrequest')}"
    end
  end

  def order_summary
    OrderSummaryPresenter.preload_associations([self])
    OrderSummaryPresenter.new(user_con_profile: self).order_summary
  end

  private

  def send_user_activity_alerts
    SendUserActivityAlertsJob.perform_later(self, 'user_con_profile_create')
  end

  def generate_ical_secret
    self.ical_secret ||= Devise.friendly_token
  end

  def touch_team_member_events
    Event.where(id: team_members.select(:event_id)).update_all(updated_at: Time.now)
  end
end
