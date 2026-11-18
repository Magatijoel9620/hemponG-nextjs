import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import ProjectEnquiryCTA from "@/components/ProjectEnquiryCTA";

export default function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="noise min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
        <div className="nav-shell mx-auto flex max-w-[1440px] items-center justify-between gap-3 rounded-[24px] border border-white/[.1] bg-[#080b10]/85 px-3 py-2 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:rounded-full sm:px-5">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border border-white/[.12] bg-white/[.035]">
              <Image src="/assets/logo/logo_round.png" alt="Hempon Group" width={36} height={36} className="h-full w-full object-cover" />
            </span>
            <span className="truncate text-[10px] font-bold tracking-[.12em] sm:text-xs sm:tracking-[.18em]">HEMPON GROUP</span>
          </Link>
          <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-2">
            <Link href="/services" className="hidden rounded-full px-3 py-2 text-xs text-white/55 transition hover:bg-white/[.06] hover:text-white sm:inline-flex">Services</Link>
            <Link href="/products" className="rounded-full px-3 py-2 text-xs text-white/65 transition hover:bg-white/[.06] hover:text-white">Products</Link>
            <Link href="/#work" className="hidden rounded-full px-3 py-2 text-xs text-white/55 transition hover:bg-white/[.06] hover:text-white sm:inline-flex">Work</Link>
            <ProjectEnquiryCTA service="Not sure yet" className="quiet-cta rounded-full px-3.5 py-2.5 text-[11px] font-bold sm:px-4">Start a project</ProjectEnquiryCTA>
          </nav>
        </div>
      </header>
      <main className="pt-24 sm:pt-28">{children}</main>
      <footer className="mt-24 border-t border-white/[.08] bg-[#080b0f] py-10 sm:mt-32">
        <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-xs font-bold tracking-[.16em]">HEMPON GROUP</p><p className="mt-2 text-xs text-white/38">Digital products, websites and business systems.</p></div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/48"><Link href="/" className="hover:text-white">Home</Link><Link href="/services" className="hover:text-white">Services</Link><Link href="/products" className="hover:text-white">Products</Link><Link href="/case-studies" className="hover:text-white">Case studies</Link><Link href="/industries" className="hover:text-white">Industries</Link><Link href="/insights" className="hover:text-white">Insights</Link><a href="https://portfolio.hempongroup.co.ke/projects" target="_blank" rel="noreferrer" className="hover:text-white">Portfolio ↗</a><a href="mailto:hempongroup@gmail.com" className="hover:text-white">Email Hempon</a><ProjectEnquiryCTA service="Not sure yet" className="text-xs text-white/48 transition hover:text-[var(--accent)]">Start a project</ProjectEnquiryCTA></div>
        </div>
      </footer>
    </div>
  );
}
