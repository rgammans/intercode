/* eslint-disable */
import * as Types from '../graphqlTypes.generated';

import { gql } from '@apollo/client';
export type CommonFormItemFieldsFragment = { __typename: 'FormItem', id: number, position?: Types.Maybe<number>, identifier?: Types.Maybe<string>, item_type: string, rendered_properties?: Types.Maybe<any>, default_value?: Types.Maybe<any>, visibility: Types.FormItemRole, writeability: Types.FormItemRole };

export type CommonFormSectionFieldsFragment = { __typename: 'FormSection', id: number, title?: Types.Maybe<string>, position?: Types.Maybe<number>, form_items: Array<{ __typename: 'FormItem', id: number, position?: Types.Maybe<number>, identifier?: Types.Maybe<string>, item_type: string, rendered_properties?: Types.Maybe<any>, default_value?: Types.Maybe<any>, visibility: Types.FormItemRole, writeability: Types.FormItemRole }> };

export type CommonFormFieldsFragment = { __typename: 'Form', id: number, title: string, form_type: Types.FormType, form_sections: Array<{ __typename: 'FormSection', id: number, title?: Types.Maybe<string>, position?: Types.Maybe<number>, form_items: Array<{ __typename: 'FormItem', id: number, position?: Types.Maybe<number>, identifier?: Types.Maybe<string>, item_type: string, rendered_properties?: Types.Maybe<any>, default_value?: Types.Maybe<any>, visibility: Types.FormItemRole, writeability: Types.FormItemRole }> }> };

export const CommonFormItemFieldsFragmentDoc = gql`
    fragment CommonFormItemFields on FormItem {
  id
  position
  identifier
  item_type
  rendered_properties
  default_value
  visibility
  writeability
}
    `;
export const CommonFormSectionFieldsFragmentDoc = gql`
    fragment CommonFormSectionFields on FormSection {
  id
  title
  position
  form_items {
    id
    ...CommonFormItemFields
  }
}
    ${CommonFormItemFieldsFragmentDoc}`;
export const CommonFormFieldsFragmentDoc = gql`
    fragment CommonFormFields on Form {
  id
  title
  form_type
  form_sections {
    id
    ...CommonFormSectionFields
  }
}
    ${CommonFormSectionFieldsFragmentDoc}`;