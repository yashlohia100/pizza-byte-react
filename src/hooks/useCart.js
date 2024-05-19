import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error('CartContext was used outside of CartProvider!');
  return cart;
}
