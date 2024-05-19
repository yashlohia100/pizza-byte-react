import { useForm } from 'react-hook-form';
import { useLogin } from './useLogin';
import Button from '../../ui/Button';

function Login() {
  const { isPending, login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    login(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="mx-auto w-72 space-y-5 py-6"
    >
      <h2 className="mb-7 text-center text-xl font-medium text-stone-600">
        Login Form
      </h2>

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required.' })}
          className="w-full rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {errors.email && (
          <p className="mt-1 px-3 text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Password is required.' })}
          className="w-full rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {errors.password && (
          <p className="mt-1 px-3 text-red-400">{errors.password.message}</p>
        )}
      </div>

      <div className="text-center">
        <Button type="small" disabled={isPending}>
          {isPending ? 'Working...' : 'Login'}
        </Button>
      </div>
    </form>
  );
}

export default Login;
