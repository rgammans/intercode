/* eslint-disable */
import * as Types from '../../graphqlTypes.generated';

import { gql } from '@apollo/client';
import { CommonConventionDataFragmentDoc } from '../queries.generated';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type SignupFieldsFragment = { __typename: 'Signup', state: Types.SignupState, counted: boolean, bucket_key?: string | null | undefined, requested_bucket_key?: string | null | undefined, id: string, run: { __typename: 'Run', title_suffix?: string | null | undefined, starts_at: any, ends_at: any, id: string, rooms: Array<{ __typename: 'Room', name?: string | null | undefined, id: string }>, event: { __typename: 'Event', title?: string | null | undefined, id: string, event_category: { __typename: 'EventCategory', team_member_name: string, id: string }, registration_policy?: { __typename: 'RegistrationPolicy', buckets: Array<{ __typename: 'RegistrationPolicyBucket', key: string, name?: string | null | undefined, anything: boolean }> } | null | undefined, team_members: Array<{ __typename: 'TeamMember', id: string, user_con_profile: { __typename: 'UserConProfile', id: string } }> } }, user_con_profile: { __typename: 'UserConProfile', name_without_nickname: string, nickname?: string | null | undefined, birth_date?: any | null | undefined, email?: string | null | undefined, address?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zipcode?: string | null | undefined, country?: string | null | undefined, mobile_phone?: string | null | undefined, gravatar_enabled: boolean, gravatar_url: string, id: string } };

export type UserConProfileSignupsFragment = { __typename: 'UserConProfile', id: string, signups: Array<{ __typename: 'Signup', state: Types.SignupState, counted: boolean, bucket_key?: string | null | undefined, requested_bucket_key?: string | null | undefined, id: string, user_con_profile: { __typename: 'UserConProfile', id: string }, run: { __typename: 'Run', starts_at: any, id: string, event: { __typename: 'Event', title?: string | null | undefined, length_seconds: number, id: string, event_category: { __typename: 'EventCategory', team_member_name: string, id: string }, registration_policy?: { __typename: 'RegistrationPolicy', buckets: Array<{ __typename: 'RegistrationPolicyBucket', key: string, name?: string | null | undefined }> } | null | undefined, team_members: Array<{ __typename: 'TeamMember', id: string, user_con_profile: { __typename: 'UserConProfile', id: string } }> }, rooms: Array<{ __typename: 'Room', name?: string | null | undefined, id: string }> } }> };

export type SignupAdminEventQueryVariables = Types.Exact<{
  eventId: Types.Scalars['Int'];
}>;


export type SignupAdminEventQueryData = { __typename: 'Query', convention: { __typename: 'Convention', name: string, starts_at?: any | null | undefined, ends_at?: any | null | undefined, site_mode: Types.SiteMode, timezone_name?: string | null | undefined, timezone_mode: Types.TimezoneMode, ticket_name: string, ticket_mode: Types.TicketMode, id: string, event: { __typename: 'Event', title?: string | null | undefined, id: string }, event_categories: Array<{ __typename: 'EventCategory', name: string, scheduling_ui: Types.SchedulingUi, default_color?: string | null | undefined, full_color?: string | null | undefined, signed_up_color?: string | null | undefined, id: string }> } };

