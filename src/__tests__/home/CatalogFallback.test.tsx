import { CatalogFallback } from '@/components';
import { render } from '@testing-library/react';

describe('CatalogFallback', () => {
  it('renders CatalogFallback unchanged', () => {
    const { container } = render(<CatalogFallback />);
    expect(container).toMatchSnapshot();
  });
});
