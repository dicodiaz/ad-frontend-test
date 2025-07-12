import { Checkout } from '@/components';

export default async function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <Checkout />
    </main>
  );
}
