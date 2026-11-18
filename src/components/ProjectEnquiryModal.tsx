"use client";

import { useEffect, useRef } from "react";
import ProjectEnquiryForm from "@/components/ProjectEnquiryForm";

export default function ProjectEnquiryModal({ open, onClose, defaultService, source }: { open: boolean; onClose: () => void; defaultService?: string; source?: string }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 30);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const dialog = document.getElementById("project-enquiry-modal");
        const focusable = dialog?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (!focusable?.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  return <div className="fixed inset-0 z-[120] flex items-end justify-center bg-black/75 p-0 backdrop-blur-md sm:items-center sm:p-5" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section id="project-enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="project-enquiry-modal-title" className="relative max-h-[94dvh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-t-[26px] border border-white/[.12] bg-[#080c12] p-4 shadow-[0_24px_100px_rgba(0,0,0,.65)] sm:rounded-[28px] sm:p-7">
      <div className="mb-5 flex items-start justify-between gap-4"><div><div className="mono text-[9px] uppercase tracking-[.22em] text-[var(--accent)]">A good place to begin</div><h2 id="project-enquiry-modal-title" className="display mt-2 text-2xl sm:text-3xl">Let’s talk about your project.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-white/55">Share a few details and we’ll help you work out the next step.</p></div>
        <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close project enquiry" className="magnetic-control inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-xl text-white/70 transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)]">×</button></div>
      <ProjectEnquiryForm defaultService={defaultService} source={source} />
    </section>
  </div>;
}
