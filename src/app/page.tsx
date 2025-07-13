import { CatalogFallback, CatalogHeader, CatalogWrapper } from '@/components';
import { Suspense } from 'react';

export default async function Home(props: { searchParams?: Promise<{ genre?: string }> }) {
  const searchParams = await props.searchParams;
  const genre = searchParams?.genre;

  return (
    <main className="flex flex-1 flex-col">
      <CatalogHeader />
      <Suspense key={genre} fallback={<CatalogFallback />}>
        <CatalogWrapper genre={genre} />
      </Suspense>
    </main>
  );
}
