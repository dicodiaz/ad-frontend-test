'use client';

import { useCartContext } from '@/context';
import { useEffect } from 'react';

export const Checkout = () => {
  const { dispatch } = useCartContext();

  useEffect(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  return (
    <h1 className="text-2xl font-bold leading-7 tracking-wide text-[#3B3B3B]">
      Thanks for your purchase!
    </h1>
  );
};
