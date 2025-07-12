import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center bg-[#404040] px-6 py-16">
      <Link href="/">
        <img src="ApplyDigitalLogo.svg" alt="Apply Digital Logo" />
      </Link>
    </footer>
  );
};
