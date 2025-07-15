import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center bg-[#404040] px-6 py-16">
      <Link href="/" aria-label="Go to home">
        <Image src="ApplyDigitalLogo.svg" alt="Apply Digital Logo" width={171} height={45} />
      </Link>
    </footer>
  );
};
