import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ cartItemObj }) {
  const { pizzaId, name, unitPrice, quantity } = cartItemObj;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-between sm:gap-x-6">
        <p className="font-bold">{formatCurrency(unitPrice * quantity)}</p>

        <UpdateItemQuantity pizzaId={pizzaId} quantity={quantity} />

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
