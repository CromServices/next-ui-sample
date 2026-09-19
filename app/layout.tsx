import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Crom Services — Next.js UI sample',
  description:
    'Public Next.js App Router sample: finish-gap from stub chrome to a shipped StatusBadge.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
