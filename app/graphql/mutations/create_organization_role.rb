# frozen_string_literal: true
class Mutations::CreateOrganizationRole < Mutations::BaseMutation
  field :organization_role, Types::OrganizationRoleType, null: false

  argument :organization_id, ID, required: false, camelize: true
  argument :organization_role, Types::OrganizationRoleInputType, required: true, camelize: false
  argument :user_ids, [ID], required: false, camelize: true
  argument :permissions, [Types::PermissionInputType], required: true

  attr_reader :organization

  define_authorization_check do |args|
    @organization = Organization.find(args[:organization_id])
    policy(OrganizationRole.new(organization: organization)).create?
  end

  def resolve(**args)
    new_role = organization.organization_roles.create!(args[:organization_role].to_h)
    new_role.update!(user_ids: processed_args[:user_ids])
    processed_args[:permissions].each { |permission| new_role.permissions.create!(permission) }

    # not sure why, but if I don't do this it seems like permissions get returned twice
    new_role.reload

    { organization_role: new_role }
  end
end
