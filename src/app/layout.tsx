import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ScrollUp } from '@/components/landing/ScrollUp';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Hempon Group | Websites, Apps & Digital Business Systems in Kenya',
  icons: {
    icon: "/favicon-v2.ico",
    shortcut: "/favicon-v2.ico",
    //apple: "/apple-touch-icon.png", // optional if you add it
  },
  description: 'Hempon Group designs and develops websites, mobile applications, business systems and automation solutions for businesses in Kenya and beyond.',
 openGraph: {
  title: "Hempon Group | Websites, Apps & Business Solutions",
  description:
    "Modern websites, applications, automation tools and digital systems built to help businesses grow.",
  url: "https://hempon-group.vercel.app",
  siteName: "Hempon Group",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Hempon Group digital solutions and web development services",
    },
  ],
  locale: "en_KE",
  type: "website",
},
robots: {
  index: true,
  follow: true,
},
keywords: [
  "web development Kenya",
  "websites Mombasa",
  "mobile app development Kenya",
  "business systems",
  "automation Kenya",
  "Hempon Group",
],
  
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Script
            id="hempon-organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Hempon Group",
                url: "https://hempon-group.vercel.app",
                email: "hempongroup@gmail.com",
                telephone: "+254738219953",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Mombasa",
                  addressCountry: "KE",
                },
                sameAs: [
                  "https://www.instagram.com/hempongroup/",
                  "https://x.com/hempon_group",
                  "https://www.linkedin.com/in/joel-magati",
                ],
              }),
            }}
          />
          <Toaster />
          <ScrollUp />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
