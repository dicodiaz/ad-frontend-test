import { getDataFromServer } from '@/services';
import { GameCard, GenreSelect, SeeMoreButton } from '.';

export type CatalogProps = {
  genre?: string;
  currentPage: number;
};

export const Catalog: React.FC<CatalogProps> = async ({ genre, currentPage }) => {
  const { games, availableFilters, totalPages } = await getDataFromServer({
    genre,
    page: currentPage,
  });

  return (
    <section className="flex flex-col gap-y-2">
      <div className="flex flex-col gap-y-8">
        <GenreSelect availableFilters={availableFilters} />
        <div className="h-px bg-[#EFEDF3]" />
        <div className="flex flex-col gap-y-6 px-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
      {currentPage < totalPages && <SeeMoreButton currentPage={currentPage} />}
    </section>
  );
};
