import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-500 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <p className="mt-7 font-semibold">
        Your cart is empty. Add some pizzas from menu.
      </p>
    </div>
  );
}

export default EmptyCart;
