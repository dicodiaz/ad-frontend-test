'use client';

import { useCartContext } from '@/context';
import { useEffect } from 'react';

export const Checkout = () => {
  const { dispatch } = useCartContext();

  useEffect(() => {
    dispatch({ type: 'CLEAR_CART' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1 className="text-primary text-2xl font-bold leading-7 tracking-wide">
      Thanks for your purchase!
    </h1>
  );
};
