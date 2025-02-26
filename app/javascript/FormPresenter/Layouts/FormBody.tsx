import React, { forwardRef, useRef, useCallback, useContext, useImperativeHandle, useMemo } from 'react';
import { ErrorDisplay } from '@neinteractiveliterature/litform';

import FormItemInput from '../ItemInputs/FormItemInput';
import { formResponseValueIsCompleteIfRequired } from '../../Models/FormItem';
import { ItemInteractionTrackerContext } from '../ItemInteractionTracker';
import FormItemDisplay, { ConventionForFormItemDisplay } from '../ItemDisplays/FormItemDisplay';
import { CommonFormItemFieldsFragment } from '../../Models/commonFormFragments.generated';
import { formItemVisibleTo, formItemWriteableBy, TypedFormItem } from '../../FormAdmin/FormItemUtils';
import { FormResponse } from '../useFormResponse';
import { FormItemRole, FormType } from '../../graphqlTypes.generated';

import { VisibilityDisclosureCard } from '../ItemInputs/PermissionDisclosures';
import { FormResponseReference } from '../ItemInputs/CommonFormItemInputProps';
import { ImageAttachmentConfig } from '../../BuiltInFormControls/MarkdownInput';

export type FormBodyProps = {
  convention: ConventionForFormItemDisplay;
  formTypeIdentifier: FormType;
  formItems: TypedFormItem[];
  response: FormResponse;
  responseValuesChanged: (newValues: Record<string, unknown>) => void;
  currentUserViewerRole: FormItemRole;
  currentUserWriterRole: FormItemRole;
  errors?: { [itemIdentifier: string]: string[] };
  imageAttachmentConfig?: ImageAttachmentConfig;
};

export type FormBodyImperativeHandle = {
  scrollToItem: (item: Pick<CommonFormItemFieldsFragment, 'identifier'>) => void;
};

export default forwardRef<FormBodyImperativeHandle | undefined, FormBodyProps>(function FormBody(
  {
    convention,
    formItems,
    formTypeIdentifier,
    currentUserViewerRole,
    currentUserWriterRole,
    response,
    responseValuesChanged,
    errors,
    imageAttachmentConfig,
  },
  ref,
) {
  const itemElements = useRef(new Map<string, HTMLDivElement>()).current;
  const { interactWithItem, hasInteractedWithItem } = useContext(ItemInteractionTrackerContext);

  const formResponseReference = useMemo<FormResponseReference | undefined>(() => {
    if (response.__typename === 'Event') {
      return { type: 'Event', id: response.id };
    } else if (response.__typename === 'EventProposal') {
      return { type: 'EventProposal', id: response.id };
    }
  }, [response.__typename, response.id]);

  const responseValueChanged = useCallback(
    (field: string, value: unknown) => {
      responseValuesChanged({ [field]: value });
    },
    [responseValuesChanged],
  );

  useImperativeHandle(ref, () => ({
    scrollToItem: (item: Pick<CommonFormItemFieldsFragment, 'identifier'>) => {
      const { identifier } = item;
      if (!identifier) {
        return;
      }

      window.requestAnimationFrame(() => {
        const itemElement = itemElements.get(identifier);
        if (itemElement) {
          itemElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    },
  }));

  return (
    <div>
      {formItems.map((item) => {
        const itemErrors = item.identifier ? (errors || {})[item.identifier] || [] : [];
        const errorsForDisplay = itemErrors.length > 0 ? itemErrors.join(', ') : null;

        if (!formItemVisibleTo(item, currentUserViewerRole)) {
          return <React.Fragment key={item.id} />;
        }

        const value = item.identifier ? response.form_response_attrs[item.identifier] : null;

        if (!formItemWriteableBy(item, currentUserWriterRole)) {
          let caption: string | undefined;
          if ('caption' in item.rendered_properties) {
            caption = item.rendered_properties.caption;
          }
          return (
            <div className="mb-3" key={item.id}>
              {caption && <div className="form-label">{caption}</div>}
              <VisibilityDisclosureCard formItem={item} formTypeIdentifier={formTypeIdentifier}>
                <FormItemDisplay convention={convention} displayMode="public" formItem={item} value={value} />
              </VisibilityDisclosureCard>
            </div>
          );
        }

        return (
          <div
            key={item.id} // identifier might be null but id won't
            ref={(element) => {
              if (!item.identifier) {
                return;
              }

              if (element == null) {
                itemElements.delete(item.identifier);
              } else {
                itemElements.set(item.identifier, element);
              }
            }}
          >
            <FormItemInput
              formItem={item}
              formTypeIdentifier={formTypeIdentifier}
              convention={convention}
              valueInvalid={
                !!item.identifier &&
                hasInteractedWithItem(item.identifier) &&
                !formResponseValueIsCompleteIfRequired(item, response.form_response_attrs[item.identifier])
              }
              value={value}
              onChange={responseValueChanged}
              onInteract={interactWithItem}
              formResponseReference={formResponseReference}
              imageAttachmentConfig={imageAttachmentConfig}
            />
            <ErrorDisplay stringError={errorsForDisplay} />
          </div>
        );
      })}
    </div>
  );
});
