import type { Metadata } from 'next';
import { headers } from 'next/headers';

import './globals.css';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'sniff-netflix',
  description: 'netflix clone project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = headers().get('next-pathname') as string;

  return (
    <html lang="en">
      <body>
        {pathname !== '/' ? <NavBar /> : null}

        {children}
      </body>
    </html>
  );
}
