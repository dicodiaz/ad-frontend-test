import { Navbar } from '@/components';
import { render } from '@testing-library/react';

describe('Navbar', () => {
  it('renders Navbar unchanged', () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
