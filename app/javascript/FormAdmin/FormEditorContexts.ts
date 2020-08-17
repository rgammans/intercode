import React from 'react';
import { FormEditorQueryQuery } from './queries.generated';
import { FormType, TimezoneMode } from '../graphqlTypes.generated';
import {
  AgeRestrictionsFormItem,
  DateFormItem,
  EventEmailFormItem,
  FreeTextFormItem,
  MultipleChoiceFormItem,
  ParsedFormItemWithGeneratedIds,
  RegistrationPolicyFormItem,
  StaticTextFormItem,
  TimeblockPreferenceFormItem,
  TimespanFormItem,
  TypedFormItem,
  WithRequiredProperties,
} from './FormItemUtils';
import FormTypes from '../../../config/form_types.json';

export type FormEditorForm = Omit<FormEditorQueryQuery['form'], 'form_sections'> & {
  form_sections: (Omit<FormEditorQueryQuery['form']['form_sections'][0], 'form_items'> & {
    form_items: TypedFormItem[];
  })[];
};

export type FormEditorFormItem =
  | ParsedFormItemWithGeneratedIds<WithRequiredProperties<AgeRestrictionsFormItem>>
  | ParsedFormItemWithGeneratedIds<WithRequiredProperties<DateFormItem>>
  | ParsedFormItemWithGeneratedIds<WithRequiredProperties<EventEmailFormItem>>
  | ParsedFormItemWithGeneratedIds<WithRequiredProperties<FreeTextFormItem>>
  | ParsedFormItemWithGeneratedIds<WithRequiredProperties<MultipleChoiceFormItem>>
  | ParsedFormItemWithGeneratedIds<WithRequiredProperties<RegistrationPolicyFormItem>>
  | ParsedFormItemWithGeneratedIds<WithRequiredProperties<StaticTextFormItem>>
  | ParsedFormItemWithGeneratedIds<WithRequiredProperties<TimeblockPreferenceFormItem>>
  | ParsedFormItemWithGeneratedIds<WithRequiredProperties<TimespanFormItem>>;

export type FormEditorContextValue = {
  convention: NonNullable<FormEditorQueryQuery['convention']>;
  currentSection?: FormEditorQueryQuery['form']['form_sections'][0];
  form: FormEditorForm;
  formType:
    | typeof FormTypes['event']
    | typeof FormTypes['event_proposal']
    | typeof FormTypes['user_con_profile'];
  formItemsById: Map<number, TypedFormItem>;
};

export const FormEditorContext = React.createContext<FormEditorContextValue>({
  convention: {
    id: 0,
    name: '',
    timezone_mode: TimezoneMode.UserLocal,
  },
  currentSection: undefined,
  form: {
    id: 0,
    title: '',
    form_type: FormType.Event,
    form_sections: [],
  },
  formType: FormTypes.event,
  formItemsById: new Map(),
});

export type FormItemEditorContextValue = {
  formItem: FormEditorFormItem;
  previewFormItem?: TypedFormItem;
  setFormItem: React.Dispatch<React.SetStateAction<FormEditorFormItem>>;
  standardItem?: any;
  disabled: boolean;
};

export const FormItemEditorContext = React.createContext<FormItemEditorContextValue>({
  formItem: {
    id: 0,
    item_type: 'static_text',
    properties: {
      content: '',
      style: 'normal',
    },
    rendered_properties: {
      content: '',
      style: 'normal',
    },
  },
  previewFormItem: {
    id: 0,
    item_type: 'static_text',
    rendered_properties: {
      content: '',
      style: 'normal',
    },
  },
  setFormItem: () => {},
  standardItem: undefined,
  disabled: false,
});
