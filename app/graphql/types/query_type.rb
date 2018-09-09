Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :convention, Types::ConventionType do
    argument :id, types.Int

    resolve ->(_obj, args, ctx) {
      if args[:id]
        Convention.find(args[:id])
      else
        ctx[:convention]
      end
    }
  end

  field :event, Types::EventType do
    argument :id, !types.Int

    resolve ->(_obj, args, ctx) {
      ctx[:convention].events.active.find(args[:id])
    }
  end

  field :events, types[Types::EventType] do
    argument :extendedCounts, types.Boolean
    argument :includeDropped, types.Boolean

    guard ->(_obj, args, ctx) do
      current_ability = ctx[:current_ability]
      convention = ctx[:convention]
      if args[:includeDropped]
        return false unless current_ability.can?(:manage, Event.new(convention: convention))
      end

      true
    end

    resolve ->(_obj, args, ctx) {
      events = ctx[:convention].events
      events = events.active unless args['includeDropped']
      events
    }
  end

  field :eventProposal, Types::EventProposalType do
    argument :id, !types.Int

    guard ->(_obj, args, ctx) do
      ctx[:current_ability].can?(:read, ctx[:convention].event_proposals.find(args[:id]))
    end

    resolve ->(_obj, args, ctx) do
      ctx[:convention].event_proposals.find(args[:id])
    end
  end

  field :my_signups, types[Types::SignupType] do
    resolve ->(_obj, _args, ctx) {
      ctx[:user_con_profile].signups
    }
  end

  field :myProfile, Types::UserConProfileType do
    resolve ->(_obj, _args, ctx) {
      ctx[:user_con_profile]
    }
  end

  field :userConProfile, Types::UserConProfileType do
    argument :id, !types.Int

    guard ->(_obj, args, ctx) do
      ctx[:current_ability].can?(:read, ctx[:convention].user_con_profiles.find(args[:id]))
    end

    resolve ->(_obj, args, ctx) {
      ctx[:convention].user_con_profiles.find(args[:id])
    }
  end

  field :form, Types::FormType do
    argument :id, !types.Int

    guard ->(_obj, args, ctx) do
      ctx[:current_ability].can?(:read, ctx[:convention].forms.find(args[:id]))
    end

    resolve ->(_obj, args, ctx) {
      ctx[:convention].forms.find(args[:id])
    }
  end

  field :staffPosition, Types::StaffPositionType do
    argument :id, !types.Int

    guard ->(_obj, args, ctx) do
      ctx[:current_ability].can?(:read, ctx[:convention].staff_positions.find(args[:id]))
    end

    resolve ->(_obj, args, ctx) {
      ctx[:convention].staff_positions.find(args[:id])
    }
  end

  field :previewMarkdown, !types.String do
    argument :markdown, !types.String

    resolve ->(_obj, args, _ctx) do
      MarkdownPresenter.new('').render(args[:markdown])
    end
  end

  field :previewLiquid, !types.String do
    argument :content, !types.String

    guard ->(_obj, _args, ctx) do
      # TODO maybe better permission for this?  Not sure, but for now I'm using con_com as a proxy
      # for "privileged enough to preview arbitrary Liquid (and therefore access arbitrary Liquid
      # drop data)"
      ctx[:current_ability].can?(:view_reports, ctx[:convention])
    end

    resolve ->(_obj, args, ctx) do
      ctx[:cadmus_renderer].render(Liquid::Template.parse(args['content']), :html)
    end
  end

  field :product, !Types::ProductType do
    argument :id, !types.Int

    guard ->(_obj, args, ctx) do
      ctx[:current_ability].can?(:read, ctx[:convention].products.find(args[:id]))
    end

    resolve ->(_obj, args, ctx) {
      ctx[:convention].products.find(args[:id])
    }
  end

  field :currentPendingOrder, Types::OrderType do
    resolve ->(_obj, _args, ctx) {
      ctx[:current_pending_order]
    }
  end

  field :signup, !Types::SignupType do
    argument :id, !types.Int

    guard ->(_obj, args, ctx) do
      ctx[:current_ability].can?(:read, ctx[:convention].signups.find(args[:id]))
    end

    resolve ->(_obj, args, ctx) {
      ctx[:convention].signups.find(args[:id])
    }
  end

  field :users_paginated, !Types::UsersPaginationType do
    argument :page, types.Int
    argument :per_page, types.Int
    argument :filters, Types::UserFiltersInputType
    argument :sort, types[Types::SortInputType]

    guard ->(_obj, _args, ctx) do
      ctx[:current_ability].can?(:read, User)
    end

    resolve ->(_obj, args, _ctx) do
      Tables::UsersTableResultsPresenter.new(
        User,
        args[:filters].to_h,
        args[:sort]
      ).paginate(page: args[:page], per_page: args[:per_page])
    end
  end
end
