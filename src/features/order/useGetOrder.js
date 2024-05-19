import { useQuery } from '@tanstack/react-query';
import { getOrderApi } from '../../services/apiFunctions';
import { useParams } from 'react-router-dom';

export function useGetOrder() {
  const { orderId } = useParams();

  const {
    isPending,
    data: order,
    error,
  } = useQuery({
    queryKey: ['order'],
    queryFn: () => getOrderApi(orderId),
  });

  return { isPending, order, error };
}
