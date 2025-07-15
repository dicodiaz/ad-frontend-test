import { useCartContext } from '@/context';

export const OrderSummary: React.FC = () => {
  const { cart } = useCartContext();
  const total = cart.reduce((acc, game) => acc + game.price, 0);

  return (
    <div className="border-stroke-secondary flex flex-col gap-y-6 rounded-lg border-[0.5px] px-4 py-6">
      <div className="flex flex-col gap-y-3">
        <h3 className="text-primary text-xl font-bold leading-6 tracking-wide md:text-2xl md:leading-7">
          Order Summary
        </h3>
        <span className="text-lg leading-6 tracking-wide">
          {cart.length} {cart.length === 1 ? 'item' : 'items'}
        </span>
      </div>
      <div className="flex flex-col gap-y-6 py-5">
        <div className="flex flex-col gap-y-3">
          {cart.map(({ id, name, price }) => (
            <div
              key={id}
              className="text-primary flex items-center justify-between gap-x-3 text-lg leading-6 tracking-wide"
            >
              <span>{name}</span>
              <span>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            </div>
          ))}
        </div>
        <div className="bg-stroke-secondary h-px opacity-50" />
        <div className="text-primary flex justify-between text-xl font-bold leading-6 tracking-wide">
          <h4>Order total</h4>
          <span>{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
        </div>
      </div>
    </div>
  );
};
