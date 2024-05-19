import useCart from '../../hooks/useCart';
import Button from '../../ui/Button';

function UpdateItemQuantity({ pizzaId, quantity }) {
  const { dispatch } = useCart();

  return (
    <div className="flex items-center gap-2">
      <Button
        type="round"
        onClick={() =>
          dispatch({ type: 'decreaseItemQuantity', payload: pizzaId })
        }
      >
        -
      </Button>

      <span className="text-sm font-medium">{quantity}</span>

      <Button
        type="round"
        onClick={() =>
          dispatch({ type: 'increaseItemQuantity', payload: pizzaId })
        }
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
