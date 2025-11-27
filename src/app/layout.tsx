import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ScrollUp } from '@/components/landing/ScrollUp';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'HEMPON GROUP',
  icons: {
    icon: "/favicon-v2.ico",
    shortcut: "/favicon-v2.ico",
    //apple: "/apple-touch-icon.png", // optional if you add it
  },
  description: 'HEMPON GROUP: We craft stunning, high-performance websites that elevate your brand and drive results. Your vision, our expertise—let\'s build the future of your business online.',
  openGraph: {
    title: 'HEMPON GROUP',
    description: 'Stunning, high-performance websites that elevate your brand.',
    url: 'https://hempongroup.co.ke',
    siteName: 'HEMPON GROUP',
    images: [
      {
        url: 'https://placehold.co/1200x630.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEMPON GROUP',
    description: 'Stunning, high-performance websites that elevate your brand.',
    images: ['https://placehold.co/1200x630.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ScrollUp />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
