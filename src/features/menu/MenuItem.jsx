import useCart from '../../hooks/useCart';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizzaObj }) {
  const { id, name, unitPrice, ingredients, soldOut, image } = pizzaObj;

  const { cart, dispatch } = useCart();

  const quantityInCart =
    cart.find((item) => item.pizzaId === id)?.quantity || 0;
  const isInCart = quantityInCart > 0;

  function handleAddToCart() {
    const newCartItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
    };

    dispatch({ type: 'addCartItem', payload: newCartItem });
  }

  return (
    <li className="flex gap-4 py-4">
      <div>
        <img
          src={`${import.meta.env.VITE_API_URL}/images/pizzas/${image}`}
          alt="pizza-image"
          className={`w-28 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        />
      </div>

      <div className="flex grow flex-col">
        <p className="text-lg font-medium">{name}</p>

        <p className="capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2">
          {!soldOut ? (
            <p className="font-semibold">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium uppercase text-stone-500">Sold out</p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3">
              <UpdateItemQuantity pizzaId={id} quantity={quantityInCart} />

              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
