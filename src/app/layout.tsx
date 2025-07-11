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
      <body className="font-area">{children}</body>
    </html>
  );
}
