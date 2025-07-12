import { Game } from '@/utils/endpoint';

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

export const cartReducer = (state: Game[], action: CartAction) => {
  switch (action.type) {
    case 'SET_CART': {
      return action.payload;
    }

    case 'ADD_TO_CART': {
      const newState = [...state, action.payload];
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }

    case 'REMOVE_FROM_CART': {
      const newState = state.filter((game) => game.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }
  }
};
