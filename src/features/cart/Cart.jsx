import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import useCart from '../../hooks/useCart';
import EmptyCart from './EmptyCart';
import Button from '../../ui/Button';

function Cart() {
  const { cart, dispatch } = useCart();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="px-4 py-3">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-medium">Your cart 🍕</h2>

      <ul className="mt-3 divide-y-2 divide-stone-200 border-b-2">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} cartItemObj={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order Pizzas
        </Button>

        <Button
          type="secondary"
          onClick={() => dispatch({ type: 'resetCart' })}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
