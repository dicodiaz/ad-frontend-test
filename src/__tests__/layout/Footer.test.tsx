import { Footer } from '@/components';
import { render } from '@testing-library/react';

describe('Footer', () => {
  it('renders Footer unchanged', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
