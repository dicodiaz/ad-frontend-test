import { GameCard } from '@/components';
import { useCartContext } from '@/context';
import { allGames } from '@/utils/endpoint';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('@/context/CartContext', () => ({
  useCartContext: jest.fn(),
}));

const mockDispatch = jest.fn();

const mockGame = allGames[0];

const mockCartContextReturnValue = { cart: [], dispatch: mockDispatch, loading: false };

describe('GameCard', () => {
  beforeEach(() => {
    (useCartContext as jest.Mock).mockReturnValue(mockCartContextReturnValue);
  });

  it('renders GameCard unchanged', () => {
    const { container } = render(<GameCard game={mockGame} />);
    expect(container).toMatchSnapshot();
  });

  it('displays the "New" badge if isNew is true', () => {
    const { container } = render(<GameCard game={mockGame} />);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('does not display the "New" badge if isNew is false', () => {
    render(<GameCard game={{ ...mockGame, isNew: false }} />);
    expect(screen.queryByText('New')).not.toBeInTheDocument();
  });

  it('shows "REMOVE" if game is in cart', async () => {
    (useCartContext as jest.Mock).mockReturnValue({
      ...mockCartContextReturnValue,
      cart: [allGames[0]],
    });

    render(<GameCard game={mockGame} />);
    expect(screen.getByRole('button', { name: 'REMOVE' })).toBeInTheDocument();
  });

  it('dispatches ADD_TO_CART when clicked and not in cart', () => {
    render(<GameCard game={mockGame} />);
    fireEvent.click(screen.getByRole('button', { name: 'ADD TO CART' }));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_TO_CART',
      payload: mockGame,
    });
  });

  it('dispatches REMOVE_FROM_CART when clicked and in cart', () => {
    (useCartContext as jest.Mock).mockReturnValue({
      ...mockCartContextReturnValue,
      cart: [allGames[0]],
    });

    render(<GameCard game={mockGame} />);
    fireEvent.click(screen.getByRole('button', { name: 'REMOVE' }));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_FROM_CART',
      payload: '1',
    });
  });

  it('disables button and shows spinner when loading', () => {
    (useCartContext as jest.Mock).mockReturnValue({
      ...mockCartContextReturnValue,
      loading: true,
    });

    render(<GameCard game={mockGame} />);
    const button = screen.getByRole('button', { name: 'ADD TO CART' });

    expect(button).toBeDisabled();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });
});
