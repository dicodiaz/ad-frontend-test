import { CartContext, CartProvider, initialState, useCartContext } from '@/context';
import { allGames } from '@/utils/endpoint';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';

const mockGame = allGames[0];

const TestComponent: React.FC = () => {
  const { cart, dispatch } = useCartContext();

  return (
    <div>
      <p data-testid="cart-size">{cart.length}</p>
      <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: mockGame })}>Add Game</button>
    </div>
  );
};

describe('CartProvider & useCartContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('provides initial empty state', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    expect(screen.getByTestId('cart-size')).toHaveTextContent('0');
  });

  it('loads cart from localStorage', () => {
    const storedGame = [mockGame];
    localStorage.setItem('cart', JSON.stringify(storedGame));

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    expect(screen.getByTestId('cart-size')).toHaveTextContent('1');
  });

  it('dispatches actions and updates cart', async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    expect(screen.getByTestId('cart-size')).toHaveTextContent('0');

    act(() => {
      screen.getByText('Add Game').click();
    });

    expect(screen.getByTestId('cart-size')).toHaveTextContent('1');
  });
});

describe('CartContext', () => {
  it('exports an initialState with correct shape', () => {
    expect(initialState).toEqual({
      cart: [],
      dispatch: expect.any(Function),
      loading: true,
    });
  });

  it('creates context', () => {
    expect(CartContext).toBeDefined();
  });
});
