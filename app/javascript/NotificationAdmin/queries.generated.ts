/* eslint-disable */
import * as Types from '../graphqlTypes.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NotificationTemplateFieldsFragment = { __typename: 'NotificationTemplate', id: string, event_key: string, subject?: string | null, body_html?: string | null, body_text?: string | null, body_sms?: string | null };

export type NotificationAdminQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type NotificationAdminQueryData = { __typename: 'Query', convention: { __typename: 'Convention', id: string, notification_templates: Array<{ __typename: 'NotificationTemplate', id: string, event_key: string, subject?: string | null, body_html?: string | null, body_text?: string | null, body_sms?: string | null }> } };

export const NotificationTemplateFieldsFragmentDoc = gql`
    fragment NotificationTemplateFields on NotificationTemplate {
  id
  event_key
  subject
  body_html
  body_text
  body_sms
}
    `;
export const NotificationAdminQueryDocument = gql`
    query NotificationAdminQuery {
  convention: conventionByRequestHost {
    id
    notification_templates {
      id
      ...NotificationTemplateFields
    }
  }
}
    ${NotificationTemplateFieldsFragmentDoc}`;

/**
 * __useNotificationAdminQuery__
 *
 * To run a query within a React component, call `useNotificationAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotificationAdminQuery(baseOptions?: Apollo.QueryHookOptions<NotificationAdminQueryData, NotificationAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotificationAdminQueryData, NotificationAdminQueryVariables>(NotificationAdminQueryDocument, options);
      }
export function useNotificationAdminQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotificationAdminQueryData, NotificationAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotificationAdminQueryData, NotificationAdminQueryVariables>(NotificationAdminQueryDocument, options);
        }
export type NotificationAdminQueryHookResult = ReturnType<typeof useNotificationAdminQuery>;
export type NotificationAdminQueryLazyQueryHookResult = ReturnType<typeof useNotificationAdminQueryLazyQuery>;
export type NotificationAdminQueryQueryResult = Apollo.QueryResult<NotificationAdminQueryData, NotificationAdminQueryVariables>;