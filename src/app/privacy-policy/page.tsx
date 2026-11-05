import type { Metadata } from "next";
import LegalDocument from "../legal-document";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Hempon Group collects, uses, and protects personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Hempon Group",
    description: "Read how Hempon Group collects, uses, and protects personal information.",
    url: "https://www.hempongroup.co.ke/privacy-policy",
    siteName: "Hempon Group",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Hempon Group",
    description: "Read how Hempon Group collects, uses, and protects personal information.",
  },
};

export default function PrivacyPolicyPage() {
  return <LegalDocument fileName="privacy.md" />;
}
