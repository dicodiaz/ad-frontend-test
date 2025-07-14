import { GenreSelectWrapper } from '@/components';
import { render } from '@testing-library/react';

// TODO: Fixme
describe('GenreSelectWrapper', () => {
  it('renders GenreSelectWrapper unchanged', () => {
    const { container } = render(<GenreSelectWrapper />);
    expect(container).toMatchSnapshot();
  });
});
