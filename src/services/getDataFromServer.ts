import { Game } from '@/utils/endpoint';

export type Data = {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
};

export const getDataFromServer = async ({ genre }: { genre?: string }): Promise<Data> => {
  const BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:3000/api/games';
  const searchParams = new URLSearchParams();
  if (genre) {
    searchParams.set('genre', genre);
  }
  const res = await fetch(`${BASE_URL}?${searchParams.toString()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
