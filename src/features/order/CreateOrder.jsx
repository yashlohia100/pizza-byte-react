import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { formatCurrency } from '../../utils/helpers';
import useCart from '../../hooks/useCart';
import { useCreateOrder } from './useCreateOrder';
import { useGetUser } from '../user/useGetUser';
import Loader from '../../ui/Loader';
import LoginPrompt from '../user/LoginPrompt';
import EmptyCart from '../cart/EmptyCart';
import Button from '../../ui/Button';

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(true);

  const { cart, totalCartPrice, priorityPrice } = useCart();

  const totalOrderPrice = withPriority
    ? totalCartPrice + priorityPrice
    : totalCartPrice;

  const { isCreating, createOrder } = useCreateOrder();

  const { isPending, user, error } = useGetUser();

  const { register, handleSubmit } = useForm();

  function onValid(data) {
    const newOrder = {
      ...data,
      cart,
      // user: '662b151dae261090fe647b02',
    };

    createOrder(newOrder);
  }

  if (isPending) {
    return <Loader />;
  }

  if (!cart.length) {
    return <EmptyCart />;
  }

  if (!user) {
    return <LoginPrompt />;
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-medium text-stone-600">
        Place your order!
      </h2>

      <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="name">
            First name
          </label>
          <input
            className="grow rounded-full border border-stone-200 px-4 py-2 text-sm transition duration-300 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
            type="text"
            name="name"
            id="name"
            defaultValue={user.name}
          />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="phone">
            Phone no
          </label>
          <input
            className="grow rounded-full border border-stone-200 px-4 py-2 text-sm transition duration-300 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
            type="text"
            id="phone"
            required
            {...register('deliveryPhoneNo', { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40" htmlFor="address">
            Address
          </label>
          <input
            className="grow rounded-full border border-stone-200 px-4 py-2 text-sm transition duration-300 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
            type="text"
            id="address"
            required
            {...register('deliveryAddress', { required: true })}
          />
        </div>

        <div className="mb-12 mt-4 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-stone-100"
            type="checkbox"
            id="priority"
            {...register('isPriority')}
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="text-sm">
            Want to give your order a priority?
          </label>
        </div>

        <div className="text-center">
          <Button type="primary" disabled={isCreating}>
            {isCreating
              ? 'Placing order...'
              : `Order now for ${formatCurrency(totalOrderPrice)}`}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
