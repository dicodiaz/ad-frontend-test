import { useCartContext } from '@/context';
import { HiX } from 'react-icons/hi';

export type RemoveButtonProps = {
  id: string;
  name: string;
  className?: string;
};

export const RemoveButton: React.FC<RemoveButtonProps> = ({ id, name, className }) => {
  const { dispatch } = useCartContext();

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <div className={className}>
      <button type="button" aria-label={`Remove, ${name}`} className="p-1" onClick={removeFromCart}>
        <HiX className="size-5 text-[#8F8F8F]" />
      </button>
    </div>
  );
};
