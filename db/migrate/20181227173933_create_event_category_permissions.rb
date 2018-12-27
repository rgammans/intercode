class CreateEventCategoryPermissions < ActiveRecord::Migration[5.2]
  def change
    create_table :event_category_permissions do |t|
      t.references :event_category, null: false, foreign_key: true
      t.references :staff_position, null: false, foreign_key: true
      t.boolean :can_read_event_proposals, null: false, default: false
      t.boolean :can_read_pending_event_proposals, null: false, default: false
      t.boolean :can_update_event_proposals, null: false, default: false
      t.boolean :can_access_admin_notes, null: false, default: false
      t.boolean :can_override_event_tickets, null: false, default: false
      t.boolean :can_update_events, null: false, default: false
      t.index [:event_category_id, :staff_position_id], unique: true, name: 'idx_event_category_permissions_unique_join'

      t.timestamps
    end

    reversible do |dir|
      dir.up do
        autogenerate_hidden_staff_positions_for_privilege 'proposal_chair'
        grant_larp_permissions_to_privilege_holders(
          'proposal_chair',
          can_read_event_proposals: true,
          can_read_pending_event_proposals: true,
          can_update_event_proposals: true,
          can_access_admin_notes: true,
          can_override_event_tickets: true,
          can_update_events: true
        )

        autogenerate_hidden_staff_positions_for_privilege 'proposal_committee'
        grant_larp_permissions_to_privilege_holders(
          'proposal_committee',
          can_read_event_proposals: true,
          can_read_pending_event_proposals: false,
          can_update_event_proposals: false,
          can_access_admin_notes: false,
          can_override_event_tickets: false,
          can_update_events: false
        )
      end

      dir.down do
        execute <<~SQL, 'Setting privilege values for users with proposal_chair permissions'
          UPDATE user_con_profiles
          SET
            proposal_chair = 't'
          WHERE user_con_profiles.id IN (
            SELECT staff_positions_user_con_profiles.user_con_profile_id
            FROM staff_positions_user_con_profiles
            INNER JOIN event_category_permissions
              ON staff_positions_user_con_profiles.staff_position_id =
                event_category_permissions.staff_position_id
            INNER JOIN event_categories
              ON event_categories.id = event_category_permissions.event_category_id
            INNER JOIN user_con_profiles
              ON user_con_profiles.id = staff_positions_user_con_profiles.user_con_profile_id
            WHERE
              event_category_permissions.can_read_event_proposals = 't'
              AND event_category_permissions.can_read_pending_event_proposals = 't'
              AND event_category_permissions.can_update_event_proposals = 't'
              AND event_categories.name = 'Larp'
              AND user_con_profiles.staff = 'f'
          )
        SQL

        execute <<~SQL, 'Setting privilege values for users with proposal_committee permissions'
          UPDATE user_con_profiles
          SET
            proposal_committee = 't'
          WHERE user_con_profiles.id IN (
            SELECT staff_positions_user_con_profiles.user_con_profile_id
            FROM staff_positions_user_con_profiles
            INNER JOIN event_category_permissions
              ON staff_positions_user_con_profiles.staff_position_id =
                event_category_permissions.staff_position_id
            INNER JOIN event_categories
              ON event_categories.id = event_category_permissions.event_category_id
            INNER JOIN user_con_profiles
              ON user_con_profiles.id = staff_positions_user_con_profiles.user_con_profile_id
            WHERE
              event_category_permissions.can_read_event_proposals = 't'
              AND event_categories.name = 'Larp'
              AND user_con_profiles.proposal_chair = 'f'
              AND user_con_profiles.staff = 'f'
          )
        SQL
      end
    end

    remove_column :user_con_profiles, "proposal_committee", :boolean, default: false, null: false
    remove_column :user_con_profiles, "proposal_chair", :boolean, default: false, null: false
  end

  private

  def autogenerate_hidden_staff_positions_for_privilege(privilege)
    unpositioned_profile_data = select_rows <<~SQL, "Finding #{privilege} profiles with no staff position"
      SELECT
        user_con_profiles.id,
        user_con_profiles.convention_id
      FROM user_con_profiles
      LEFT JOIN staff_positions_user_con_profiles
        ON staff_positions_user_con_profiles.user_con_profile_id = user_con_profiles.id
      LEFT JOIN staff_positions
        ON staff_positions_user_con_profiles.staff_position_id = staff_positions.id
      WHERE
        user_con_profiles.#{quote_column_name privilege} = 't'
        AND user_con_profiles.staff = 'f'
        AND staff_positions.id IS NULL
    SQL

    hidden_staff_positions_by_convention_id = {}
    unpositioned_profile_data.map(&:second).uniq.each do |convention_id|
      staff_position = StaffPosition.create!(
        convention_id: convention_id,
        name: "Autogenerated hidden #{privilege} position",
        visible: false
      )
      hidden_staff_positions_by_convention_id[convention_id] = staff_position
    end

    unpositioned_profile_data.each do |(user_con_profile_id, convention_id)|
      staff_position = hidden_staff_positions_by_convention_id[convention_id]
      insert <<~SQL, "Adding user con profile #{user_con_profile_id} to autogenerated staff position"
        INSERT INTO staff_positions_user_con_profiles (
          staff_position_id,
          user_con_profile_id
        ) VALUES (#{quote staff_position.id}, #{quote user_con_profile_id})
      SQL
    end
  end

  def grant_larp_permissions_to_privilege_holders(
    privilege,
    can_read_event_proposals:,
    can_read_pending_event_proposals:,
    can_update_event_proposals:,
    can_access_admin_notes:,
    can_override_event_tickets:,
    can_update_events:
  )
    execute <<~SQL, "Granting permissions to staff positions containing #{privilege} profiles"
      INSERT INTO event_category_permissions (
        event_category_id,
        staff_position_id,
        can_read_event_proposals,
        can_read_pending_event_proposals,
        can_update_event_proposals,
        can_access_admin_notes,
        can_override_event_tickets,
        can_update_events,
        created_at,
        updated_at
      )
      SELECT
        event_categories.id,
        staff_positions.id,
        #{quote(can_read_event_proposals ? 't' : 'f')},
        #{quote(can_read_pending_event_proposals ? 't' : 'f')},
        #{quote(can_update_event_proposals ? 't' : 'f')},
        #{quote(can_access_admin_notes ? 't' : 'f')},
        #{quote(can_override_event_tickets ? 't' : 'f')},
        #{quote(can_update_events ? 't' : 'f')},
        NOW(),
        NOW()
      FROM user_con_profiles
      LEFT JOIN staff_positions_user_con_profiles
        ON staff_positions_user_con_profiles.user_con_profile_id = user_con_profiles.id
      LEFT JOIN staff_positions
        ON staff_positions_user_con_profiles.staff_position_id = staff_positions.id
      LEFT JOIN event_categories
        ON (
          event_categories.convention_id = user_con_profiles.convention_id
          AND event_categories.name = 'Larp'
        )
      WHERE
        user_con_profiles.#{quote_column_name privilege} = 't'
        AND user_con_profiles.staff = 'f'
        AND staff_positions.id IS NOT NULL
      ON CONFLICT DO NOTHING
    SQL
  end
end
