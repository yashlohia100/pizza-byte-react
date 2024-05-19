import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item }) {
  const { name, quantity, unitPrice } = item;

  return (
    <li className="flex items-center justify-between py-3 text-sm">
      <p>
        <span className="font-semibold">{quantity}&times;</span> {name}
      </p>

      <p className="font-semibold">{formatCurrency(quantity * unitPrice)}</p>
    </li>
  );
}

export default OrderItem;
