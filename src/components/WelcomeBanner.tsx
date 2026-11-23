/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "hempon:first-visit-welcome-dismissed:v2";

const destinations = [
  {
    eyebrow: "Design · Engineering · Operations",
    title: "Digital Solutions",
    description:
      "Websites, business software, mobile experiences and practical digital systems built around the way businesses work.",
    href: "#capabilities",
    icon: "✳",
    action: "Explore what we do",
  },
  {
    eyebrow: "Platforms · Products · Selected work",
    title: "Our Products",
    description:
      "Take a look at the useful platforms and digital experiences we've created to solve real-world business needs.",
    href: "#work",
    icon: "◈",
    action: "See what we've built",
  },
  {
    eyebrow: "Projects · Case studies · Our work",
    title: "Portfolio",
    description:
      "Explore our projects, completed solutions and the work we've delivered for businesses.",
    href: "https://portfolio.hempongroup.co.ke",
    icon: "▧",
    action: "Explore our portfolio",
    external: true,
  },
  {
    eyebrow: "Apps · Releases · Downloads",
    title: "Downloads",
    description:
      "Access our available applications, product releases and installation packages.",
    href: "https://downloads.hempongroup.co.ke",
    icon: "↓",
    action: "Browse downloads",
    external: true,
  },
  {
    eyebrow: "Your idea · Our next build",
    title: "Start a Project",
    description:
      "Have an idea or a business challenge? We'd love to hear about it and explore how we can help.",
    href: "#contact",
    icon: "↗",
    action: "Let's talk about it",
  },
];

