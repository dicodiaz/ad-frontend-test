import type { CartAction, ReducerState } from '@/context/cartReducer';
import { cartReducer } from '@/context/cartReducer';
import { allGames } from '@/utils/endpoint';

const game1 = allGames[0];

const game2 = allGames[1];

describe('cartReducer', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should handle SET_CART', () => {
    const initialState: ReducerState = { cart: [], loading: true };

    const action: CartAction = {
      type: 'SET_CART',
      payload: [game1],
    };

    const result = cartReducer(initialState, action);

    expect(result.cart).toEqual([game1]);
    expect(result.loading).toBe(false);
  });

  it('should handle ADD_TO_CART', () => {
    const initialState: ReducerState = { cart: [game1], loading: false };

    const action: CartAction = {
      type: 'ADD_TO_CART',
      payload: game2,
    };

    const result = cartReducer(initialState, action);

    expect(result.cart).toEqual([game1, game2]);
    expect(JSON.parse(localStorage.getItem('cart')!)).toEqual([game1, game2]);
  });

  it('should handle REMOVE_FROM_CART', () => {
    const initialState: ReducerState = { cart: [game1, game2], loading: false };

    const action: CartAction = {
      type: 'REMOVE_FROM_CART',
      payload: '1',
    };

    const result = cartReducer(initialState, action);

    expect(result.cart).toEqual([game2]);
    expect(JSON.parse(localStorage.getItem('cart')!)).toEqual([game2]);
  });

  it('should handle CLEAR_CART', () => {
    const initialState: ReducerState = { cart: [game1, game2], loading: false };

    const action: CartAction = { type: 'CLEAR_CART' };

    const result = cartReducer(initialState, action);

    expect(result.cart).toEqual([]);
    expect(JSON.parse(localStorage.getItem('cart')!)).toEqual([]);
  });
});