export type AdminSignupQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type AdminSignupQueryData = { __typename: 'Query', convention: { __typename: 'Convention', name: string, starts_at?: any | null | undefined, ends_at?: any | null | undefined, site_mode: Types.SiteMode, timezone_name?: string | null | undefined, timezone_mode: Types.TimezoneMode, ticket_name: string, ticket_mode: Types.TicketMode, id: string, signup: { __typename: 'Signup', state: Types.SignupState, counted: boolean, bucket_key?: string | null | undefined, requested_bucket_key?: string | null | undefined, id: string, run: { __typename: 'Run', title_suffix?: string | null | undefined, starts_at: any, ends_at: any, id: string, rooms: Array<{ __typename: 'Room', name?: string | null | undefined, id: string }>, event: { __typename: 'Event', title?: string | null | undefined, id: string, event_category: { __typename: 'EventCategory', team_member_name: string, id: string }, registration_policy?: { __typename: 'RegistrationPolicy', buckets: Array<{ __typename: 'RegistrationPolicyBucket', key: string, name?: string | null | undefined, anything: boolean }> } | null | undefined, team_members: Array<{ __typename: 'TeamMember', id: string, user_con_profile: { __typename: 'UserConProfile', id: string } }> } }, user_con_profile: { __typename: 'UserConProfile', name_without_nickname: string, nickname?: string | null | undefined, birth_date?: any | null | undefined, email?: string | null | undefined, address?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zipcode?: string | null | undefined, country?: string | null | undefined, mobile_phone?: string | null | undefined, gravatar_enabled: boolean, gravatar_url: string, id: string } }, event_categories: Array<{ __typename: 'EventCategory', name: string, scheduling_ui: Types.SchedulingUi, default_color?: string | null | undefined, full_color?: string | null | undefined, signed_up_color?: string | null | undefined, id: string }> }, currentAbility: { __typename: 'Ability', can_update_bucket_signup: boolean, can_force_confirm_signup: boolean, can_update_counted_signup: boolean } };

export type RunSignupsTableSignupsQueryVariables = Types.Exact<{
  eventId: Types.Scalars['Int'];
  runId: Types.Scalars['Int'];
  page?: Types.Maybe<Types.Scalars['Int']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
  filters?: Types.Maybe<Types.SignupFiltersInput>;
  sort?: Types.Maybe<Array<Types.SortInput> | Types.SortInput>;
}>;


export type RunSignupsTableSignupsQueryData = { __typename: 'Query', convention: { __typename: 'Convention', name: string, id: string, event: { __typename: 'Event', title?: string | null | undefined, id: string, event_category: { __typename: 'EventCategory', team_member_name: string, id: string }, team_members: Array<{ __typename: 'TeamMember', id: string, user_con_profile: { __typename: 'UserConProfile', id: string } }>, registration_policy?: { __typename: 'RegistrationPolicy', buckets: Array<{ __typename: 'RegistrationPolicyBucket', key: string, name?: string | null | undefined }> } | null | undefined, run: { __typename: 'Run', id: string, signups_paginated: { __typename: 'SignupsPagination', total_entries: number, total_pages: number, current_page: number, per_page: number, entries: Array<{ __typename: 'Signup', state: Types.SignupState, counted: boolean, bucket_key?: string | null | undefined, requested_bucket_key?: string | null | undefined, age_restrictions_check: string, id: string, run: { __typename: 'Run', starts_at: any, id: string }, user_con_profile: { __typename: 'UserConProfile', name_inverted: string, name_without_nickname: string, gravatar_enabled: boolean, gravatar_url: string, email?: string | null | undefined, birth_date?: any | null | undefined, id: string } }> } } } } };

export type RunHeaderRunInfoQueryVariables = Types.Exact<{
  eventId: Types.Scalars['Int'];
  runId: Types.Scalars['Int'];
}>;


export type RunHeaderRunInfoQueryData = { __typename: 'Query', convention: { __typename: 'Convention', name: string, starts_at?: any | null | undefined, ends_at?: any | null | undefined, site_mode: Types.SiteMode, timezone_name?: string | null | undefined, timezone_mode: Types.TimezoneMode, ticket_name: string, ticket_mode: Types.TicketMode, id: string, event: { __typename: 'Event', title?: string | null | undefined, length_seconds: number, id: string, registration_policy?: { __typename: 'RegistrationPolicy', total_slots?: number | null | undefined, slots_limited?: boolean | null | undefined, buckets: Array<{ __typename: 'RegistrationPolicyBucket', name?: string | null | undefined, total_slots?: number | null | undefined }> } | null | undefined, run: { __typename: 'Run', starts_at: any, title_suffix?: string | null | undefined, id: string } }, event_categories: Array<{ __typename: 'EventCategory', name: string, scheduling_ui: Types.SchedulingUi, default_color?: string | null | undefined, full_color?: string | null | undefined, signed_up_color?: string | null | undefined, id: string }> } };

export type RunSignupSummaryQueryVariables = Types.Exact<{
  eventId: Types.Scalars['Int'];
  runId: Types.Scalars['Int'];
}>;


