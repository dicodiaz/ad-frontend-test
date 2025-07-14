import { GameCard } from '@/components';
import { allGames } from '@/utils/endpoint';
import { render } from '@testing-library/react';

describe('GameCard', () => {
  it('renders GameCard unchanged', () => {
    const { container } = render(<GameCard game={allGames[0]} />);
    expect(container).toMatchSnapshot();
  });
});
