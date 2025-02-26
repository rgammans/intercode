import { useCallback } from 'react';
import intersection from 'lodash/intersection';
import { useNavigate } from 'react-router-dom';
import { ApolloError } from '@apollo/client';
import { useModal, useConfirm, ErrorDisplay, LoadQueryWrapper } from '@neinteractiveliterature/litform';

import OrderPaymentModal from './OrderPaymentModal';
import useAsyncFunction from '../useAsyncFunction';
import usePageTitle from '../usePageTitle';
import CartContents from './CartContents';
import { CartQueryData, CartQueryDocument, useCartQuery } from './queries.generated';
import {
  useCreateCouponApplicationMutation,
  useDeleteCouponApplicationMutation,
  useDeleteOrderEntryMutation,
  useUpdateOrderEntryMutation,
} from './mutations.generated';
import useLoginRequired from '../Authentication/useLoginRequired';

type OrderEntryType = NonNullable<
  NonNullable<CartQueryData['convention']['my_profile']>['current_pending_order']
>['order_entries'][0];

export default LoadQueryWrapper(useCartQuery, function Cart({ data }) {
  const navigate = useNavigate();
  const [updateMutate] = useUpdateOrderEntryMutation();
  const [deleteMutate] = useDeleteOrderEntryMutation();
  const [createCouponApplicationMutate] = useCreateCouponApplicationMutation();
  const [deleteCouponApplicationMutate] = useDeleteCouponApplicationMutation();
  const checkOutModal = useModal();
  const confirm = useConfirm();

  usePageTitle('Cart');

  const updateOrderEntry = useCallback(
    (id: string, quantity: number) =>
      updateMutate({
        variables: { input: { id: id, order_entry: { quantity } } },
      }),
    [updateMutate],
  );

  const deleteOrderEntry = useCallback(
    (id: string) =>
      deleteMutate({
        variables: { input: { id } },
        update: (proxy) => {
          const storeData = proxy.readQuery<CartQueryData>({ query: CartQueryDocument });
          const currentPendingOrder = storeData?.convention.my_profile?.current_pending_order;
          if (!currentPendingOrder) {
            return;
          }

          proxy.writeQuery<CartQueryData>({
            query: CartQueryDocument,
            data: {
              ...storeData,
              convention: {
                ...storeData.convention,
                my_profile: storeData.convention.my_profile
                  ? {
                      ...storeData.convention.my_profile,

                      current_pending_order: {
                        ...currentPendingOrder,
                        order_entries: currentPendingOrder.order_entries.filter((entry) => entry.id !== id),
                      },
                    }
                  : undefined,
              },
            },
          });
        },
      }),
    [deleteMutate],
  );

  const [changeQuantity, changeQuantityError] = useAsyncFunction(
    useCallback(
      async (orderEntryId: string, newQuantity: number) => {
        if (newQuantity === 0) {
          await deleteOrderEntry(orderEntryId);
        } else {
          await updateOrderEntry(orderEntryId, newQuantity);
        }
      },
      [deleteOrderEntry, updateOrderEntry],
    ),
  );

  const createCouponApplication = useCallback(
    async (couponCode: string) => {
      const orderId = data.convention.my_profile?.current_pending_order?.id;
      if (orderId) {
        await createCouponApplicationMutate({
          variables: { orderId, couponCode },
        });
      }
    },
    [createCouponApplicationMutate, data],
  );

  const deleteCouponApplication = useCallback(
    (
      couponApplication: NonNullable<
        NonNullable<CartQueryData['convention']['my_profile']>['current_pending_order']
      >['coupon_applications'][number],
    ) =>
      deleteCouponApplicationMutate({
        variables: { id: couponApplication.id },
      }),
    [deleteCouponApplicationMutate],
  );

  const removeFromCart = useCallback(
    (entry: OrderEntryType) => {
      let { name } = entry.product;
      if (entry.product_variant) {
        name += ` (${entry.product_variant.name})`;
      }

      confirm({
        prompt: `Are you sure you want to remove ${name} from your cart?`,
        action: () => deleteOrderEntry(entry.id),
        renderError: (e) => <ErrorDisplay graphQLError={e} />,
      });
    },
    [deleteOrderEntry, confirm],
  );

  const checkOutComplete = () => {
    navigate('/order_history');
  };

  const loginRequired = useLoginRequired();

  if (loginRequired) {
    return <></>;
  }

  return (
    <div>
      <h1 className="mb-4">Shopping cart</h1>

      <ErrorDisplay graphQLError={changeQuantityError as ApolloError} />

      <CartContents
        removeFromCart={removeFromCart}
        changeQuantity={(entry: OrderEntryType, quantity: number) => changeQuantity(entry.id, quantity)}
        checkOutButton={
          <button type="button" className="btn btn-primary mt-2" onClick={checkOutModal.open}>
            <i className="bi-cart-fill" /> Check out
          </button>
        }
        createCouponApplication={createCouponApplication}
        deleteCouponApplication={deleteCouponApplication}
      />

      <OrderPaymentModal
        visible={checkOutModal.visible}
        onCancel={checkOutModal.close}
        initialName={data.convention.my_profile?.name_without_nickname}
        orderId={data.convention.my_profile?.current_pending_order?.id}
        onComplete={checkOutComplete}
        paymentOptions={intersection(
          ...(data.convention.my_profile?.current_pending_order?.order_entries ?? []).map(
            (entry) => entry.product.payment_options,
          ),
        )}
        totalPrice={
          data.convention.my_profile?.current_pending_order?.total_price ?? {
            fractional: 0,
            __typename: 'Money',
            currency_code: 'USD',
          }
        }
      />
    </div>
  );
});