export type RunSignupSummaryQueryData = { __typename: 'Query', convention: { __typename: 'Convention', name: string, starts_at?: any | null | undefined, ends_at?: any | null | undefined, site_mode: Types.SiteMode, timezone_name?: string | null | undefined, timezone_mode: Types.TimezoneMode, ticket_name: string, ticket_mode: Types.TicketMode, id: string, event: { __typename: 'Event', title?: string | null | undefined, id: string, event_category: { __typename: 'EventCategory', team_member_name: string, id: string }, registration_policy?: { __typename: 'RegistrationPolicy', buckets: Array<{ __typename: 'RegistrationPolicyBucket', key: string, name?: string | null | undefined, expose_attendees: boolean }> } | null | undefined, team_members: Array<{ __typename: 'TeamMember', id: string, user_con_profile: { __typename: 'UserConProfile', id: string } }>, runs: Array<{ __typename: 'Run', starts_at: any, id: string }>, run: { __typename: 'Run', id: string, signups_paginated: { __typename: 'SignupsPagination', entries: Array<{ __typename: 'Signup', state: Types.SignupState, bucket_key?: string | null | undefined, waitlist_position?: number | null | undefined, id: string, user_con_profile: { __typename: 'UserConProfile', name_inverted: string, gravatar_enabled: boolean, gravatar_url: string, id: string } }> } } }, event_categories: Array<{ __typename: 'EventCategory', name: string, scheduling_ui: Types.SchedulingUi, default_color?: string | null | undefined, full_color?: string | null | undefined, signed_up_color?: string | null | undefined, id: string }> }, currentAbility: { __typename: 'Ability', can_read_schedule: boolean } };

export type UserConProfileSignupsQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type UserConProfileSignupsQueryData = { __typename: 'Query', convention: { __typename: 'Convention', name: string, starts_at?: any | null | undefined, ends_at?: any | null | undefined, site_mode: Types.SiteMode, timezone_name?: string | null | undefined, timezone_mode: Types.TimezoneMode, ticket_name: string, ticket_mode: Types.TicketMode, id: string, my_profile?: { __typename: 'UserConProfile', id: string, ability?: { __typename: 'Ability', can_withdraw_all_user_con_profile_signups: boolean } | null | undefined } | null | undefined, user_con_profile: { __typename: 'UserConProfile', name_without_nickname: string, ical_secret?: string | null | undefined, id: string, team_members: Array<{ __typename: 'TeamMember', id: string, event: { __typename: 'Event', title?: string | null | undefined, status?: string | null | undefined, id: string } }>, signups: Array<{ __typename: 'Signup', state: Types.SignupState, counted: boolean, bucket_key?: string | null | undefined, requested_bucket_key?: string | null | undefined, id: string, user_con_profile: { __typename: 'UserConProfile', id: string }, run: { __typename: 'Run', starts_at: any, id: string, event: { __typename: 'Event', title?: string | null | undefined, length_seconds: number, id: string, event_category: { __typename: 'EventCategory', team_member_name: string, id: string }, registration_policy?: { __typename: 'RegistrationPolicy', buckets: Array<{ __typename: 'RegistrationPolicyBucket', key: string, name?: string | null | undefined }> } | null | undefined, team_members: Array<{ __typename: 'TeamMember', id: string, user_con_profile: { __typename: 'UserConProfile', id: string } }> }, rooms: Array<{ __typename: 'Room', name?: string | null | undefined, id: string }> } }> }, event_categories: Array<{ __typename: 'EventCategory', name: string, scheduling_ui: Types.SchedulingUi, default_color?: string | null | undefined, full_color?: string | null | undefined, signed_up_color?: string | null | undefined, id: string }> } };

