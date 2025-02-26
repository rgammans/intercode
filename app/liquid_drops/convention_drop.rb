# frozen_string_literal: true
# The convention itself
class ConventionDrop < Liquid::Drop
  # @api
  attr_reader :convention

  # @!method id
  #   @return [Integer] The numeric database id of the convention
  # @!method name
  #   @return [String] The name of the convention
  # @!method event_mailing_list_domain
  #   @return [String] The domain name this convention uses for automatically-generated event
  #                    mailing lists
  # @!method accepting_proposals
  #   @return [Boolean] Whether or not the convention is currently accepting event proposals
  # @!method show_schedule
  #   @return [String] "no", "priv", "gms", or "yes" depending on who the schedule is visible to
  # @!method show_event_list
  #   @return [String] "no", "priv", "gms", or "yes" depending on who the event list is visible to
  # @!method ticket_name
  #   @return [String] The name this convention uses for "tickets"
  # @!method ticket_mode
  #   @return [String] How tickets are handled in this convention (possible values are 'disabled'
  #                    and 'required_for_signup')
  # @!method organization
  #   @return [OrganizationDrop] The organization running this convention
  # @!method canceled
  #   @return [Boolean] Whether or not the convention is canceled
  delegate :id,
           :name,
           :started?,
           :ended?,
           :event_mailing_list_domain,
           :accepting_proposals,
           :show_schedule,
           :show_event_list,
           :ticket_name,
           :organization,
           :ticket_mode,
           :canceled,
           to: :convention

  # @return [Boolean] Whether or not the convention has already started
  alias started started?

  # @return [Boolean] Whether or not the convention has already ended
  alias ended ended?

  # @api
  def initialize(convention)
    @convention = convention
  end

  # @return [Array<RunAvailabilityDrop>] Run availabilities for this convention
  def run_availabilities
    runs = convention.runs.includes(event: :event_category).order(:starts_at)
    presenters = RunAvailabilityPresenter.for_runs(runs)
    runs.map { |r| presenters[r.id] }
  end

  # @return [Array<RunAvailabilityDrop>] Run availabilities for this convention with any slots
  #                                      (counted or not-counted) available
  def run_availabilities_with_any_slots
    run_availabilities.select(&:has_any_slots?)
  end

  # @return [Array<RunAvailabilityDrop>] Run availabilities for this convention with counted slots
  #                                      available
  def run_availabilities_with_counted_slots
    run_availabilities.select(&:has_counted_slots?)
  end

  # @return [Array<RunAvailabilityDrop>] Run availabilities for this convention with not-counted
  #                                      slots available
  def run_availabilities_with_not_counted_slots
    run_availabilities.select(&:has_not_counted_slots?)
  end

  # @deprecated
  # @return [Array<RunDrop>] Runs of events in this convention that have any available slots in
  #                          limited buckets
  def runs_with_openings
    presenters = SignupCountPresenter.for_runs(convention.runs.includes(:event))
    presenters
      .select do |_run_id, presenter|
        buckets = presenter.run.event.registration_policy.buckets.select(&:slots_limited?)
        limited_signup_count =
          buckets.sum { |bucket| presenter.signup_count(state: "confirmed", bucket_key: bucket.key) }
        limited_signup_count < buckets.sum(&:total_slots)
      end
      .values
      .map(&:run)
  end

  # @deprecated
  # @return [Array<RunDrop>] Runs of non-volunteer events in this convention that have any available
  #                          slots in limited buckets
  def non_volunteer_runs_with_openings
    runs_with_openings.reject { |run| run.event.event_category.name == "Volunteer event" }
  end

  # @return [Array<EventDrop>] Events at the convention
  def events
    @events ||= convention.events.includes(:runs, team_members: :user_con_profile).to_a
  end

  # @return [EventsCreatedSinceDrop] A structure that lets you access just the events created since
  #                                  a certain time.  This is much more efficient than using the
  #                                  events method and filtering by created_at.
  # @example Retrieving the events created since a certain date
  #   {{ convention.events_created_since["2018-11-03T00:00:00-05:00"] }}
  # @example Retrieving the events created since the last signup round opened
  #   {{ convention.events_created_since[convention.maximum_event_signups.current_value_change] }}
  def events_created_since
    @events_created_since ||= EventsCreatedSinceDrop.new(convention)
  end

  # @return [Array<RunDrop>] Event runs at the convention
  def runs
    @events ||= convention.runs.includes(:event).to_a
  end

  # @return [Array<EventCategoryDrop>] Event categories at the convention
  def event_categories
    @event_categories ||= convention.event_categories.to_a
  end

  # @return [Array<UserConProfileDrop>] UserConProfiles in this convention that can have a bio
  def bio_eligible_user_con_profiles
    convention.user_con_profiles.can_have_bio.to_a
  end

  # @return [Array<ProductDrop>] All products in this convention
  def products
    convention.products.to_a
  end

  # @return [Array<ProductDrop>] Products in this convention that are available for purchase
  def available_products
    convention.products.available.to_a
  end

  # @return [Array<StaffPositionDrop>] All staff positions in this convention
  def staff_positions
    convention.staff_positions.visible.to_a
  end

  # @return [Hash<String, StaffPositionDrop>] All staff positions in this convention, indexed by
  #                                           name (all lowercase, spaces replaced with underscores)
  # @example Retrieving the vendor liaison email address for a convention
  #   {{ convention.staff_positions_by_name.vendor_liaison.email }}
  def staff_positions_by_name
    convention.staff_positions.index_by { |staff_position| staff_position.name.gsub(/\W/, "_").downcase }
  end

  # @return [Array<TicketTypeDrop>] All ticket types for this convention
  def ticket_types
    convention.ticket_types.to_a
  end

  # @return [Hash<String, Integer>] The number of tickets that have been issued in this convention,
  #                                 indexed by ticket type name
  # @example Retrieving the count of weekend tickets for a convention
  #   {{ convention.ticket_counts_by_type.weekend }}
  def ticket_counts_by_type
    ticket_counts_by_type_id = convention.tickets.group(:ticket_type_id).count

    convention
      .ticket_types
      .each_with_object({}) do |ticket_type, hash|
        hash[ticket_type.name] = ticket_counts_by_type_id[ticket_type.id] || 0
      end
      .merge("total" => ticket_counts_by_type_id.values.sum)
  end

  # @return [ScheduledValueDrop] The schedule of maximum event signups for this convention
  def maximum_event_signups
    ScheduledValueDrop.new(convention.maximum_event_signups, effective_timezone)
  end

  # @return [ScheduledValue::TimespanDrop] The time span of the convention
  def timespan
    ScheduledValue::Timespan.new(start: starts_at, finish: ends_at)
  end

  # @return [ActiveSupport::TimeWithZone] The time at which this convention starts
  def starts_at
    @starts_at ||= convention.starts_at&.in_time_zone(effective_timezone)
  end

  # @return [ActiveSupport::TimeWithZone] The time at which this convention ends
  def ends_at
    @ends_at ||= convention.ends_at&.in_time_zone(effective_timezone)
  end

  # @return [String] The root URL for this convention
  def url
    protocol = Rails.application.config.action_mailer.default_url_options[:protocol] || "http"
    port = Rails.application.config.action_mailer.default_url_options[:port]

    default_port = protocol == "https" ? 443 : 80
    hostname = convention.domain
    hostname << ":#{port}" if port && port != default_port

    "#{protocol}://#{hostname}"
  end

  # @return [Hash] A hash value representing this convention's location, suitable for passing
  #                to the {% map %} tag
  def location
    return nil unless convention.location
    convention.location
  end

  # @return [Array<Hash>] An attendance-by-payment-amount report.  Each item in the report has
  #                       values at the keys "ticket_type", "payment_amount", "count", and "total_amount".
  #                       The report is grouped by "ticket_type" and "payment_amount".  For convenience,
  #                       "total_amount" is provided and is the "payment_amount" multiplied by the "count"
  #                       for this row.
  def attendance_by_payment_amount
    reports_presenter.ticket_count_by_type_and_payment_amount.map do |row|
      row.stringify_keys.merge("total_amount" => row[:payment_amount] * row[:count])
    end
  end

  # @return [Array<Hash>] A sales-by-payment-amount report.  Each item in the report has
  #                       values at the keys "product", "status", "payment_amount", "count", and "total_amount".
  #                       The report is grouped by "product", "status" and "payment_amount".  For convenience,
  #                       "total_amount" is provided and is the "payment_amount" multiplied by the "count"
  #                       for this row.
  #
  #                       Please note that this potentially includes booked-but-unpaid sales.  If you don't want those,
  #                       be sure to filter them out in your template.
  def sales_by_payment_amount
    rows = reports_presenter.sales_count_by_product_and_payment_amount
    products_by_id = Product.find(rows.pluck(:product_id)).index_by(&:id)
    rows.map do |row|
      row.stringify_keys.merge(
        "total_amount" => row[:payment_amount] * row[:count],
        "product" => products_by_id[row[:product_id]]
      )
    end
  end

  private

  # @api
  def effective_timezone
    (@context&.registers || {})[:timezone] || Time.zone
  end

  def reports_presenter
    @reports_presenter ||= ConventionReportsPresenter.new(convention)
  end
end
