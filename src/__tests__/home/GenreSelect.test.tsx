import { GenreSelect } from '@/components';
import { availableFilters } from '@/utils/endpoint';
import { fireEvent, render, screen } from '@testing-library/react';

describe('GenreSelect', () => {
  beforeEach(() => {
    (globalThis as any).mockPush.mockClear();
    (globalThis as any).mockSearchParams = new URLSearchParams(); // reset
  });

  it('renders GenreSelect unchanged', () => {
    const { container } = render(<GenreSelect availableFilters={availableFilters} />);
    expect(container).toMatchSnapshot();
  });

  it('defaults to "all" if no genre in searchParams', () => {
    render(<GenreSelect availableFilters={availableFilters} />);
    expect(screen.getByRole('combobox')).toHaveValue('all');
  });

  it('shows selected genre if genre is in searchParams', () => {
    (globalThis as any).mockSearchParams = new URLSearchParams('genre=Action');
    render(<GenreSelect availableFilters={availableFilters} />);
    expect(screen.getByRole('combobox')).toHaveValue('Action');
  });

  it('updates URL when genre changes', () => {
    render(<GenreSelect availableFilters={availableFilters} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Horror' } });

    expect((globalThis as any).mockPush).toHaveBeenCalledWith('?genre=Horror');
  });

  it('removes genre param if "all" is selected', () => {
    (globalThis as any).mockSearchParams = new URLSearchParams('genre=Action');
    render(<GenreSelect availableFilters={availableFilters} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'all' } });

    expect((globalThis as any).mockPush).toHaveBeenCalledWith('?');
  });
});
