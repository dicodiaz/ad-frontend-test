import { getAvailableFiltersFromServer } from '@/services/getAvailableFiltersFromServer';
import { GenreSelect } from '.';

export const GenreSelectWrapper: React.FC = async () => {
  const { availableFilters } = await getAvailableFiltersFromServer();

  return <GenreSelect availableFilters={availableFilters} />;
};
