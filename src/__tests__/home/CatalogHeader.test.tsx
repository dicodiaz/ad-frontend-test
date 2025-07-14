import { CatalogHeader, GenreSelect } from '@/components';
import { availableFilters } from '@/utils/endpoint';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

jest.mock('@/components/home/GenreSelectWrapper', () => ({
  GenreSelectWrapper: () => <GenreSelect availableFilters={availableFilters} />,
}));

describe('CatalogHeader', () => {
  it('renders CatalogHeader unchanged', () => {
    const { container } = render(<CatalogHeader />);
    expect(container).toMatchSnapshot();
  });
});
