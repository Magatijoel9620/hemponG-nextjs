import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import MarketingPageAnalytics from "@/components/MarketingPageAnalytics";

const serviceLinks = [
  ["Websites", "/services/websites"],
  ["Business Systems", "/services/business-systems"],
  ["Mobile Apps", "/services/mobile-apps"],
  ["Automation", "/services/automation"],
  ["AI Experiences", "/services/ai-experiences"],
  ["Digital Products", "/services/digital-products"],
] as const;

export default function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="noise min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <MarketingPageAnalytics />
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
        <div className="nav-shell mx-auto flex max-w-[1440px] items-center justify-between gap-3 rounded-[24px] border border-white/[.1] bg-[#080b10]/90 px-3 py-2 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:rounded-full sm:px-5">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border border-white/[.12] bg-white/[.035]">
              <Image src="/assets/logo/logo_round.png" alt="Hempon Group" width={36} height={36} className="h-full w-full object-cover" />
            </span>
            <span className="truncate text-[10px] font-bold tracking-[.12em] sm:text-xs sm:tracking-[.18em]">HEMPON GROUP</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex">
            <details className="nav-dropdown group relative">
              <summary className="nav-link flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 text-xs text-white/65 transition hover:bg-white/[.06] hover:text-white">
                Services <span className="text-[9px] transition group-open:rotate-180">⌄</span>
              </summary>
              <div className="absolute left-0 top-full z-[80] mt-3 w-64 rounded-2xl border border-white/[.12] bg-[#0a0e14]/[.98] p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl">
                <Link href="/services" className="arrow-push block rounded-xl px-3 py-2.5 text-xs font-semibold text-[var(--accent)] transition hover:bg-white/[.05]">Explore all services <span aria-hidden="true">↗</span></Link>
                <div className="my-1 border-t border-white/[.08]" />
                {serviceLinks.map(([label, href]) => <Link key={href} href={href} className="block rounded-xl px-3 py-2.5 text-xs text-white/65 transition hover:bg-white/[.06] hover:text-white">{label}</Link>)}
              </div>
            </details>
            <Link href="/products" className="nav-link rounded-full px-3 py-2 text-xs text-white/65 transition hover:bg-white/[.06] hover:text-white">Products</Link>
            <Link href="/case-studies" className="nav-link rounded-full px-3 py-2 text-xs text-white/65 transition hover:bg-white/[.06] hover:text-white">Work</Link>
            <Link href="/industries" className="nav-link rounded-full px-3 py-2 text-xs text-white/65 transition hover:bg-white/[.06] hover:text-white">Industries</Link>
            <Link href="/insights" className="nav-link rounded-full px-3 py-2 text-xs text-white/65 transition hover:bg-white/[.06] hover:text-white">Insights</Link>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link href="/#contact" className="quiet-cta arrow-push rounded-full px-3.5 py-2.5 text-[11px] font-bold sm:px-4">Let’s talk <span aria-hidden="true">↗</span></Link>
            <details className="nav-mobile group relative lg:hidden">
              <summary aria-label="Open navigation menu" className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-white/[.12] bg-white/[.04] text-white/75 [&::-webkit-details-marker]:hidden">
                <span className="text-lg leading-none">☰</span>
              </summary>
              <nav aria-label="Mobile navigation" className="absolute right-0 top-[calc(100%+12px)] max-h-[min(76dvh,560px)] w-[min(88vw,360px)] overflow-y-auto overscroll-contain rounded-2xl border border-white/[.12] bg-[#090d13]/[.98] p-3 shadow-2xl shadow-black/50 backdrop-blur-2xl">
                <Link href="/" className="mobile-nav-link">Home</Link>
                <details className="mobile-nav-group group">
                  <summary className="mobile-nav-link flex cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">Services <span className="text-white/35 transition group-open:rotate-180">⌄</span></summary>
                  <div className="mb-2 ml-3 grid gap-1 border-l border-white/[.1] pl-3">
                    <Link href="/services" className="arrow-push mobile-nav-sub font-semibold text-[var(--accent)]">All services <span aria-hidden="true">↗</span></Link>
                    {serviceLinks.map(([label, href]) => <Link key={href} href={href} className="mobile-nav-sub">{label}</Link>)}
                  </div>
                </details>
                <Link href="/products" className="mobile-nav-link">Products</Link>
                <Link href="/case-studies" className="mobile-nav-link">Case studies</Link>
                <Link href="/industries" className="mobile-nav-link">Industries</Link>
                <Link href="/insights" className="mobile-nav-link">Insights</Link>
                <a href="https://portfolio.hempongroup.co.ke/projects" target="_blank" rel="noreferrer" className="arrow-push mobile-nav-link">Portfolio <span aria-hidden="true">↗</span></a>
              </nav>
            </details>
          </div>
        </div>
      </header>
      <main className="pt-24 sm:pt-28">{children}</main>
      <footer className="mt-24 border-t border-white/[.08] bg-[#080b0f] py-10 sm:mt-32">
        <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-xs font-bold tracking-[.16em]">HEMPON GROUP</p><p className="mt-2 text-xs text-white/38">Digital products, websites and business systems.</p></div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/48">
            <Link href="/" className="hover:text-white">Home</Link><Link href="/services" className="hover:text-white">Services</Link><Link href="/products" className="hover:text-white">Products</Link><Link href="/case-studies" className="hover:text-white">Case studies</Link><Link href="/industries" className="hover:text-white">Industries</Link><Link href="/insights" className="hover:text-white">Insights</Link><a href="https://portfolio.hempongroup.co.ke/projects" target="_blank" rel="noreferrer" className="arrow-push hover:text-white">Portfolio <span aria-hidden="true">↗</span></a><a href="mailto:hempongroup@gmail.com" className="hover:text-white">Email Hempon</a><Link href="/#contact" className="arrow-push text-xs text-white/48 transition hover:text-[var(--accent)]">Let’s talk <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
}
