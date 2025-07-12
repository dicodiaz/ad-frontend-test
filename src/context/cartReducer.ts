import { Game } from '@/utils/endpoint';
import { CartState } from '.';

export type SetCartAction = {
  type: 'SET_CART';
  payload: Game[];
};

export type AddToCartAction = {
  type: 'ADD_TO_CART';
  payload: Game;
};

export type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
  payload: Game['id'];
};

export type CartAction = SetCartAction | AddToCartAction | RemoveFromCartAction;

export type ReducerState = Omit<CartState, 'dispatch'>;

export const cartReducer = (state: ReducerState, action: CartAction): ReducerState => {
  switch (action.type) {
    case 'SET_CART': {
      return { ...state, cart: action.payload, loading: false };
    }

    case 'ADD_TO_CART': {
      const newCart = [...state.cart, action.payload];
      localStorage.setItem('cart', JSON.stringify(newCart));
      return { ...state, cart: newCart };
    }

    case 'REMOVE_FROM_CART': {
      const newCart = state.cart.filter((game) => game.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return { ...state, cart: newCart };
    }
  }
};
