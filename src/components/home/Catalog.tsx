'use client';

import { Data, getDataFromServer } from '@/services';
import { useEffect, useRef, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { GameCard } from '.';

export type CatalogProps = {
  data: Data;
  genre?: string;
};

export const Catalog: React.FC<CatalogProps> = ({ data, genre }) => {
  const { games: initialGames, currentPage, totalPages } = data;
  const [games, setGames] = useState(initialGames);
  const [loading, setLoading] = useState(false);
  const page = useRef(currentPage);
  const stringifiedGames = JSON.stringify(initialGames);

  useEffect(() => {
    setGames(initialGames);
    page.current = currentPage;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringifiedGames]);

  const handleSeeMore = async () => {
    setLoading(true);
    page.current += 1;
    const { games: newGames } = await getDataFromServer({ genre, page: page.current });
    setGames((prevGames) => [...prevGames, ...newGames]);
    setLoading(false);
  };

  return (
    <section className="flex flex-col gap-y-8 px-6 py-8 md:gap-y-10 md:px-20 md:py-10 xl:gap-y-12 xl:px-32 xl:py-12">
      <div className="flex flex-col gap-y-6 md:-mx-5 md:flex-row md:flex-wrap md:gap-y-9 xl:-mx-6 xl:gap-y-12">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      {(page.current < totalPages || loading) && (
        <button
          type="button"
          aria-label="See more games"
          className="cta-fill-primary md:w-[136.5px]"
          onClick={handleSeeMore}
          disabled={loading}
        >
          {loading ? <ImSpinner2 className="size-3.5 animate-spin md:size-4" /> : 'SEE MORE'}
        </button>
      )}
    </section>
  );
};
