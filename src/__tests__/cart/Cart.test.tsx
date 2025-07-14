import { Cart } from '@/components';
import { useCartContext } from '@/context';
import { allGames } from '@/utils/endpoint';
import { render, screen } from '@testing-library/react';

jest.mock('@/context/CartContext', () => ({
  useCartContext: jest.fn(),
}));

const mockDispatch = jest.fn();

const mockGame = allGames[0];

const mockCartContextReturnValue = { cart: [mockGame], dispatch: mockDispatch, loading: false };

describe('Cart', () => {
  beforeEach(() => {
    (useCartContext as jest.Mock).mockReturnValue(mockCartContextReturnValue);
  });

  it('renders Cart unchanged', () => {
    const { container } = render(<Cart />);
    expect(container).toMatchSnapshot();
    expect(screen.getByRole('heading', { name: '1 item', level: 2 })).toBeInTheDocument();
    expect(screen.getAllByTestId('cart-item')).toHaveLength(1);
  });

  it('renders multiple items correctly', () => {
    (useCartContext as jest.Mock).mockReturnValue({
      ...mockCartContextReturnValue,
      cart: allGames.slice(0, 2),
    });

    render(<Cart />);

    expect(screen.getByRole('heading', { name: '2 items', level: 2 })).toBeInTheDocument();
    expect(screen.getAllByTestId('cart-item')).toHaveLength(2);
    expect(screen.getByRole('heading', { name: 'Cyberpunk 2077', level: 4 })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'The Witcher 3: Wild Hunt', level: 4 }),
    ).toBeInTheDocument();
  });

  it('has a working checkout button with correct link', () => {
    render(<Cart />);

    const checkoutButton = screen.getByRole('button', { name: 'Checkout' });
    expect(checkoutButton).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /checkout/i });
    expect(link).toHaveAttribute('href', '/checkout');
  });
});
