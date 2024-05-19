import useCart from '../../hooks/useCart';
import Button from '../../ui/Button';

function DeleteItem({ pizzaId }) {
  const { dispatch } = useCart();

  return (
    <Button
      type="small"
      onClick={() => dispatch({ type: 'deleteCartItem', payload: pizzaId })}
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
