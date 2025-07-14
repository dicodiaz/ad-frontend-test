'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export type GenreSelectProps = {
  availableFilters: string[];
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
    params.delete('page');
    router.push(`?${params.toString()}`);
  };

  return (
    <select
      name="genre"
      className="flex-grow md:flex-grow-0"
      defaultValue={searchParams.get('genre') ?? 'all'}
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
  );
};
