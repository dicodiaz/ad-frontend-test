import { useCartContext } from '@/context';
import { Game } from '@/utils/endpoint';
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
    <div className="flex flex-col gap-y-4 px-4 py-5 [&~&]:border-t-[0.5px] [&~&]:border-[#8F8F8F]">
      <div className="relative flex gap-x-3">
        {isNew && (
          <div className="absolute left-3 top-3 rounded bg-[#F5F5F4] px-3 py-2 leading-4 tracking-wide">
            New
          </div>
        )}
        <img src={image} alt={name} className="h-[135px] flex-1 object-cover" />
        <div>
          <button type="button" className="p-1" onClick={removeFromCart}>
            <HiX className="size-5 text-[#8F8F8F]" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-11">
        <div className="flex flex-col gap-y-3">
          <span className="text-sm font-bold leading-4 text-[#737373]">{genre}</span>
          <div className="flex flex-col gap-y-2">
            <h4 className="text-lg font-bold leading-5 tracking-wide text-[#3B3B3B]">{name}</h4>
            <span className="leading-5 text-[#737373]">{description}</span>
          </div>
        </div>
        <div className="flex justify-end text-lg font-bold leading-5 tracking-wide text-[#3B3B3B]">
          {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </div>
      </div>
    </div>
  );
};
