import { useQuery } from '@tanstack/react-query';
import { getPizzasApi } from '../../services/apiFunctions';

export function useGetPizzas() {
  const {
    isPending,
    data: pizzas,
    error,
  } = useQuery({
    queryKey: ['pizzas'],
    queryFn: getPizzasApi,
  });

  return { isPending, pizzas, error };
}
