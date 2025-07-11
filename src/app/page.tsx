import { Catalog, CatalogHeader, Navbar } from '@/components';
import { getDataFromServer } from '@/services';

export default async function Home() {
  const { games, availableFilters } = await getDataFromServer();

  return (
    <>
      <Navbar />
      <main>
        <CatalogHeader availableFilters={availableFilters} />
        <Catalog games={games} />
      </main>
    </>
  );
}
