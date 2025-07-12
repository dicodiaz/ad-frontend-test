'use client';

import { useCartContext } from '@/context';
import { CartItem } from '.';

export const Cart: React.FC = () => {
  const { cart } = useCartContext();

  return (
    <section className="flex flex-col gap-y-8 px-6 py-8">
      <div className="flex flex-col gap-y-3 text-[#3B3B3B]">
        <h1 className="text-2xl font-bold leading-7 tracking-wide">Your cart</h1>
        <span className="text-xl leading-6 tracking-wide">
          {cart.length} {cart.length === 1 ? 'item' : 'items'}
        </span>
      </div>
      <div className="flex flex-col">
        {cart.map((game) => (
          <CartItem key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};
