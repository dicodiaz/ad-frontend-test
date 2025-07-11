import { Game } from '@/utils/endpoint';

export type Data = {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
};

export const getDataFromServer = async (): Promise<Data> => {
  const res = await fetch('http://localhost:3000/api/games');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
