import { Catalog, CatalogHeader } from '@/components';
import { getDataFromServer } from '@/services';

export default async function Home() {
  const { games, availableFilters } = await getDataFromServer();

  return (
    <main>
      <CatalogHeader availableFilters={availableFilters} />
      <Catalog games={games} />
    </main>
  );
}