export type RunSignupChangesQueryVariables = Types.Exact<{
  runId: Types.Scalars['Int'];
  filters?: Types.Maybe<Types.SignupChangeFiltersInput>;
  sort?: Types.Maybe<Array<Types.SortInput> | Types.SortInput>;
  page?: Types.Maybe<Types.Scalars['Int']>;
  perPage?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type RunSignupChangesQueryData = { __typename: 'Query', convention: { __typename: 'Convention', timezone_name?: string | null | undefined, id: string, run: { __typename: 'Run', id: string, event: { __typename: 'Event', title?: string | null | undefined, id: string }, signup_changes_paginated: { __typename: 'SignupChangesPagination', total_entries: number, total_pages: number, current_page: number, per_page: number, entries: Array<{ __typename: 'SignupChange', state: Types.SignupState, counted: boolean, bucket_key?: string | null | undefined, action: Types.SignupChangeAction, created_at: any, id: string, previous_signup_change?: { __typename: 'SignupChange', state: Types.SignupState, counted: boolean, bucket_key?: string | null | undefined, id: string } | null | undefined, run: { __typename: 'Run', id: string, event: { __typename: 'Event', title?: string | null | undefined, id: string, event_category: { __typename: 'EventCategory', team_member_name: string, id: string }, registration_policy?: { __typename: 'RegistrationPolicy', buckets: Array<{ __typename: 'RegistrationPolicyBucket', key: string, name?: string | null | undefined, anything: boolean }> } | null | undefined, team_members: Array<{ __typename: 'TeamMember', id: string, user_con_profile: { __typename: 'UserConProfile', id: string } }> } }, user_con_profile: { __typename: 'UserConProfile', name_inverted: string, gravatar_enabled: boolean, gravatar_url: string, id: string } }> } } } };

export const SignupFieldsFragmentDoc = gql`
    fragment SignupFields on Signup {
  id: transitionalId
  state
  counted
  bucket_key
  requested_bucket_key
  run {
    id: transitionalId
    title_suffix
    starts_at
    ends_at
    rooms {
      id: transitionalId
      name
    }
    event {
      id: transitionalId
      title
      event_category {
        id: transitionalId
        team_member_name
      }
      registration_policy {
        buckets {
          key
          name
          anything
        }
      }
      team_members {
        id: transitionalId
        user_con_profile {
          id: transitionalId
        }
      }
    }
  }
  user_con_profile {
    id: transitionalId
    name_without_nickname
    nickname
    birth_date
    email
    address
    city
    state
    zipcode
    country
    mobile_phone
    gravatar_enabled
    gravatar_url
  }
}
    `;
export const UserConProfileSignupsFragmentDoc = gql`
    fragment UserConProfileSignupsFragment on UserConProfile {
  id: transitionalId
  signups {
    id: transitionalId
    state
    counted
    bucket_key
    requested_bucket_key
    user_con_profile {
      id: transitionalId
    }
    run {
      id: transitionalId
      starts_at
      event {
        id: transitionalId
        title
        length_seconds
        event_category {
          id: transitionalId
          team_member_name
        }
        registration_policy {
          buckets {
            key
            name
          }
        }
        team_members {
          id: transitionalId
          user_con_profile {
            id: transitionalId
          }
        }
      }
      rooms {
        id: transitionalId
        name
      }
    }
  }
}
    `;
export const SignupAdminEventQueryDocument = gql`
    query SignupAdminEventQuery($eventId: Int!) {
  convention: conventionByRequestHost {
    id: transitionalId
    ...CommonConventionData
    event(id: $eventId) {
      id: transitionalId
      title
    }
  }
}
    ${CommonConventionDataFragmentDoc}`;

/**
 * __useSignupAdminEventQuery__
 *
 * To run a query within a React component, call `useSignupAdminEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignupAdminEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignupAdminEventQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useSignupAdminEventQuery(baseOptions: Apollo.QueryHookOptions<SignupAdminEventQueryData, SignupAdminEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SignupAdminEventQueryData, SignupAdminEventQueryVariables>(SignupAdminEventQueryDocument, options);
      }
export function useSignupAdminEventQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SignupAdminEventQueryData, SignupAdminEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SignupAdminEventQueryData, SignupAdminEventQueryVariables>(SignupAdminEventQueryDocument, options);
        }
export type SignupAdminEventQueryHookResult = ReturnType<typeof useSignupAdminEventQuery>;
export type SignupAdminEventQueryLazyQueryHookResult = ReturnType<typeof useSignupAdminEventQueryLazyQuery>;
export type SignupAdminEventQueryQueryResult = Apollo.QueryResult<SignupAdminEventQueryData, SignupAdminEventQueryVariables>;
export const AdminSignupQueryDocument = gql`
    query AdminSignupQuery($id: Int!) {
  convention: conventionByRequestHost {
    id: transitionalId
    ...CommonConventionData
    signup(id: $id) {
      id: transitionalId
      ...SignupFields
    }
  }
  currentAbility {
    can_update_bucket_signup(signup_id: $id)
    can_force_confirm_signup(signup_id: $id)
    can_update_counted_signup(signup_id: $id)
  }
}
    ${CommonConventionDataFragmentDoc}
${SignupFieldsFragmentDoc}`;

/**
 * __useAdminSignupQuery__
 *
 * To run a query within a React component, call `useAdminSignupQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminSignupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminSignupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdminSignupQuery(baseOptions: Apollo.QueryHookOptions<AdminSignupQueryData, AdminSignupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminSignupQueryData, AdminSignupQueryVariables>(AdminSignupQueryDocument, options);
      }
export function useAdminSignupQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminSignupQueryData, AdminSignupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminSignupQueryData, AdminSignupQueryVariables>(AdminSignupQueryDocument, options);
        }
export type AdminSignupQueryHookResult = ReturnType<typeof useAdminSignupQuery>;
export type AdminSignupQueryLazyQueryHookResult = ReturnType<typeof useAdminSignupQueryLazyQuery>;
export type AdminSignupQueryQueryResult = Apollo.QueryResult<AdminSignupQueryData, AdminSignupQueryVariables>;
export const RunSignupsTableSignupsQueryDocument = gql`
    query RunSignupsTableSignupsQuery($eventId: Int!, $runId: Int!, $page: Int, $perPage: Int, $filters: SignupFiltersInput, $sort: [SortInput!]) {
  convention: conventionByRequestHost {
    id: transitionalId
    name
    event(id: $eventId) {
      id: transitionalId
      title
      event_category {
        id: transitionalId
        team_member_name
      }
      team_members {
        id: transitionalId
        user_con_profile {
          id: transitionalId
        }
      }
      registration_policy {
        buckets {
          key
          name
        }
      }
      run(id: $runId) {
        id: transitionalId
        signups_paginated(
          page: $page
          per_page: $perPage
          filters: $filters
          sort: $sort
        ) {
          total_entries
          total_pages
          current_page
          per_page
          entries {
            id: transitionalId
            state
            counted
            bucket_key
            requested_bucket_key
            age_restrictions_check
            run {
              id: transitionalId
              starts_at
            }
            user_con_profile {
              id: transitionalId
              name_inverted
              name_without_nickname
              gravatar_enabled
              gravatar_url
              email
              birth_date
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useRunSignupsTableSignupsQuery__
 *
 * To run a query within a React component, call `useRunSignupsTableSignupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRunSignupsTableSignupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRunSignupsTableSignupsQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *      runId: // value for 'runId'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useRunSignupsTableSignupsQuery(baseOptions: Apollo.QueryHookOptions<RunSignupsTableSignupsQueryData, RunSignupsTableSignupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RunSignupsTableSignupsQueryData, RunSignupsTableSignupsQueryVariables>(RunSignupsTableSignupsQueryDocument, options);
      }
export function useRunSignupsTableSignupsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RunSignupsTableSignupsQueryData, RunSignupsTableSignupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RunSignupsTableSignupsQueryData, RunSignupsTableSignupsQueryVariables>(RunSignupsTableSignupsQueryDocument, options);
        }
export type RunSignupsTableSignupsQueryHookResult = ReturnType<typeof useRunSignupsTableSignupsQuery>;
export type RunSignupsTableSignupsQueryLazyQueryHookResult = ReturnType<typeof useRunSignupsTableSignupsQueryLazyQuery>;
export type RunSignupsTableSignupsQueryQueryResult = Apollo.QueryResult<RunSignupsTableSignupsQueryData, RunSignupsTableSignupsQueryVariables>;
export const RunHeaderRunInfoQueryDocument = gql`
    query RunHeaderRunInfoQuery($eventId: Int!, $runId: Int!) {
  convention: conventionByRequestHost {
    id: transitionalId
    ...CommonConventionData
    event(id: $eventId) {
      id: transitionalId
      title
      length_seconds
      registration_policy {
        total_slots
        slots_limited
        buckets {
          name
          total_slots
        }
      }
      run(id: $runId) {
        id: transitionalId
        starts_at
        title_suffix
      }
    }
  }
}
    ${CommonConventionDataFragmentDoc}`;

/**
 * __useRunHeaderRunInfoQuery__
 *
 * To run a query within a React component, call `useRunHeaderRunInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useRunHeaderRunInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRunHeaderRunInfoQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *      runId: // value for 'runId'
 *   },
 * });
 */
export function useRunHeaderRunInfoQuery(baseOptions: Apollo.QueryHookOptions<RunHeaderRunInfoQueryData, RunHeaderRunInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RunHeaderRunInfoQueryData, RunHeaderRunInfoQueryVariables>(RunHeaderRunInfoQueryDocument, options);
      }
export function useRunHeaderRunInfoQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RunHeaderRunInfoQueryData, RunHeaderRunInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RunHeaderRunInfoQueryData, RunHeaderRunInfoQueryVariables>(RunHeaderRunInfoQueryDocument, options);
        }
