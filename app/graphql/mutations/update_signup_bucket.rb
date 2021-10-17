# frozen_string_literal: true
class Mutations::UpdateSignupBucket < Mutations::BaseMutation
  field :signup, Types::SignupType, null: false

  argument :id,
           Integer,
           deprecation_reason:
             "IDs are transitioning to the ID type.  For the moment, please use the transitionalId field until \
all id fields are replaced with ones of type ID.",
           required: false
  argument :transitional_id, ID, required: false, camelize: true
  argument :bucket_key, String, required: true, camelize: false

  load_and_authorize_convention_associated_model :signups, :id, :update_bucket

  def resolve(**args)
    raise 'The selected bucket is full.' if signup.run.bucket_full?(args[:bucket_key]) && signup.counted?

    original_bucket_key = signup.bucket_key
    signup.update!(bucket_key: args[:bucket_key])

    if signup.bucket_key_previously_changed? && signup.counted? && original_bucket_key
      EventVacancyFillService.new(signup.run, original_bucket_key, immovable_signups: signup.run.signups.confirmed.to_a)
        .call!
    end

    { signup: signup.reload }
  end
end
