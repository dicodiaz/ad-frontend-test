import { CatalogWrapper } from '@/components';
import { render } from '@testing-library/react';

// TODO: Fixme
describe('CatalogWrapper', () => {
  it('renders CatalogWrapper unchanged', () => {
    const { container } = render(<CatalogWrapper />);
    expect(container).toMatchSnapshot();
  });
});
