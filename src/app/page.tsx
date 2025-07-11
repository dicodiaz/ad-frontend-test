import { CatalogHeader, Navbar } from '@/components';
import { getDataFromServer } from '@/services';

export default async function Home() {
  const { availableFilters } = await getDataFromServer();

  return (
    <>
      <Navbar />
      <main>
        <CatalogHeader availableFilters={availableFilters} />
      </main>
    </>
  );
}
