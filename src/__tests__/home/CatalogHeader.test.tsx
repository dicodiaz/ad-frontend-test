import { CatalogHeader } from '@/components';
import { render } from '@testing-library/react';

// TODO: Fixme
describe('CatalogHeader', () => {
  it('renders CatalogHeader unchanged', () => {
    const { container } = render(<CatalogHeader />);
    expect(container).toMatchSnapshot();
  });
});
