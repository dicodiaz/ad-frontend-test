import Link from 'next/link';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-10">
      <nav className="flex justify-between bg-[#EEEEEE] px-6 py-5 text-[#585660] md:px-20 xl:px-32">
        <Link href="/" className="text-2xl leading-6 tracking-wide" aria-label="Go to home">
          GamerShop
        </Link>
        <Link href="/cart" aria-label="Go to cart">
          <HiOutlineShoppingCart className="size-6" />
        </Link>
      </nav>
    </header>
  );
};
