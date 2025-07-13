import { Cart } from '@/components';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

export default async function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="p-6 md:px-20 xl:px-32">
        <Link href="/" className="flex gap-x-2">
          <HiArrowLeft className="size-4" />
          <span className="leading-4">Back to Catalog</span>
        </Link>
      </header>
      <Cart />
    </main>
  );
}
