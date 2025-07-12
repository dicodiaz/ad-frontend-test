'use client';

import { Game } from '@/utils/endpoint';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { CartAction, cartReducer } from '.';

export type CartState = {
  cart: Game[];
  dispatch: React.Dispatch<CartAction>;
};

export const initialState: CartState = {
  cart: [],
  dispatch: () => {},
};

export const CartContext = createContext(initialState);

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState.cart);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch({ type: 'SET_CART', payload: JSON.parse(storedCart) });
    }
  }, []);

  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
