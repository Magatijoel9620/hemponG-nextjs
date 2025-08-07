import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ScrollUp } from '@/components/landing/ScrollUp';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'HEMPON GROUP',
  description: 'Welcome to HEMPON GROUP – Your Website Creation Partner. We help you turn your website ideas into reality.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <ScrollUp />
        <Analytics />
      </body>
    </html>
  );
}
