import { OrderSummary } from '@/components';
import { render } from '@testing-library/react';

describe('OrderSummary', () => {
  it('renders OrderSummary unchanged', () => {
    const { container } = render(<OrderSummary />);
    expect(container).toMatchSnapshot();
  });
});
