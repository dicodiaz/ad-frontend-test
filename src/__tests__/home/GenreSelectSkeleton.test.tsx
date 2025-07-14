import { GenreSelectSkeleton } from '@/components';
import { render } from '@testing-library/react';

describe('GenreSelectSkeleton', () => {
  it('renders GenreSelectSkeleton unchanged', () => {
    const { container } = render(<GenreSelectSkeleton />);
    expect(container).toMatchSnapshot();
  });
});
