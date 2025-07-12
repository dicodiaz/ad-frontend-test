'use client';

import { Game } from '@/utils/endpoint';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { CartAction, cartReducer } from '.';

export type CartState = {
  cart: Game[];
  dispatch: React.Dispatch<CartAction>;
  loading: boolean;
};

export const initialState: CartState = {
  cart: [],
  dispatch: () => {},
  loading: true,
};

export const CartContext = createContext(initialState);

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { cart, loading } = initialState;
  const [state, dispatch] = useReducer(cartReducer, { cart, loading });

  useEffect(() => {
    dispatch({ type: 'SET_CART', payload: JSON.parse(localStorage.getItem('cart') ?? '[]') });
  }, []);

  return <CartContext.Provider value={{ dispatch, ...state }}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
