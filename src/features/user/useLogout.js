import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { logoutApi } from '../../services/apiFunctions';

export function useLogout() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success('Logged out successfully.');

      // 'invalidateQueries' doesn't work here
      queryClient.resetQueries({ queryKey: ['user'] });

      setTimeout(() => {
        navigate('/');
      }, 1000);
    },
    onError: () => {
      toast.error('Error logging out!');
    },
  });

  return { isPending, logout };
}
