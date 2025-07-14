import { Catalog } from '@/components';
import { getDataFromServer } from '@/services';
import { allGames } from '@/utils/endpoint';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

const mockInitialData = { games: allGames.slice(0, 2), currentPage: 1, totalPages: 3 };

jest.mock('@/services/getDataFromServer', () => ({
  getDataFromServer: jest.fn(),
}));

describe('Catalog', () => {
  it('renders Catalog unchanged', () => {
    const { container } = render(<Catalog data={mockInitialData} />);
    expect(container).toMatchSnapshot();
  });

  it('hides SEE MORE if all pages are loaded', () => {
    render(<Catalog data={{ ...mockInitialData, currentPage: 3 }} />);
    expect(screen.queryByRole('button', { name: 'SEE MORE' })).not.toBeInTheDocument();
  });

  it('calls getDataFromServer and appends new games on SEE MORE click', async () => {
    (getDataFromServer as jest.Mock).mockResolvedValueOnce({
      games: allGames.slice(2, 5),
    });

    render(<Catalog data={mockInitialData} genre="Action" />);
    fireEvent.click(screen.getByRole('button', { name: 'SEE MORE' }));

    expect(getDataFromServer).toHaveBeenCalledWith({ genre: 'Action', page: 2 });

    await waitFor(() => {
      expect(screen.getAllByTestId('game-card')).toHaveLength(5);
      expect(screen.getByText('DOOM Eternal')).toBeInTheDocument();
    });
  });

  it('shows spinner while loading', async () => {
    let resolvePromise: any;
    const promise = new Promise((res) => {
      resolvePromise = res;
    });

    (getDataFromServer as jest.Mock).mockReturnValueOnce(promise);

    render(<Catalog data={mockInitialData} />);
    fireEvent.click(screen.getByText('SEE MORE'));

    expect(screen.getByRole('button', { name: 'SEE MORE' })).toBeDisabled();
    expect(
      screen.getByRole('button', { name: 'SEE MORE' }).querySelector('svg'),
    ).toBeInTheDocument();

    resolvePromise({ games: [] });
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'SEE MORE' })).not.toBeDisabled();
    });
  });

  it('resets state when data prop changes', () => {
    const { rerender } = render(<Catalog data={mockInitialData} />);
    expect(screen.getAllByTestId('game-card')).toHaveLength(2);

    const newData = { games: allGames.slice(2, 3), currentPage: 1, totalPages: 3 };

    rerender(<Catalog data={newData} />);
    expect(screen.getAllByTestId('game-card')).toHaveLength(1);
    expect(screen.getByText('The Legend of Zelda: Breath of the Wild')).toBeInTheDocument();
  });
});
