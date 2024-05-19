import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../services/apiFunctions';

export function useLogin() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { isPending, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      toast.success('Logged in successfully.');

      queryClient.invalidateQueries({ queryKey: ['user'] });

      setTimeout(() => {
        navigate(-1);
      }, 1000);
    },
    onError: () => {
      toast.error('Error logging in!');
    },
  });

  return { isPending, login };
}
