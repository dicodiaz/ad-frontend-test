import Navbar from '@/components/Navbar';

export default async function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 text-4xl font-bold text-blue-600">
        Hello, world!
      </main>
    </>
  );
}
