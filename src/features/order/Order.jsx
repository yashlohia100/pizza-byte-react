import ErrorBox from '../../ui/ErrorBox';
import Loader from '../../ui/Loader';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';
import { useGetOrder } from './useGetOrder';

function Order() {
  const { isPending, order, error } = useGetOrder();

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  const {
    id,
    isPriority,
    status,
    estimatedDelivery,
    cart,
    totalCartPrice,
    priorityPrice,
    totalOrderPrice,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id}</h2>

        <div className="space-x-2">
          {isPriority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}

          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn > 0
            ? `Only ${deliveryIn} minutes left...`
            : 'Order should have arrived.'}
        </p>

        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y-2 divide-stone-200 border-y-2 border-stone-200">
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Pizza price: {formatCurrency(totalCartPrice)}
        </p>

        {isPriority && (
          <p className="text-sm font-medium text-stone-600">
            Priority price: {formatCurrency(priorityPrice)}
          </p>
        )}

        <p className="font-bold">
          Total order price: {formatCurrency(totalOrderPrice)}
        </p>
      </div>
    </div>
  );
}

export default Order;