export type RunHeaderRunInfoQueryHookResult = ReturnType<typeof useRunHeaderRunInfoQuery>;
export type RunHeaderRunInfoQueryLazyQueryHookResult = ReturnType<typeof useRunHeaderRunInfoQueryLazyQuery>;
export type RunHeaderRunInfoQueryQueryResult = Apollo.QueryResult<RunHeaderRunInfoQueryData, RunHeaderRunInfoQueryVariables>;
export const RunSignupSummaryQueryDocument = gql`
    query RunSignupSummaryQuery($eventId: Int!, $runId: Int!) {
  convention: conventionByRequestHost {
    id: transitionalId
    ...CommonConventionData
    event(id: $eventId) {
      id: transitionalId
      title
      event_category {
        id: transitionalId
        team_member_name
      }
      registration_policy {
        buckets {
          key
          name
          expose_attendees
        }
      }
      team_members {
        id: transitionalId
        user_con_profile {
          id: transitionalId
        }
      }
      runs {
        id: transitionalId
        starts_at
      }
      run(id: $runId) {
        id: transitionalId
        signups_paginated(per_page: 1000, filters: {state: ["confirmed", "waitlisted"]}) {
          entries {
            id: transitionalId
            state
            bucket_key
            waitlist_position
            user_con_profile {
              id: transitionalId
              name_inverted
              gravatar_enabled
              gravatar_url
            }
          }
        }
      }
    }
  }
  currentAbility {
    can_read_schedule
  }
}
    ${CommonConventionDataFragmentDoc}`;

