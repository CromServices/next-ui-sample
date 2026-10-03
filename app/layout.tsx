import type { Metadata } from 'next';
import 'crom-shared/theme.css';
import { CROM_FAVICON_BASE } from './crom-logo';
import './globals.css';

export const metadata: Metadata = {
  title: 'Crom Services — Next.js UI sample',
  description:
    'Public Next.js App Router sample: finish-gap from stub chrome to a shipped StatusBadge.',
  icons: {
    icon: [
      { url: `${CROM_FAVICON_BASE}favicon.ico`, sizes: 'any' },
      { url: `${CROM_FAVICON_BASE}favicon.svg`, type: 'image/svg+xml' },
    ],
    apple: `${CROM_FAVICON_BASE}apple-touch-icon.png`,
  },
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
