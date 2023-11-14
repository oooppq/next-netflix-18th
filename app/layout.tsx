import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/common/NavBar';

export const metadata: Metadata = {
  title: 'sniff-netflix',
  description: 'netflix clone project',
  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
