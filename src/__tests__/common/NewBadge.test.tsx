import { NewBadge } from '@/components/common';
import { render } from '@testing-library/react';

describe('NewBadge', () => {
  it('renders NewBadge unchanged', () => {
    const { container } = render(<NewBadge />);
    expect(container).toMatchSnapshot();
  });
});
