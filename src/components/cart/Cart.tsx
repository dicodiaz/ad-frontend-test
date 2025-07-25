'use client';

import { useCartContext } from '@/context';
import Link from 'next/link';
import { CartItem, OrderSummary } from '.';

export const Cart: React.FC = () => {
  const { cart } = useCartContext();

  return (
    <section className="flex flex-col gap-y-8 px-6 py-8 md:gap-y-10 md:px-20 md:py-10 xl:gap-y-12 xl:px-32 xl:py-12">
      <div className="text-primary flex flex-col gap-y-3">
        <h1 className="text-2xl font-bold leading-7 tracking-wide md:text-3xl xl:text-4xl">
          Your cart
        </h1>
        <h2 className="text-xl leading-6 tracking-wide md:text-2xl md:leading-7">
          {cart.length} {cart.length === 1 ? 'item' : 'items'}
        </h2>
      </div>
      <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-10 xl:gap-x-20">
        <div className="flex flex-col md:flex-grow">
          {cart.map((game) => (
            <CartItem key={game.id} game={game} />
          ))}
        </div>
        <div className="flex flex-col gap-y-10 md:w-2/5 md:flex-none">
          <OrderSummary />
          <Link href="/checkout">
            <button type="button" className="cta-fill-primary">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
