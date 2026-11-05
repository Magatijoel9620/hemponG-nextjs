import type { Metadata } from "next";
import LegalDocument from "../legal-document";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms that apply to use of the Hempon Group website and catalogue.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use | Hempon Group",
    description: "Review the terms that apply to using the Hempon Group website and product catalogue.",
    url: "https://www.hempongroup.co.ke/terms",
    siteName: "Hempon Group",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use | Hempon Group",
    description: "Review the terms that apply to using the Hempon Group website and product catalogue.",
  },
};

export default function TermsPage() {
  return <LegalDocument fileName="terms.md" />;
}
