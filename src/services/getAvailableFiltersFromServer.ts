export const getAvailableFiltersFromServer = async (): Promise<{ availableFilters: string[] }> => {
  const BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:3000/api';
  const res = await fetch(`${BASE_URL}/availableFilters`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
