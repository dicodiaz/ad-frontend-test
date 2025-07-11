import { Game } from '@/utils/endpoint';

export type GameCardProps = {
  game: Game;
};

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { image, genre, name, price } = game;

  return (
    <div className="flex flex-col gap-y-5 rounded-2xl border-[0.5px] border-[#8F8F8F] p-6">
      <div className="bg-ba overflow-hidden rounded-t-2xl">
        <img src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-y-3">
        <span className="font-bold text-[#737373]">{genre.toUpperCase()}</span>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold leading-5 tracking-wide text-[#3B3B3B]">{name}</h4>
          <span className="text-xl font-bold leading-6 tracking-wide text-[#3B3B3B]">
            {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </span>
        </div>
      </div>
      <button
        type="button"
        className="rounded-lg border border-[#3B3B3B] px-6 py-4 font-bold tracking-[0.5px] text-[#3B3B3B]"
      >
        ADD TO CART
      </button>
    </div>
  );
};
