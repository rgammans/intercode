/* eslint-disable */
import * as Types from '../../graphqlTypes.generated';

import { gql } from '@apollo/client';
import { CmsPageFieldsFragmentDoc } from './queries.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreatePageMutationVariables = Types.Exact<{
  page: Types.PageInput;
}>;


export type CreatePageMutationData = { __typename: 'Mutation', createPage: { __typename: 'CreatePagePayload', page: { __typename: 'Page', id: string, name?: string | null, slug?: string | null, content?: string | null, admin_notes?: string | null, skip_clickwrap_agreement?: boolean | null, hidden_from_search: boolean, current_ability_can_update: boolean, current_ability_can_delete: boolean, cms_layout?: { __typename: 'CmsLayout', id: string, name?: string | null } | null } } };

export type UpdatePageMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  page: Types.PageInput;
}>;


export type UpdatePageMutationData = { __typename: 'Mutation', updatePage: { __typename: 'UpdatePagePayload', page: { __typename: 'Page', id: string, name?: string | null, slug?: string | null, content?: string | null, admin_notes?: string | null, skip_clickwrap_agreement?: boolean | null, hidden_from_search: boolean, current_ability_can_update: boolean, current_ability_can_delete: boolean, cms_layout?: { __typename: 'CmsLayout', id: string, name?: string | null } | null } } };

export type DeletePageMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeletePageMutationData = { __typename: 'Mutation', deletePage: { __typename: 'DeletePagePayload', clientMutationId?: string | null } };


export const CreatePageDocument = gql`
    mutation CreatePage($page: PageInput!) {
  createPage(input: {page: $page}) {
    page {
      id
      ...CmsPageFields
    }
  }
}
    ${CmsPageFieldsFragmentDoc}`;
export type CreatePageMutationFn = Apollo.MutationFunction<CreatePageMutationData, CreatePageMutationVariables>;

/**
 * __useCreatePageMutation__
 *
 * To run a mutation, you first call `useCreatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPageMutation, { data, loading, error }] = useCreatePageMutation({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useCreatePageMutation(baseOptions?: Apollo.MutationHookOptions<CreatePageMutationData, CreatePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePageMutationData, CreatePageMutationVariables>(CreatePageDocument, options);
      }
export type CreatePageMutationHookResult = ReturnType<typeof useCreatePageMutation>;
export type CreatePageMutationResult = Apollo.MutationResult<CreatePageMutationData>;
export type CreatePageMutationOptions = Apollo.BaseMutationOptions<CreatePageMutationData, CreatePageMutationVariables>;
export const UpdatePageDocument = gql`
    mutation UpdatePage($id: ID!, $page: PageInput!) {
  updatePage(input: {id: $id, page: $page}) {
    page {
      id
      ...CmsPageFields
    }
  }
}
    ${CmsPageFieldsFragmentDoc}`;
export type UpdatePageMutationFn = Apollo.MutationFunction<UpdatePageMutationData, UpdatePageMutationVariables>;

/**
 * __useUpdatePageMutation__
 *
 * To run a mutation, you first call `useUpdatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageMutation, { data, loading, error }] = useUpdatePageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useUpdatePageMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePageMutationData, UpdatePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePageMutationData, UpdatePageMutationVariables>(UpdatePageDocument, options);
      }
export type UpdatePageMutationHookResult = ReturnType<typeof useUpdatePageMutation>;
export type UpdatePageMutationResult = Apollo.MutationResult<UpdatePageMutationData>;
export type UpdatePageMutationOptions = Apollo.BaseMutationOptions<UpdatePageMutationData, UpdatePageMutationVariables>;
export const DeletePageDocument = gql`
    mutation DeletePage($id: ID!) {
  deletePage(input: {id: $id}) {
    clientMutationId
  }
}
    `;
export type DeletePageMutationFn = Apollo.MutationFunction<DeletePageMutationData, DeletePageMutationVariables>;

/**
 * __useDeletePageMutation__
 *
 * To run a mutation, you first call `useDeletePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePageMutation, { data, loading, error }] = useDeletePageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePageMutation(baseOptions?: Apollo.MutationHookOptions<DeletePageMutationData, DeletePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePageMutationData, DeletePageMutationVariables>(DeletePageDocument, options);
      }
export type DeletePageMutationHookResult = ReturnType<typeof useDeletePageMutation>;
export type DeletePageMutationResult = Apollo.MutationResult<DeletePageMutationData>;
export type DeletePageMutationOptions = Apollo.BaseMutationOptions<DeletePageMutationData, DeletePageMutationVariables>;