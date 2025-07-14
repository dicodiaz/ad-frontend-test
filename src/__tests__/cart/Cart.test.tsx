import { Cart } from '@/components';
import { render } from '@testing-library/react';

describe('Cart', () => {
  it('renders Cart unchanged', () => {
    const { container } = render(<Cart />);
    expect(container).toMatchSnapshot();
  });
});
