import { getDataFromServer } from '@/services';
import { GameCard, GenreSelect } from '.';

export const Catalog: React.FC = async () => {
  const { games, availableFilters } = await getDataFromServer();

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
      <div className="px-6">
        <button
          type="button"
          className="w-full rounded-lg bg-[#585660] py-4 text-sm leading-4 tracking-[0.5px] text-white"
        >
          SEE MORE
        </button>
      </div>
    </section>
  );
};
