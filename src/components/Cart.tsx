'use client';

import { useCartContext } from '@/context';
import Link from 'next/link';
import { CartItem, OrderSummary } from '.';

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
      <div className="flex flex-col gap-y-10">
        <OrderSummary />
        <Link href="/checkout">
          <button
            type="button"
            className="w-full rounded-lg bg-[#585660] px-6 py-4 text-sm font-bold leading-4 tracking-[0.5px] text-white"
          >
            Checkout
          </button>
        </Link>
      </div>
    </section>
  );
};
