import { Game } from '@/utils/endpoint';
import { getBaseUrl } from '.';

export type Data = {
  games: Game[];
  currentPage: number;
  totalPages: number;
};

export const getDataFromServer = async ({
  genre,
  page,
}: {
  genre?: string;
  page?: number;
}): Promise<Data> => {
  const searchParams = new URLSearchParams();
  if (genre) {
    searchParams.set('genre', genre);
  }
  if (page) {
    searchParams.set('page', page.toString());
  }
  const res = await fetch(`${getBaseUrl()}/api/games?${searchParams.toString()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
