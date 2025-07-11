'use client';

import { Data } from '@/services';
import { useRouter, useSearchParams } from 'next/navigation';

export type GenreSelectProps = {
  availableFilters: Data['availableFilters'];
};

export const GenreSelect: React.FC<GenreSelectProps> = ({ availableFilters }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleGenreChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const genre = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (genre === 'all') {
      params.delete('genre');
    } else {
      params.set('genre', genre);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <label className="flex gap-x-6 px-6 py-4">
      <span className="text-xl font-bold leading-6 tracking-wide">Genre</span>
      <div className="my-[1px] w-px bg-[#3B3B3B]" />
      <select
        name="genre"
        className="flex-1 text-xl leading-6 tracking-wide"
        onChange={handleGenreChange}
      >
        <option value="all">All</option>
        {availableFilters
          .sort((a, b) => a.localeCompare(b))
          .map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
      </select>
    </label>
  );
};
