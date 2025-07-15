import { RemoveButton } from '@/components';
import { useCartContext } from '@/context';
import { allGames } from '@/utils/endpoint';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('@/context/CartContext', () => ({
  useCartContext: jest.fn(),
}));

const mockDispatch = jest.fn();

const mockGame = allGames[0];

const mockCartContextReturnValue = { cart: [mockGame], dispatch: mockDispatch, loading: false };

describe('RemoveButton', () => {
  beforeEach(() => {
    (useCartContext as jest.Mock).mockReturnValue(mockCartContextReturnValue);
  });

  it('renders RemoveButton unchanged', () => {
    const { container } = render(<RemoveButton id="1" name="Cyberpunk 2077" />);
    expect(container).toMatchSnapshot();
  });

  it('dispatches REMOVE_FROM_CART when clicked', () => {
    render(<RemoveButton id="1" name={mockGame.name} />);

    const button = screen.getByRole('button', { name: `Remove, ${mockGame.name}` });
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_FROM_CART',
      payload: '1',
    });
  });

  it('applies optional className', () => {
    render(<RemoveButton id="1" name={mockGame.name} className="test-class" />);

    const container = screen.getByRole('button', {
      name: `Remove, ${mockGame.name}`,
    }).parentElement;
    expect(container).toHaveClass('test-class');
  });
});
