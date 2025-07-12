import { Footer, Navbar } from '@/components';
import { CartProvider } from '@/context';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Apply Digital Test',
  description: 'Frontend development test for Apply Digital',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartProvider>
        <body className="font-area flex min-h-dvh flex-col">
          <Navbar />
          {children}
          <Footer />
        </body>
      </CartProvider>
    </html>
  );
}