export default function WelcomeBanner() {
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
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

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousHtmlOverscroll = html.style.overscrollBehavior;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyOverscroll = body.style.overscrollBehavior;

    // Lock both scrolling roots. Locking only body can leave the document
    // element scrollable in some browsers, allowing wheel input to reach the page.
    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";

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
      html.style.overflow = previousHtmlOverflow;
      html.style.overscrollBehavior = previousHtmlOverscroll;
      body.style.overflow = previousBodyOverflow;
      body.style.overscrollBehavior = previousBodyOverscroll;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocusedRef.current?.focus?.();
    };
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <div
      className="
        fixed inset-0 z-[130]
        flex items-start justify-center
        overflow-y-auto overscroll-contain
        bg-[#020408]/80
        px-3
        pt-[max(0.75rem,env(safe-area-inset-top))]
        pb-[max(0.75rem,env(safe-area-inset-bottom))]
        backdrop-blur-md
        sm:items-center sm:p-6
      "
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
        className="
          welcome-dialog relative my-auto
          flex w-full max-w-5xl flex-col
          h-[calc(100dvh-1.5rem)]
          max-h-[calc(100dvh-1.5rem)]
          overflow-hidden
          rounded-[20px]
          border border-white/[.13]
          bg-[#0b1017]
          shadow-[0_30px_120px_rgba(0,0,0,.68)]
          sm:h-[calc(100dvh-3rem)]
          sm:max-h-[calc(100dvh-3rem)]
          sm:rounded-[30px]
        "
      >
        {/* Header */}
        <div
          className="
            relative shrink-0
            border-b border-white/[.08]
            bg-[radial-gradient(ellipse_at_top_left,rgba(169,200,117,.13),transparent_58%)]
            px-4 pb-4 pt-4
            sm:px-8 sm:pb-7 sm:pt-7
            lg:px-10
          "
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={dismiss}
            aria-label="Close welcome message"
            className="
              absolute right-3 top-3 z-10
              grid size-9 place-items-center
              rounded-full border border-white/[.12]
              bg-white/[.035] text-white/60
              transition duration-200
              hover:rotate-90 hover:border-white/25
              hover:bg-white/[.09] hover:text-white
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-[var(--accent)]
              sm:right-6 sm:top-6 sm:size-10
            "
          >
            <span aria-hidden="true" className="text-xl leading-none">
              ×
            </span>
          </button>

          <div className="flex items-center gap-3 pr-11 sm:gap-4 sm:pr-12">
            <Image
              src="/assets/logo/logo_round.png"
              alt="Hempon Group"
              width={64}
              height={64}
              priority
              className="
                size-10 shrink-0 rounded-xl
                border border-white/10 object-cover shadow-lg
                sm:size-14 sm:rounded-2xl
              "
            />

            <div>
              <p className="mono text-[9px] font-semibold uppercase tracking-[.2em] text-[var(--accent)] sm:text-[10px]">
                Hempon Group
              </p>
              <p className="mt-1 text-[10px] text-white/45 sm:text-xs">
                Practical digital solutions
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-2 sm:mt-7 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-6">
            <div>
              <p className="mono mb-2 text-[8px] font-semibold uppercase tracking-[.2em] text-white/40 sm:mb-3 sm:text-[10px]">
                We&apos;re glad you're here
              </p>

              <h2
                id="hempon-welcome-title"
                className="
                  display max-w-3xl
                  text-[clamp(1.9rem,5vw,3.7rem)]
                  leading-[.98] tracking-[-.06em]
                "
              >
                Welcome.{" "}
                <span className="text-[var(--accent)]">
                  Let's make things happen.
                </span>
              </h2>
            </div>

            <p
              id="hempon-welcome-description"
              className="max-w-md text-[11px] leading-5 text-white/55 sm:text-sm sm:leading-7"
            >
              Whether you're exploring our work, looking for a digital solution,
              or have an idea to share, you're in the right place.
            </p>
          </div>
        </div>

        {/* Scrollable destination area: independently scrolls on all screen sizes. */}
        <div
          ref={scrollAreaRef}
          onWheel={(event) => event.stopPropagation()}
          onTouchMove={(event) => event.stopPropagation()}
          className="
            min-h-0 flex-1
            overflow-x-hidden overflow-y-auto overscroll-y-contain
            [scrollbar-gutter:stable]
            [touch-action:pan-y]
            px-4 py-4
            sm:px-6 sm:py-6
            lg:px-8 lg:py-7
          "
        >
          <div className="mb-3 flex items-center justify-between px-1 sm:mb-4">
            <p className="mono text-[9px] font-semibold uppercase tracking-[.19em] text-white/40 sm:text-[10px]">
              What would you like to explore?
            </p>
            <span className="mono text-[9px] text-white/30">Choose a direction</span>
          </div>

          <nav
            aria-label="Welcome destinations"
            className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-3 xl:grid-cols-3"
          >
            {destinations.map((destination, index) => (
              <a
                key={destination.title}
                href={destination.href}
                target={destination.external ? "_blank" : undefined}
                rel={destination.external ? "noopener noreferrer" : undefined}
                onClick={dismiss}
                className="
                  group relative flex min-h-[145px] flex-col
                  overflow-hidden rounded-[18px]
                  border border-white/[.10]
                  bg-[#101720] p-4
                  outline-none transition duration-300
                  hover:-translate-y-1
                  hover:border-[var(--accent)]/45
                  hover:bg-[#141e28]
                  focus-visible:ring-2
                  focus-visible:ring-[var(--accent)]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#0b1017]
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                  sm:min-h-[205px] sm:rounded-[20px] sm:p-6
                "
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute -right-8 -top-10
                    size-36 rounded-full
                    border border-[var(--accent)]/[.10]
                    transition duration-500
                    group-hover:scale-125
                    group-hover:border-[var(--accent)]/[.22]
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute -right-2 -top-4
                    size-24 rounded-full border border-white/[.06]
                    transition duration-500
                    group-hover:translate-x-1
                    group-hover:translate-y-1
                  "
                />

                <span className="relative flex items-center justify-between">
                  <span
                    className="
                      grid size-9 place-items-center rounded-xl
                      border border-[var(--accent)]/25
                      bg-[var(--accent)]/[.08]
                      text-lg text-[var(--accent)]
                      transition duration-300
                      group-hover:rotate-6 group-hover:scale-105
                      sm:size-10
                    "
                  >
                    {destination.icon}
                  </span>
                </span>

                <span className="relative mt-4 block sm:mt-8">
                  <span className="mono block text-[8px] uppercase tracking-[.15em] text-[var(--accent)]/80 sm:text-[9px]">
                    {destination.eyebrow}
                  </span>

                  <span className="display mt-2 block text-[1.4rem] leading-none tracking-[-.05em] text-white/90 sm:text-[1.8rem]">
                    {destination.title}
                  </span>

                  <span className="mt-2 block max-w-sm text-[10px] leading-[1.6] text-white/50 sm:mt-3 sm:text-xs sm:leading-5">
                    {destination.description}
                  </span>
                </span>

                <span className="relative mt-auto flex items-center justify-between pt-3 sm:pt-5">
                  <span className="text-[9px] font-bold uppercase tracking-[.13em] text-white/70 transition-colors group-hover:text-[var(--accent)] sm:text-[10px]">
                    {destination.action}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      grid size-8 place-items-center rounded-full
                      border border-white/[.12]
                      text-sm text-white/60
                      transition duration-300
                      group-hover:translate-x-1
                      group-hover:border-[var(--accent)]/40
                      group-hover:bg-[var(--accent)]
                      group-hover:text-[#0b1017]
                    "
                  >
                    ↗
                  </span>
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Persistent footer */}
        <div
          className="
            flex shrink-0 flex-col gap-2
            border-t border-white/[.08]
            bg-[#090d13]
            px-4 py-3
            sm:flex-row sm:items-center
            sm:justify-between sm:gap-3
            sm:px-8 sm:py-4
          "
        >
          <p className="text-[9px] leading-4 text-white/40 sm:text-[11px] sm:leading-5">
            Not sure where to start? Feel free to browse the website.
          </p>

          <button
            type="button"
            onClick={dismiss}
            className="
              inline-flex min-h-10 w-full shrink-0
              items-center justify-center gap-2
              rounded-full bg-[var(--accent)]
              px-6 py-2.5
              text-[9px] font-bold uppercase tracking-[.12em]
              text-[#080b10]
              transition duration-200
              hover:-translate-y-0.5 hover:brightness-110
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-[var(--accent)]
              motion-reduce:transform-none
              sm:min-h-11 sm:w-auto sm:py-3 sm:text-[10px]
            "
          >
            Continue to website{" "}
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </section>
    </div>
  );
}
