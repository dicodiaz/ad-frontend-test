import { ImSpinner2 } from 'react-icons/im';

export const CatalogFallback: React.FC = () => {
  return (
    <div className="flex justify-center py-8 md:py-10 xl:py-12">
      <ImSpinner2 className="size-6 animate-spin" />
    </div>
  );
};
