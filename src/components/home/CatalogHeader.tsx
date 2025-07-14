import { Suspense } from 'react';
import { GenreSelectSkeleton, GenreSelectWrapper } from '.';

export const CatalogHeader: React.FC = () => {
  return (
    <header className="flex flex-col gap-y-8 border-b border-[#EFEDF3] px-6 py-8 md:gap-y-10 md:px-20 md:py-10 xl:gap-y-12 xl:px-32 xl:py-12">
      <h1 className="text-2xl font-bold leading-7 tracking-wide text-[#3B3B3B] md:text-3xl xl:text-4xl">
        TOP SELLERS
      </h1>
      <label className="flex gap-x-6 py-4 text-xl leading-6 tracking-wide md:justify-end">
        <span className="font-bold">Genre</span>
        <div className="my-[1px] w-px bg-[#3B3B3B]" />
        <Suspense fallback={<GenreSelectSkeleton />}>
          <GenreSelectWrapper />
        </Suspense>
      </label>
    </header>
  );
};
