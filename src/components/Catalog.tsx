import { Data } from '@/services';
import { GameCard } from '.';

export type CatalogProps = {
  games: Data['games'];
};

export const Catalog: React.FC<CatalogProps> = async ({ games }) => {
  return (
    <section className="flex flex-col gap-y-2 px-6 py-8">
      <div className="flex flex-col gap-y-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <button
        type="button"
        className="rounded-lg bg-[#585660] px-6 py-4 text-sm leading-4 tracking-[0.5px] text-white"
      >
        SEE MORE
      </button>
    </section>
  );
};
