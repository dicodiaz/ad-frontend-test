import Link from 'next/link';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0">
      <nav className="flex justify-between bg-[#EEEEEE] px-6 py-5 text-[#585660]">
        <Link href="/" className="text-2xl leading-6">
          GamerShop
        </Link>
        <Link href="/cart">
          <HiOutlineShoppingCart className="size-6" />
        </Link>
      </nav>
    </header>
  );
};
