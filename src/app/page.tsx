import { Catalog, CatalogFallback } from '@/components';
import { Suspense } from 'react';

export default async function Home(props: {
  searchParams?: Promise<{ genre?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const genre = searchParams?.genre;
  const currentPage = searchParams?.page ? Number(searchParams.page) : 1;

  return (
    <main className="flex flex-1 flex-col gap-y-8 py-8">
      <h1 className="px-6 text-2xl font-bold leading-7 tracking-wide text-[#3B3B3B]">
        TOP SELLERS
      </h1>
      <Suspense fallback={<CatalogFallback />}>
        <Catalog genre={genre} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}
