import { getBaseUrl } from '.';

export const getAvailableFiltersFromServer = async (): Promise<{ availableFilters: string[] }> => {
  const res = await fetch(`${getBaseUrl()}/api/availableFilters`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
