import { Catalog, CatalogFallback, CatalogHeader } from '@/components';
import { Suspense } from 'react';

export default async function Home(props: {
  searchParams?: Promise<{ genre?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const genre = searchParams?.genre;
  const currentPage = searchParams?.page ? Number(searchParams.page) : 1;

  return (
    <main className="flex flex-1 flex-col">
      <CatalogHeader />
      <Suspense fallback={<CatalogFallback />}>
        <Catalog genre={genre} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}
