/* eslint-disable */
import * as Types from '../graphqlTypes.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type SiteSearchQueryVariables = Types.Exact<{
  query: Types.Scalars['String'];
}>;


export type SiteSearchQueryData = { __typename: 'Query', siteSearch: { __typename: 'SearchResult', total_entries: number, entries: Array<{ __typename: 'SearchResultEntry', title?: Types.Maybe<string>, highlight?: Types.Maybe<string>, model: { __typename: 'Event', id: number, title?: Types.Maybe<string> } | { __typename: 'EventProposal', id: number, title?: Types.Maybe<string> } | { __typename: 'Page', id: number, slug?: Types.Maybe<string> } | { __typename: 'UserConProfile', id: number } }> } };


export const SiteSearchQueryDocument = gql`
    query SiteSearchQuery($query: String!) {
  siteSearch(query: $query) {
    total_entries
    entries {
      title
      highlight
      model {
        __typename
        ... on Page {
          id
          slug
        }
        ... on Event {
          id
          title
        }
        ... on EventProposal {
          id
          title
        }
        ... on UserConProfile {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useSiteSearchQuery__
 *
 * To run a query within a React component, call `useSiteSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSiteSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSiteSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSiteSearchQuery(baseOptions: Apollo.QueryHookOptions<SiteSearchQueryData, SiteSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SiteSearchQueryData, SiteSearchQueryVariables>(SiteSearchQueryDocument, options);
      }
export function useSiteSearchQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SiteSearchQueryData, SiteSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SiteSearchQueryData, SiteSearchQueryVariables>(SiteSearchQueryDocument, options);
        }
export type SiteSearchQueryHookResult = ReturnType<typeof useSiteSearchQuery>;
export type SiteSearchQueryLazyQueryHookResult = ReturnType<typeof useSiteSearchQueryLazyQuery>;
export type SiteSearchQueryQueryResult = Apollo.QueryResult<SiteSearchQueryData, SiteSearchQueryVariables>;