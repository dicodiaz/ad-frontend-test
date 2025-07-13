import { Game } from '@/utils/endpoint';

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
  const BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:3000/api';
  const searchParams = new URLSearchParams();
  if (genre) {
    searchParams.set('genre', genre);
  }
  if (page) {
    searchParams.set('page', page.toString());
  }
  const res = await fetch(`${BASE_URL}/games?${searchParams.toString()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
