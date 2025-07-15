import { NewBadge } from '@/components/common';
import { useCartContext } from '@/context';
import { Game } from '@/utils/endpoint';
import Image from 'next/image';
import { HiX } from 'react-icons/hi';

export type CartItemProps = {
  game: Game;
};

export const CartItem: React.FC<CartItemProps> = ({ game }) => {
  const { id, image, genre, name, price, description, isNew } = game;
  const { dispatch } = useCartContext();

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <div
      className="[&~&]:border-stroke-secondary flex flex-col gap-y-4 px-4 py-5 md:flex-row md:gap-x-6 [&~&]:border-t-[0.5px]"
      data-testid="cart-item"
    >
      <div className="relative flex gap-x-3 md:w-2/5 md:flex-none">
        {isNew && <NewBadge />}
        <Image
          src={image}
          alt={name}
          width={654}
          height={240}
          className="h-[136px] object-cover md:h-auto"
        />
        <div className="md:hidden">
          <button type="button" className="p-1" onClick={removeFromCart}>
            <HiX className="size-5 text-[#8F8F8F]" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 md:py-2">
        <span className="text-sm font-bold leading-4 text-neutral-500">{genre}</span>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-primary text-lg font-bold leading-5 tracking-wide md:text-xl md:leading-6">
            {name}
          </h4>
          <span className="min-h-[60px] leading-5 text-neutral-500">{description}</span>
        </div>
        <div className="text-primary flex justify-end text-lg font-bold leading-5 tracking-wide md:text-xl md:leading-6">
          {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </div>
      </div>
      <div className="hidden md:block">
        <button type="button" className="p-1" onClick={removeFromCart}>
          <HiX className="size-5 text-[#8F8F8F]" />
        </button>
      </div>
    </div>
  );
};
