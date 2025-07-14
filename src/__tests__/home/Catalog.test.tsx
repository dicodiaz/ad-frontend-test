import { Catalog } from '@/components';
import { allGames } from '@/utils/endpoint';
import { render } from '@testing-library/react';

describe('Catalog', () => {
  it('renders Catalog unchanged', () => {
    const { container } = render(
      <Catalog data={{ games: allGames, currentPage: 1, totalPages: 1 }} />,
    );
    expect(container).toMatchSnapshot();
  });
});
