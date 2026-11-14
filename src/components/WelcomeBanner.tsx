"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const STORAGE_KEY = "hempon:first-visit-welcome-dismissed:v2";

const pathways = [
  {
    number: "01",
    title: "Explore our digital solutions",
    description: "Websites, business systems, mobile apps and automation.",
    href: "#capabilities",
    symbol: "✳",
  },
  {
    number: "02",
    title: "See products and selected work",
    description: "Explore platforms and digital experiences built by Hempon.",
    href: "#work",
    symbol: "↗",
  },
  {
    number: "03",
    title: "Start a project conversation",
    description: "Tell us what your business needs help solving.",
    href: "#contact",
    symbol: "＋",
  },
];

export default function WelcomeBanner() {
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      if (
        window.localStorage.getItem(STORAGE_KEY) === "yes" ||
        window.sessionStorage.getItem(STORAGE_KEY) === "yes"
      ) {
        return;
      }
    } catch {
      // The welcome experience remains available when storage is restricted.
    }
    const timeout = window.setTimeout(() => setVisible(true), 450);
    return () => window.clearTimeout(timeout);
  }, []);

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "yes");
      window.sessionStorage.setItem(STORAGE_KEY, "yes");
    } catch {
      // Dismissal still applies to the current render.
    }
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        dismiss();
        return;
      }
      if (event.key !== "Tab") return;

      const dialog = document.getElementById("hempon-welcome-dialog");
      if (!dialog) return;
      if (!dialog.contains(document.activeElement)) {
        event.preventDefault();
        closeButtonRef.current?.focus();
        return;
      }
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocusedRef.current?.focus?.();
    };
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[130] flex items-end justify-center bg-[#020408]/75 p-3 backdrop-blur-md sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <section
        id="hempon-welcome-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="hempon-welcome-title"
        aria-describedby="hempon-welcome-description"
        className="welcome-dialog relative flex max-h-[min(78dvh,680px)] w-full max-w-2xl flex-col overflow-hidden rounded-[26px] border border-white/[.13] bg-[#0b1017] shadow-[0_30px_120px_rgba(0,0,0,.65)] sm:max-h-[min(88dvh,780px)] sm:rounded-[32px]"
      >
        <div className="shrink-0 border-b border-white/[.08] bg-[radial-gradient(ellipse_at_top_left,rgba(169,200,117,.11),transparent_65%)] px-5 pb-5 pt-6 sm:px-8 sm:pb-7 sm:pt-8">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={dismiss}
            aria-label="Close welcome message"
            className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-white/[.12] bg-white/[.035] text-white/55 transition hover:border-white/25 hover:bg-white/[.09] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:right-6 sm:top-6"
          >
            <span aria-hidden="true" className="text-xl leading-none">×</span>
          </button>
        <div className="mb-4 flex items-center gap-3 pr-10 sm:mb-5">
  <Image
    src="/assets/logo/logo_round.png"
    alt="Hempon Group"
    width={64}
    height={64}
    priority
    className="size-11 shrink-0 rounded-xl border border-white/10 object-cover shadow-lg sm:size-14 sm:rounded-2xl"
  />

  <p className="mono text-[9px] font-semibold uppercase tracking-[.2em] text-[var(--accent)] sm:text-[10px]">
    Hempon Group · Practical digital solutions
  </p>
</div>
          <h2
            id="hempon-welcome-title"
            className="display max-w-xl text-[clamp(1.8rem,5vw,3.15rem)] leading-[.98] tracking-[-.06em]"
          >
            Welcome. What are you looking to build?
          </h2>
          <p
            id="hempon-welcome-description"
            className="mt-3 max-w-xl text-xs leading-6 text-white/52 sm:mt-4 sm:text-sm sm:leading-7"
          >
            We help businesses turn real operational challenges into useful
            websites, software and digital experiences. Choose a starting point
            or simply continue exploring.
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3 sm:px-6 sm:py-5">
          <p className="mono mb-2 px-2 text-[9px] font-semibold uppercase tracking-[.18em] text-white/32 sm:mb-3 sm:text-[10px]">
            Find your way around
          </p>
          <nav aria-label="Welcome quick links" className="grid gap-2">
            {pathways.map((pathway) => (
              <a
                key={pathway.number}
                href={pathway.href}
                onClick={dismiss}
                className="group flex min-h-[66px] items-center gap-3 rounded-2xl border border-white/[.09] bg-white/[.025] px-3 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/35 hover:bg-white/[.055] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:min-h-[78px] sm:gap-4 sm:px-4"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/[.08] text-base text-[var(--accent)] sm:size-11">
                  {pathway.symbol}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-semibold text-white/88 sm:text-sm">
                    {pathway.title}
                  </span>
                  <span className="mt-1 block text-[11px] leading-4 text-white/42 sm:text-xs sm:leading-5">
                    {pathway.description}
                  </span>
                </span>
                <span className="mono hidden text-[9px] text-white/25 sm:block">
                  {pathway.number}
                </span>
                <span aria-hidden="true" className="text-sm text-white/30 transition group-hover:translate-x-1 group-hover:text-[var(--accent)]">↗</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="shrink-0 border-t border-white/[.08] bg-[#090d13] px-5 py-3.5 sm:flex sm:items-center sm:justify-between sm:px-8 sm:py-4">
          <p className="hidden text-[11px] text-white/32 sm:block">
            You can explore the website at any time.
          </p>
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-xs font-bold text-[#080b10] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:w-auto sm:min-w-48"
          >
            Continue to website <span aria-hidden="true">↗</span>
          </button>
        </div>
      </section>
    </div>
  );
}
