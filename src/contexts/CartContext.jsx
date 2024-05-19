import { createContext, useReducer } from 'react';

const CartContext = createContext();

const initialStateCart = {
  cart: [],

  /*
  cart: [
    {
      pizzaId: '662b151dae261090fe647a03',
      name: 'Margherita',
      unitPrice: 239,
      quantity: 1,
    },
    {
      pizzaId: '662b151dae261090fe647a04',
      name: 'Peppy Paneer',
      unitPrice: 459,
      quantity: 2,
    },
  ],
  */
};

function reducer(state, action) {
  switch (action.type) {
    case 'addCartItem': {
      // payload is 'newCartItem'
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }

    case 'deleteCartItem': {
      // payload is pizzaId of pizza to delete from cart
      return {
        ...state,
        cart: state.cart.filter((item) => item.pizzaId !== action.payload),
      };
    }

    case 'increaseItemQuantity': {
      // payload is pizzaId of pizza to increase quantity of
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.pizzaId === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }

    case 'decreaseItemQuantity': {
      // payload is pizzaId of pizza to decrease quantity of

      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item.quantity === 1) {
        // Delete item from cart
        return {
          ...state,
          cart: state.cart.filter((item) => item.pizzaId !== action.payload),
        };
      }

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.pizzaId === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      };
    }

    case 'resetCart': {
      return initialStateCart;
    }

    default:
      throw new Error('Invalid action type!');
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialStateCart);

  const totalCartQuantity = state.cart.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const totalCartPrice = state.cart.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );

  const priorityPrice = Math.floor(0.2 * totalCartPrice);

  return (
    <CartContext.Provider
      value={{
        ...state,
        totalCartPrice,
        totalCartQuantity,
        priorityPrice,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
