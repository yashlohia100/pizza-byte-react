import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { signupApi } from '../../services/apiFunctions';

export function useSignup() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { isPending, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success('Signed up successfully.');

      queryClient.invalidateQueries({ queryKey: ['user'] });

      setTimeout(() => {
        navigate(-1);
      }, 1000);
    },
    onError: () => {
      toast.error('Error signing up!');
    },
  });

  return { isPending, signup };
}
