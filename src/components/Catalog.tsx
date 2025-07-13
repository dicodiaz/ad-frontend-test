import { getDataFromServer } from '@/services';
import { GameCard, SeeMoreButton } from '.';

export type CatalogProps = {
  genre?: string;
  currentPage: number;
};

export const Catalog: React.FC<CatalogProps> = async ({ genre, currentPage }) => {
  const { games, totalPages } = await getDataFromServer({
    genre,
    page: currentPage,
  });

  return (
    <section className="flex flex-col gap-y-8 py-8 md:gap-y-10 md:py-10 xl:gap-y-12 xl:py-12">
      <div className="flex flex-col gap-y-6 px-6 md:-mx-5 md:flex-row md:flex-wrap md:gap-y-9 md:px-20 xl:-mx-6 xl:gap-y-12 xl:px-32">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      {currentPage < totalPages && <SeeMoreButton currentPage={currentPage} />}
    </section>
  );
};