/**
 * __useRunSignupSummaryQuery__
 *
 * To run a query within a React component, call `useRunSignupSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useRunSignupSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRunSignupSummaryQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *      runId: // value for 'runId'
 *   },
 * });
 */
export function useRunSignupSummaryQuery(baseOptions: Apollo.QueryHookOptions<RunSignupSummaryQueryData, RunSignupSummaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RunSignupSummaryQueryData, RunSignupSummaryQueryVariables>(RunSignupSummaryQueryDocument, options);
      }
export function useRunSignupSummaryQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RunSignupSummaryQueryData, RunSignupSummaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RunSignupSummaryQueryData, RunSignupSummaryQueryVariables>(RunSignupSummaryQueryDocument, options);
        }
export type RunSignupSummaryQueryHookResult = ReturnType<typeof useRunSignupSummaryQuery>;
export type RunSignupSummaryQueryLazyQueryHookResult = ReturnType<typeof useRunSignupSummaryQueryLazyQuery>;
export type RunSignupSummaryQueryQueryResult = Apollo.QueryResult<RunSignupSummaryQueryData, RunSignupSummaryQueryVariables>;
export const UserConProfileSignupsQueryDocument = gql`
    query UserConProfileSignupsQuery($id: Int!) {
  convention: conventionByRequestHost {
    id: transitionalId
    ...CommonConventionData
    my_profile {
      id: transitionalId
      ability {
        can_withdraw_all_user_con_profile_signups(user_con_profile_id: $id)
      }
    }
    user_con_profile(id: $id) {
      id: transitionalId
      name_without_nickname
      ical_secret
      team_members {
        id: transitionalId
        event {
          id: transitionalId
          title
          status
        }
      }
      ...UserConProfileSignupsFragment
    }
  }
}
    ${CommonConventionDataFragmentDoc}
${UserConProfileSignupsFragmentDoc}`;

