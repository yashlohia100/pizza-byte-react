import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { createOrderApi } from '../../services/apiFunctions';
import useCart from '../../hooks/useCart';

export function useCreateOrder() {
  const navigate = useNavigate();

  const { dispatch } = useCart();

  const { isPending: isCreating, mutate: createOrder } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: (order) => {
      toast.success('Order created successfully.');

      setTimeout(() => {
        dispatch({ type: 'resetCart' });
        navigate(`/order/${order.id}`);
      }, 1000);
    },
    onError: () => {
      toast.error('Error creating order!');
    },
  });

  return { isCreating, createOrder };
}
