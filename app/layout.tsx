import type { Metadata } from 'next';
import 'crom-shared/theme.css';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
