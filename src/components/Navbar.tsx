import Link from 'next/link';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="flex justify-between bg-[#EEEEEE] px-6 py-5 text-[#585660]">
        <Link href="/" className="font-area text-2xl leading-6">
          GamerShop
        </Link>
        <Link href="/cart">
          <HiOutlineShoppingCart className="size-6" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
