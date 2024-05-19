import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import useCart from '../../hooks/useCart';

function CartOverview() {
  const { totalCartQuantity, totalCartPrice } = useCart();

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200">
      <div className="space-x-4 font-semibold">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </div>

      <div className="text-stone-300 transition hover:underline">
        <Link to="/cart">Go to cart &rarr;</Link>
      </div>
    </div>
  );
}

export default CartOverview;
