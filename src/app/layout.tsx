import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'May + Lovia',
  description: 'A cinematic proposal for Mommie.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
