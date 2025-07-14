import { GenreSelect } from '@/components';
import { availableFilters } from '@/utils/endpoint';
import { render } from '@testing-library/react';

// TODO: Fixme
describe('GenreSelect', () => {
  it('renders GenreSelect unchanged', () => {
    const { container } = render(<GenreSelect availableFilters={availableFilters} />);
    expect(container).toMatchSnapshot();
  });
});
