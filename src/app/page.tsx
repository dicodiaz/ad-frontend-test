import { CatalogHeader, Navbar } from '@/components';

export default async function Home() {
  return (
    <>
      <Navbar />
      <main>
        <CatalogHeader />
      </main>
    </>
  );
}
