import type { Metadata, Viewport } from "next";

import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";

const siteUrl = "https://www.hempongroup.co.ke";
const description =
  "Hempon Group builds professional websites, custom business software, mobile applications, e-commerce experiences and workflow automation for businesses in Kenya and beyond.";

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: "Hempon Group",
  authors: [{ name: "Hempon Group", url: siteUrl }],
  creator: "Hempon Group",
  publisher: "Hempon Group",
  category: "Technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },

  icons: {
    icon: [
      { url: "/favicon-v2.ico" },
      { url: "/assets/logo/logo_round.png", type: "image/png" },
    ],
    apple: [{ url: "/assets/logo/logo_round.png", type: "image/png" }],
  },

  title: {
    default: "Web Design & Software Development in Kenya | Hempon Group",
    template: "%s | Hempon Group",
  },

  description,

  // Next.js emits this metadata for crawlers; Google does not use meta keywords
  // as a ranking signal. The same topics are also reflected in visible page copy.
  keywords: [
    "Hempon Group",
    "web design Kenya",
    "website development Kenya",
    "software development company Kenya",
    "custom software development",
    "mobile app development Kenya",
    "business software Kenya",
    "e-commerce website development",
    "business process automation",
  ],

  alternates: {
    canonical: "/",
    languages: {
      "en-KE": "/",
    },
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
        width: 1729,
        height: 910,
        type: "image/png",
        alt: "Hempon Group — Websites, Software and Digital Products",
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
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
  },
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
        "@id": organizationId,
        name: "Hempon Group",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/assets/logo/logo_round.png`,
        },
        image: `${siteUrl}/og-image.png`,
        description,
        email: "hempongroup@gmail.com",
        telephone: "+254738219953",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mombasa",
          addressCountry: "KE",
        },
        areaServed: {
          "@type": "Country",
          name: "Kenya",
        },
        knowsAbout: [
          "Website design and development",
          "Custom software development",
          "Mobile application development",
          "E-commerce development",
          "Business process automation",
          "Digital product development",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+254738219953",
          contactType: "sales",
          areaServed: "KE",
                  },
        sameAs: [
          "https://www.instagram.com/hempongroup/",
          "https://www.linkedin.com/in/joel-magati",
          "https://x.com/hempon_group",
          "https://www.tiktok.com/@hempon.digital.so",
          "https://www.facebook.com/share/1CYpdPrizj/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: "Hempon Group",
        description,
        publisher: {
          "@id": organizationId,
        },
        inLanguage: "en-KE",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Web Design & Software Development in Kenya | Hempon Group",
        description,
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": organizationId,
        },
        inLanguage: "en-KE",
      },
    ],
  };

  return (
    <html lang="en-KE" suppressHydrationWarning>
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
