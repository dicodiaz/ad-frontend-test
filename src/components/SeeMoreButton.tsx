'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export type SeeMoreButtonProps = {
  currentPage: number;
};

export const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({ currentPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSeeMore = () => {
    const params = new URLSearchParams(searchParams);
    const nextPage = currentPage + 1;
    params.set('page', nextPage.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="px-6">
      <button
        type="button"
        className="w-full rounded-lg bg-[#585660] py-4 text-sm leading-4 tracking-[0.5px] text-white"
        onClick={handleSeeMore}
      >
        SEE MORE
      </button>
    </div>
  );
};
