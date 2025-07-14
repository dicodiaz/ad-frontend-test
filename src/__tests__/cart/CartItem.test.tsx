import { CartItem } from '@/components';
import { allGames } from '@/utils/endpoint';
import { render } from '@testing-library/react';

describe('CartItem', () => {
  it('renders CartItem unchanged', () => {
    const { container } = render(<CartItem game={allGames[0]} />);
    expect(container).toMatchSnapshot();
  });
});
