import type { Metadata, Viewport } from "next";

import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";

const siteUrl = "https://www.hempongroup.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  icons: {
    icon: "/favicon-v2.ico",
  },

  title: {
    default: "Hempon Group — Digital Systems, Websites & Experiences",
    template: "%s | Hempon Group",
  },

  description:
    "Hempon Group designs and builds high-performance websites, business software, mobile applications, automation and digital systems.",

  keywords: [
    "Hempon Group",
    "web development",
    "business systems",
    "Flutter",
    "Next.js",
    "Supabase",
    "Kenya",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Hempon Group — Digital Systems, Websites & Experiences",

    description:
      "Digital products engineered around real business needs.",

    url: siteUrl,

    siteName: "Hempon Group",

    type: "website",

    locale: "en_KE",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hempon Group — Digital Systems, Websites & Experiences",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Hempon Group",

    description:
      "Digital products engineered around real business needs.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07090d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SmoothScroll />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}