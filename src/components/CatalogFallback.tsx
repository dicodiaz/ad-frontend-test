import { ImSpinner2 } from 'react-icons/im';

export const CatalogFallback: React.FC = () => {
  return (
    <div className="flex justify-center px-6">
      <ImSpinner2 className="size-6 animate-spin" />
    </div>
  );
};