/**
 * __useUserConProfileSignupsQuery__
 *
 * To run a query within a React component, call `useUserConProfileSignupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserConProfileSignupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserConProfileSignupsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserConProfileSignupsQuery(baseOptions: Apollo.QueryHookOptions<UserConProfileSignupsQueryData, UserConProfileSignupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserConProfileSignupsQueryData, UserConProfileSignupsQueryVariables>(UserConProfileSignupsQueryDocument, options);
      }
export function useUserConProfileSignupsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserConProfileSignupsQueryData, UserConProfileSignupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserConProfileSignupsQueryData, UserConProfileSignupsQueryVariables>(UserConProfileSignupsQueryDocument, options);
        }
export type UserConProfileSignupsQueryHookResult = ReturnType<typeof useUserConProfileSignupsQuery>;
export type UserConProfileSignupsQueryLazyQueryHookResult = ReturnType<typeof useUserConProfileSignupsQueryLazyQuery>;
export type UserConProfileSignupsQueryQueryResult = Apollo.QueryResult<UserConProfileSignupsQueryData, UserConProfileSignupsQueryVariables>;
export const RunSignupChangesQueryDocument = gql`
    query RunSignupChangesQuery($runId: Int!, $filters: SignupChangeFiltersInput, $sort: [SortInput!], $page: Int, $perPage: Int) {
  convention: conventionByRequestHost {
    id: transitionalId
    timezone_name
    run(id: $runId) {
      id: transitionalId
      event {
        id: transitionalId
        title
      }
      signup_changes_paginated(
        page: $page
        per_page: $perPage
        filters: $filters
        sort: $sort
      ) {
        total_entries
        total_pages
        current_page
        per_page
        entries {
          id: transitionalId
          state
          counted
          bucket_key
          action
          created_at
          previous_signup_change {
            id: transitionalId
            state
            counted
            bucket_key
          }
          run {
            id: transitionalId
            event {
              id: transitionalId
              title
              event_category {
                id: transitionalId
                team_member_name
              }
              registration_policy {
                buckets {
                  key
                  name
                  anything
                }
              }
              team_members {
                id: transitionalId
                user_con_profile {
                  id: transitionalId
                }
              }
            }
          }
          user_con_profile {
            id: transitionalId
            name_inverted
            gravatar_enabled
            gravatar_url
          }
        }
      }
    }
  }
}
    `;

/**
 * __useRunSignupChangesQuery__
 *
 * To run a query within a React component, call `useRunSignupChangesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRunSignupChangesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRunSignupChangesQuery({
 *   variables: {
 *      runId: // value for 'runId'
 *      filters: // value for 'filters'
 *      sort: // value for 'sort'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useRunSignupChangesQuery(baseOptions: Apollo.QueryHookOptions<RunSignupChangesQueryData, RunSignupChangesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RunSignupChangesQueryData, RunSignupChangesQueryVariables>(RunSignupChangesQueryDocument, options);
      }
export function useRunSignupChangesQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RunSignupChangesQueryData, RunSignupChangesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RunSignupChangesQueryData, RunSignupChangesQueryVariables>(RunSignupChangesQueryDocument, options);
        }
export type RunSignupChangesQueryHookResult = ReturnType<typeof useRunSignupChangesQuery>;
export type RunSignupChangesQueryLazyQueryHookResult = ReturnType<typeof useRunSignupChangesQueryLazyQuery>;
export type RunSignupChangesQueryQueryResult = Apollo.QueryResult<RunSignupChangesQueryData, RunSignupChangesQueryVariables>;