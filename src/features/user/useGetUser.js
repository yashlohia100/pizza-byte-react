import { useQuery } from '@tanstack/react-query';
import { getUserApi } from '../../services/apiFunctions';

export function useGetUser() {
  const {
    isPending,
    data: user,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUserApi,
    retry: false,
  });

  return { isPending, user, error };
}
