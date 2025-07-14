import { Checkout } from '@/components';
import { render } from '@testing-library/react';

describe('Checkout', () => {
  it('renders Checkout unchanged', () => {
    const { container } = render(<Checkout />);
    expect(container).toMatchSnapshot();
  });
});
