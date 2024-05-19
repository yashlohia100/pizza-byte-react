import { useForm } from 'react-hook-form';
import { useSignup } from './useSignup';
import Button from '../../ui/Button';

const inputStyles =
  'w-72 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-400';

function Signup() {
  const { isPending, signup } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onValid(data) {
    // console.log(data);
    signup(data);
  }

  function onInvalid(errors) {
    // console.log(errors);
  }

  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="space-y-5 px-4 py-6 text-center"
    >
      <h2 className="mb-7 text-xl font-medium text-stone-600">Signup Form</h2>

      <div>
        <input
          type="text"
          placeholder="Name"
          {...register('name', { required: 'Name is required.' })}
          className={inputStyles}
        />
        {errors.name && (
          <p className="mt-1 text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required.' })}
          className={inputStyles}
        />
        {errors.email && (
          <p className="mt-1 text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: 'Password is required.' })}
          className={inputStyles}
        />
        {errors.password && (
          <p className="mt-1 text-red-400">{errors.password.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register('passwordConfirm', {
            required: 'Please confirm your password.',
          })}
          className={inputStyles}
        />
        {errors.passwordConfirm && (
          <p className="mt-1 text-red-400">{errors.passwordConfirm.message}</p>
        )}
      </div>

      <Button type="small" disabled={isPending}>
        {isPending ? 'Working...' : 'Signup'}
      </Button>
    </form>
  );
}

export default Signup;
