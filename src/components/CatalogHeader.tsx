'use client';

import { allGames } from '@/utils/endpoint';
import { useRouter, useSearchParams } from 'next/navigation';

export const CatalogHeader: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleGenreChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const params = new URLSearchParams(searchParams);
    params.set('genre', e.target.value);
    router.push(`?${params.toString()}`);
  };

  return (
    <header className="flex flex-col gap-y-8 border-b border-[#EFEDF3] px-6 py-8">
      <h1 className="text-2xl font-bold leading-7 tracking-[0.4px] text-[#3B3B3B]">TOP SELLERS</h1>
      <label className="flex gap-x-6 py-4">
        <span>Genre</span>
        <div className="my-[1px] w-px bg-[#3B3B3B]" />
        <select className="flex-1" onChange={handleGenreChange}>
          <option value="all">All</option>
          {Array.from(new Set(allGames.map(({ genre }) => genre)))
            .sort((a, b) => a.localeCompare(b))
            .map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
        </select>
      </label>
    </header>
  );
};
