/* eslint-disable */
import * as Types from '../graphqlTypes.generated';

import { gql } from '@apollo/client';
import { DetailedUserFieldsFragmentDoc } from './queries.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MergeUsersMutationVariables = Types.Exact<{
  userIds: Array<Types.Scalars['ID']> | Types.Scalars['ID'];
  winningUserId: Types.Scalars['ID'];
  winningUserConProfiles: Array<Types.WinningUserConProfileInput> | Types.WinningUserConProfileInput;
}>;


export type MergeUsersMutationData = { __typename: 'Mutation', mergeUsers: { __typename: 'MergeUsersPayload', user: { __typename: 'User', id: string, name?: string | null, first_name?: string | null, last_name?: string | null, email?: string | null, privileges?: Array<string> | null, user_con_profiles: Array<{ __typename: 'UserConProfile', id: string, email?: string | null, ticket?: { __typename: 'Ticket', id: string } | null, signups: Array<{ __typename: 'Signup', id: string, state: Types.SignupState }>, convention: { __typename: 'Convention', id: string, name: string, domain?: string | null, starts_at?: string | null, ticket_name: string, timezone_name?: string | null, timezone_mode: Types.TimezoneMode }, staff_positions: Array<{ __typename: 'StaffPosition', id: string, name: string }> }> } } };


export const MergeUsersDocument = gql`
    mutation MergeUsers($userIds: [ID!]!, $winningUserId: ID!, $winningUserConProfiles: [WinningUserConProfileInput!]!) {
  mergeUsers(
    input: {userIds: $userIds, winningUserId: $winningUserId, winningUserConProfiles: $winningUserConProfiles}
  ) {
    user {
      id
      ...DetailedUserFields
    }
  }
}
    ${DetailedUserFieldsFragmentDoc}`;
export type MergeUsersMutationFn = Apollo.MutationFunction<MergeUsersMutationData, MergeUsersMutationVariables>;

/**
 * __useMergeUsersMutation__
 *
 * To run a mutation, you first call `useMergeUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMergeUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mergeUsersMutation, { data, loading, error }] = useMergeUsersMutation({
 *   variables: {
 *      userIds: // value for 'userIds'
 *      winningUserId: // value for 'winningUserId'
 *      winningUserConProfiles: // value for 'winningUserConProfiles'
 *   },
 * });
 */
export function useMergeUsersMutation(baseOptions?: Apollo.MutationHookOptions<MergeUsersMutationData, MergeUsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MergeUsersMutationData, MergeUsersMutationVariables>(MergeUsersDocument, options);
      }
export type MergeUsersMutationHookResult = ReturnType<typeof useMergeUsersMutation>;
export type MergeUsersMutationResult = Apollo.MutationResult<MergeUsersMutationData>;
export type MergeUsersMutationOptions = Apollo.BaseMutationOptions<MergeUsersMutationData, MergeUsersMutationVariables>;