"use client";

import { useCallback, useState } from "react";
import type { ReactNode } from "react";
import posthog from "posthog-js";
import ProjectEnquiryModal from "@/components/ProjectEnquiryModal";

export default function ProjectEnquiryCTA({ service, children = "Let’s talk through your project", className = "route-link route-link-primary", source }: { service: string; children?: ReactNode; className?: string; source?: string }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const show = useCallback(() => {
    if (posthog.__loaded) posthog.capture("project_enquiry_modal_opened", {
      service,
      source_page: typeof window !== "undefined" ? window.location.pathname : "unknown",
      source: source ?? "contextual_cta",
    });
    setOpen(true);
  }, [service, source]);
  return <><button type="button" className={className} onClick={show}>{children} <span aria-hidden="true">↗</span></button><ProjectEnquiryModal open={open} onClose={close} defaultService={service} source={source ?? "contextual_cta"} /></>;
}
