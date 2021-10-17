import { useCallback } from 'react';
import { MEPTOEditorProps } from './MaximumEventProvidedTicketsOverrideEditor';

export type UseMEPTOMutationsProps = {
  createMutate: (options: {
    variables: {
      input: {
        transitionalEventId: string;
        transitionalTicketTypeId: string;
        override_value: number;
      };
    };
  }) => Promise<unknown>;

  updateMutate: (options: {
    variables: {
      input: {
        transitionalId: string;
        override_value: number;
      };
    };
  }) => Promise<unknown>;

  deleteMutate: (mepto: Parameters<MEPTOMutations['deleteOverride']>[0]) => Promise<unknown>;
};

export type MEPTOMutations = Pick<MEPTOEditorProps, 'createOverride' | 'updateOverride' | 'deleteOverride'>;

export default function useMEPTOMutations({
  createMutate,
  updateMutate,
  deleteMutate,
}: UseMEPTOMutationsProps): MEPTOMutations {
  const createOverride: MEPTOMutations['createOverride'] = useCallback(
    ({ eventId, ticketTypeId, overrideValue }) =>
      createMutate({
        variables: {
          input: {
            transitionalEventId: eventId,
            transitionalTicketTypeId: ticketTypeId,
            override_value: overrideValue,
          },
        },
      }),
    [createMutate],
  );

  const updateOverride: MEPTOMutations['updateOverride'] = useCallback(
    ({ id, overrideValue }: { id: string; overrideValue: number }) =>
      updateMutate({
        variables: {
          input: {
            transitionalId: id,
            override_value: overrideValue,
          },
        },
      }),
    [updateMutate],
  );

  const deleteOverride: MEPTOMutations['deleteOverride'] = useCallback((mepto) => deleteMutate(mepto), [deleteMutate]);

  return { createOverride, deleteOverride, updateOverride };
}
