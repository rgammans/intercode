/* eslint-disable */
import * as Types from '../graphqlTypes.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ClickwrapAgreementQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ClickwrapAgreementQueryData = { __typename: 'Query', convention: { __typename: 'Convention', id: string, name: string, clickwrap_agreement_html?: string | null, my_profile?: { __typename: 'UserConProfile', id: string, accepted_clickwrap_agreement?: boolean | null } | null } };


export const ClickwrapAgreementQueryDocument = gql`
    query ClickwrapAgreementQuery {
  convention: conventionByRequestHost {
    id
    name
    clickwrap_agreement_html
    my_profile {
      id
      accepted_clickwrap_agreement
    }
  }
}
    `;

/**
 * __useClickwrapAgreementQuery__
 *
 * To run a query within a React component, call `useClickwrapAgreementQuery` and pass it any options that fit your needs.
 * When your component renders, `useClickwrapAgreementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClickwrapAgreementQuery({
 *   variables: {
 *   },
 * });
 */
export function useClickwrapAgreementQuery(baseOptions?: Apollo.QueryHookOptions<ClickwrapAgreementQueryData, ClickwrapAgreementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ClickwrapAgreementQueryData, ClickwrapAgreementQueryVariables>(ClickwrapAgreementQueryDocument, options);
      }
export function useClickwrapAgreementQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ClickwrapAgreementQueryData, ClickwrapAgreementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ClickwrapAgreementQueryData, ClickwrapAgreementQueryVariables>(ClickwrapAgreementQueryDocument, options);
        }
export type ClickwrapAgreementQueryHookResult = ReturnType<typeof useClickwrapAgreementQuery>;
export type ClickwrapAgreementQueryLazyQueryHookResult = ReturnType<typeof useClickwrapAgreementQueryLazyQuery>;
export type ClickwrapAgreementQueryQueryResult = Apollo.QueryResult<ClickwrapAgreementQueryData, ClickwrapAgreementQueryVariables>;