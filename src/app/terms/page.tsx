import type { Metadata } from "next";
import LegalDocument from "../legal-document";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms that apply to use of the Hempon Group website and catalogue.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <LegalDocument fileName="terms.md" />;
}
