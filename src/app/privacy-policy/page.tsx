import type { Metadata } from "next";
import LegalDocument from "../legal-document";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Hempon Group collects, uses, and protects personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <LegalDocument fileName="privacy.md" />;
}
