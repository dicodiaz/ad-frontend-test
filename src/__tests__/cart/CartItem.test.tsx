import { CartItem } from '@/components';
import { useCartContext } from '@/context';
import { allGames } from '@/utils/endpoint';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('@/context/CartContext', () => ({
  useCartContext: jest.fn(),
}));

const mockDispatch = jest.fn();

const mockGame = allGames[0];

const mockCartContextReturnValue = { cart: [mockGame], dispatch: mockDispatch, loading: false };

describe('CartItem', () => {
  beforeEach(() => {
    (useCartContext as jest.Mock).mockReturnValue(mockCartContextReturnValue);
  });

  it('renders CartItem unchanged', () => {
    const { container } = render(<CartItem game={allGames[0]} />);
    expect(container).toMatchSnapshot();
  });

  it('displays the "New" badge if isNew is true', () => {
    render(<CartItem game={mockGame} />);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('does not display the "New" badge if isNew is false', () => {
    render(<CartItem game={{ ...mockGame, isNew: false }} />);
    expect(screen.queryByText('New')).not.toBeInTheDocument();
  });

  it('calls dispatch with REMOVE_FROM_CART when mobile (md:hidden) button is clicked', () => {
    render(<CartItem game={mockGame} />);
    const mobileButton = screen.getAllByRole('button')[0]; // First button
    fireEvent.click(mobileButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_FROM_CART',
      payload: '1',
    });
  });

  it('calls dispatch with REMOVE_FROM_CART when desktop (md:block) button is clicked', () => {
    render(<CartItem game={mockGame} />);
    const desktopButton = screen.getAllByRole('button')[1]; // Second button
    fireEvent.click(desktopButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_FROM_CART',
      payload: '1',
    });
  });
});
