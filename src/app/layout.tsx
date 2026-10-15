import type { Metadata, Viewport } from "next";

import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";

const siteUrl = "https://www.hempongroup.co.ke";
const description =
  "Hempon Group helps businesses in Kenya grow with conversion-focused websites, custom software, mobile apps, e-commerce and workflow automation. Get a project quote.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  icons: {
    icon: "/favicon-v2.ico",
  },

  title: {
    default: "Web Design & Software Development in Kenya | Hempon Group",
    template: "%s | Hempon Group",
  },

  description,

  keywords: [
    "Hempon Group",
    "web design Kenya",
    "website development Kenya",
    "custom software development Kenya",
    "mobile app development Kenya",
    "e-commerce websites Kenya",
    "business automation Kenya",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Web Design & Software Development in Kenya | Hempon Group",

    description,

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

    title: "Web Design & Software Development in Kenya | Hempon Group",

    description,

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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Hempon Group",
        url: siteUrl,
        logo: `${siteUrl}/assets/logo/logo.svg`,
        description,
        email: "hempongroup@gmail.com",
        telephone: "+254738219953",
        areaServed: {
          "@type": "Country",
          name: "Kenya",
        },
        sameAs: [
          "https://www.instagram.com/hempongroup/",
          "https://x.com/hempon_group",
          "https://www.tiktok.com/@hempon.digital.so",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Hempon Group",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-KE",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <SmoothScroll />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}