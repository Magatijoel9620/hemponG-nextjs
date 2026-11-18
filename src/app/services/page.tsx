import type { Metadata } from "next";
import Link from "next/link";

import MarketingShell from "@/components/MarketingShell";
import ProjectEnquiryCTA from "@/components/ProjectEnquiryCTA";
import { services } from "@/lib/services";
export const metadata: Metadata = {
  title: "Website, Software & Digital Services in Kenya",
  description:
    "Explore Hempon Group services: website development, business systems, mobile apps, workflow automation, applied AI and digital product development.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <MarketingShell>
      <section className="section-shell py-12 sm:py-20">
        <p className="route-kicker">What we do · Services</p>
        <h1 className="display mt-5 max-w-5xl text-5xl leading-[.94] sm:text-6xl md:text-8xl">
          Digital work, <span className="text-white/25">built around</span> the
          business.
        </h1>
        <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          Explore the areas where we help businesses and organisations improve
          their digital presence, operations and products. Each service page
          explains where it fits and what a project can involve.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="route-card group p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="route-kicker">{s.eyebrow}</span>
              </div>
              <h2 className="display mt-12 text-3xl">{s.name}</h2>
              <p className="mt-3 min-h-[5.5rem] text-sm leading-6 text-white/50">
                {s.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[var(--accent)]">
                Explore service <span>↗</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="route-panel mt-8 flex flex-col gap-5 rounded-[26px] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="route-kicker">Not sure where to begin?</p>
            <h2 className="display mt-2 text-2xl sm:text-3xl">
              Tell us what you are trying to improve.
            </h2>
          </div>
          <ProjectEnquiryCTA
            service="Not sure yet"
            className="route-link route-link-primary shrink-0"
          >
            Talk it through
          </ProjectEnquiryCTA>
        </div>
      </section>
    </MarketingShell>
  );
}
