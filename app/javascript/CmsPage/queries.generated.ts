/* eslint-disable */
import * as Types from '../graphqlTypes.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CmsPageQueryVariables = Types.Exact<{
  slug?: Types.Maybe<Types.Scalars['String']>;
  rootPage?: Types.Maybe<Types.Scalars['Boolean']>;
}>;


export type CmsPageQueryData = (
  { __typename: 'Query' }
  & { convention?: Types.Maybe<(
    { __typename: 'Convention' }
    & Pick<Types.Convention, 'id' | 'name' | 'clickwrap_agreement'>
  )>, currentAbility: (
    { __typename: 'Ability' }
    & Pick<Types.Ability, 'can_manage_any_cms_content'>
  ), myProfile?: Types.Maybe<(
    { __typename: 'UserConProfile' }
    & Pick<Types.UserConProfile, 'id' | 'accepted_clickwrap_agreement'>
  )>, cmsPage: (
    { __typename: 'Page' }
    & Pick<Types.Page, 'id' | 'name' | 'content_html' | 'current_ability_can_update' | 'current_ability_can_delete' | 'skip_clickwrap_agreement'>
  ) }
);

export type PageAdminDropdownQueryVariables = Types.Exact<{
  id: Types.Scalars['Int'];
}>;


export type PageAdminDropdownQueryData = (
  { __typename: 'Query' }
  & { cmsParent: (
    { __typename: 'Convention' }
    & Pick<Types.Convention, 'id'>
    & { default_layout?: Types.Maybe<(
      { __typename: 'CmsLayout' }
      & Pick<Types.CmsLayout, 'id' | 'name'>
    )> }
  ) | (
    { __typename: 'RootSite' }
    & Pick<Types.RootSite, 'id'>
    & { root_site_default_layout: (
      { __typename: 'CmsLayout' }
      & Pick<Types.CmsLayout, 'id' | 'name'>
    ) }
  ), cmsPage: (
    { __typename: 'Page' }
    & Pick<Types.Page, 'id'>
    & { cms_layout?: Types.Maybe<(
      { __typename: 'CmsLayout' }
      & Pick<Types.CmsLayout, 'id' | 'name'>
    )>, referenced_partials: Array<(
      { __typename: 'CmsPartial' }
      & Pick<Types.CmsPartial, 'id' | 'name'>
    )> }
  ) }
);


export const CmsPageQueryDocument = gql`
    query CmsPageQuery($slug: String, $rootPage: Boolean) {
  convention {
    id
    name
    clickwrap_agreement
  }
  currentAbility {
    can_manage_any_cms_content
  }
  myProfile {
    id
    accepted_clickwrap_agreement
  }
  cmsPage(slug: $slug, rootPage: $rootPage) {
    id
    name
    content_html
    current_ability_can_update
    current_ability_can_delete
    skip_clickwrap_agreement
  }
}
    `;

/**
 * __useCmsPageQuery__
 *
 * To run a query within a React component, call `useCmsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCmsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCmsPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      rootPage: // value for 'rootPage'
 *   },
 * });
 */
export function useCmsPageQuery(baseOptions?: Apollo.QueryHookOptions<CmsPageQueryData, CmsPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CmsPageQueryData, CmsPageQueryVariables>(CmsPageQueryDocument, options);
      }
export function useCmsPageQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CmsPageQueryData, CmsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CmsPageQueryData, CmsPageQueryVariables>(CmsPageQueryDocument, options);
        }
export type CmsPageQueryHookResult = ReturnType<typeof useCmsPageQuery>;
export type CmsPageQueryLazyQueryHookResult = ReturnType<typeof useCmsPageQueryLazyQuery>;
export type CmsPageQueryQueryResult = Apollo.QueryResult<CmsPageQueryData, CmsPageQueryVariables>;
export const PageAdminDropdownQueryDocument = gql`
    query PageAdminDropdownQuery($id: Int!) {
  cmsParent {
    ... on Convention {
      id
      default_layout {
        id
        name
      }
    }
    ... on RootSite {
      id
      root_site_default_layout: default_layout {
        id
        name
      }
    }
  }
  cmsPage(id: $id) {
    id
    cms_layout {
      id
      name
    }
    referenced_partials {
      id
      name
    }
  }
}
    `;

/**
 * __usePageAdminDropdownQuery__
 *
 * To run a query within a React component, call `usePageAdminDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageAdminDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageAdminDropdownQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePageAdminDropdownQuery(baseOptions: Apollo.QueryHookOptions<PageAdminDropdownQueryData, PageAdminDropdownQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageAdminDropdownQueryData, PageAdminDropdownQueryVariables>(PageAdminDropdownQueryDocument, options);
      }
export function usePageAdminDropdownQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageAdminDropdownQueryData, PageAdminDropdownQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageAdminDropdownQueryData, PageAdminDropdownQueryVariables>(PageAdminDropdownQueryDocument, options);
        }
export type PageAdminDropdownQueryHookResult = ReturnType<typeof usePageAdminDropdownQuery>;
export type PageAdminDropdownQueryLazyQueryHookResult = ReturnType<typeof usePageAdminDropdownQueryLazyQuery>;
export type PageAdminDropdownQueryQueryResult = Apollo.QueryResult<PageAdminDropdownQueryData, PageAdminDropdownQueryVariables>;