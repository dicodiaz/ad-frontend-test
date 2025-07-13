import { getDataFromServer } from '@/services';
import { Catalog } from '.';

export type CatalogWrapperProps = {
  genre?: string;
};

export const CatalogWrapper: React.FC<CatalogWrapperProps> = async ({ genre }) => {
  const data = await getDataFromServer({ genre });

  return <Catalog data={data} />;
};
