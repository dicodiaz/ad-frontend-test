'use client';

import { useCartContext } from '@/context';
import { Game } from '@/utils/endpoint';
import Image from 'next/image';
import { ImSpinner2 } from 'react-icons/im';

export type GameCardProps = {
  game: Game;
};

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { id, image, genre, name, price, isNew } = game;
  const { cart, dispatch, loading } = useCartContext();
  const isInCart = cart.some((item) => item.id === game.id);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: game });
  };

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <div className="md:w-1/2 md:px-5 xl:w-1/3 xl:flex-none xl:px-6" data-testid="game-card">
      <div className="flex flex-col gap-y-5 rounded-2xl border-[0.5px] border-[#8F8F8F] p-6">
        <div className="relative overflow-hidden rounded-t-2xl md:h-60">
          {isNew && (
            <div className="absolute left-3 top-3 rounded bg-[#F5F5F4] px-3 py-2 leading-4 tracking-wide">
              New
            </div>
          )}
          <Image src={image} alt={name} width={654} height={240} className="h-full object-cover" />
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="font-bold text-[#737373]">{genre.toUpperCase()}</span>
          <div className="flex items-center justify-between gap-x-3 md:min-h-[60px]">
            <h4 className="text-lg font-bold leading-5 tracking-wide text-[#3B3B3B]">{name}</h4>
            <span className="text-xl font-bold leading-6 tracking-wide text-[#3B3B3B]">
              {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </span>
          </div>
        </div>
        <button
          type="button"
          aria-label={isInCart ? 'REMOVE' : 'ADD TO CART'}
          className="flex justify-center rounded-lg border border-[#3B3B3B] px-6 py-4 font-bold tracking-[0.5px] text-[#3B3B3B]"
          onClick={isInCart ? removeFromCart : addToCart}
          disabled={loading}
        >
          {loading ? (
            <ImSpinner2 className="size-6 animate-spin" />
          ) : isInCart ? (
            'REMOVE'
          ) : (
            'ADD TO CART'
          )}
        </button>
      </div>
    </div>
  );
};
