import { getAvailableFiltersFromServer } from '@/services';
import { GenreSelect } from '.';

export const GenreSelectWrapper: React.FC = async () => {
  const { availableFilters } = await getAvailableFiltersFromServer();

  return <GenreSelect availableFilters={availableFilters} />;
};
