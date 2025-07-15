'use client';

import { NewBadge } from '@/components/common';
import { useCartContext } from '@/context';
import { Game } from '@/utils/endpoint';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ImSpinner2 } from 'react-icons/im';

export type GameCardProps = {
  game: Game;
  firstNewGameId?: string;
};

export const GameCard: React.FC<GameCardProps> = ({ game, firstNewGameId }) => {
  const { id, image, genre, name, price, isNew } = game;
  const { cart, dispatch, loading } = useCartContext();
  const isInCart = cart.some((item) => item.id === game.id);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (game.id === firstNewGameId) {
      buttonRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: game });
  };

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <div className="md:w-1/2 md:px-5 xl:w-1/3 xl:flex-none xl:px-6" data-testid="game-card">
      <div className="border-stroke-secondary flex flex-col gap-y-5 rounded-2xl border-[0.5px] p-6">
        <div className="relative overflow-hidden rounded-t-2xl md:h-60">
          {isNew && <NewBadge />}
          <Image src={image} alt={name} width={654} height={240} className="h-full object-cover" />
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="font-bold text-neutral-500">{genre.toUpperCase()}</span>
          <div className="flex items-center justify-between gap-x-3 md:min-h-[60px]">
            <h2 className="text-primary text-lg font-bold leading-5 tracking-wide">{name}</h2>
            <span className="text-primary text-xl font-bold leading-6 tracking-wide">
              {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </span>
          </div>
        </div>
        <button
          type="button"
          aria-label={`${isInCart ? 'Remove' : 'Add to cart'}, ${name}`}
          className="cta-stroke-primary"
          onClick={isInCart ? removeFromCart : addToCart}
          disabled={loading}
          ref={buttonRef}
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
