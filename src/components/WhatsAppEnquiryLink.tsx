"use client";

import type { ReactNode } from "react";
import posthog from "posthog-js";

export default function WhatsAppEnquiryLink({ service, children = "Chat with us on WhatsApp", className = "route-link route-link-secondary", source }: { service: string; children?: ReactNode; className?: string; source?: string }) {
  const message = `Hi Hempon Group, I'm interested in ${service}. I'd like to discuss what could work for my business. Please guide me on the next step.`;
  const href = `https://wa.me/254738219953?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={() => {
        if (posthog.__loaded) posthog.capture("contextual_whatsapp_opened", {
          service,
          source_page: typeof window !== "undefined" ? window.location.pathname : source ?? "unknown",
          source,
        });
      }}
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
