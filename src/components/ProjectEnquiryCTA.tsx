"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import ProjectEnquiryModal from "@/components/ProjectEnquiryModal";

export default function ProjectEnquiryCTA({ service, children = "Discuss a project", className = "route-link route-link-primary" }: { service: string; children?: ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);
  return <><button type="button" className={className} onClick={() => setOpen(true)}>{children} <span aria-hidden="true">↗</span></button><ProjectEnquiryModal open={open} onClose={() => setOpen(false)} defaultService={service} /></>;
}
