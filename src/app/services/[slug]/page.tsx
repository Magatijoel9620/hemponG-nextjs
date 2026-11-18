import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarketingShell from "@/components/MarketingShell";
import ProjectEnquiryCTA from "@/components/ProjectEnquiryCTA";
import WhatsAppEnquiryLink from "@/components/WhatsAppEnquiryLink";
import { getService, services } from "@/lib/services";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} | ${s.eyebrow} in Kenya`,
    description: s.summary,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.name} | Hempon Group`, description: s.summary },
  };
}
export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  return (
    <MarketingShell>
      <section className="section-shell py-10 sm:py-16">
        <Link
          href="/services"
          className="text-xs text-white/45 transition hover:text-[var(--accent)]"
        >
          ← All services
        </Link>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="route-kicker">{s.eyebrow} · Hempon services</p>
            <h1 className="display mt-5 max-w-4xl text-5xl leading-[.94] sm:text-6xl md:text-7xl">
              {s.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              {s.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ProjectEnquiryCTA
                service={s.name}
                className="route-link route-link-primary"
              >
                Let’s talk about your needs
              </ProjectEnquiryCTA>
              <WhatsAppEnquiryLink service={s.name} source="service_page">
                Ask us on WhatsApp
              </WhatsAppEnquiryLink>
              <Link
                href="/products"
                className="route-link route-link-secondary"
              >
                Explore our products
              </Link>
            </div>
          </div>
          <aside className="route-panel rounded-[26px] p-6 sm:p-8">
            <p className="route-kicker">A good fit when</p>
            <p className="mt-4 text-sm leading-7 text-white/68">{s.fit}</p>
          </aside>
        </div>
        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2">
          <div className="route-panel rounded-[26px] p-6 sm:p-8">
            <p className="route-kicker">What this should improve</p>
            <h2 className="display mt-3 text-3xl">Useful outcomes.</h2>
            <ul className="mt-6 space-y-4">
              {s.outcomes.map((x) => (
                <li
                  key={x}
                  className="flex gap-3 text-sm leading-6 text-white/65"
                >
                  <span className="text-[var(--accent)]">✳</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="route-panel rounded-[26px] p-6 sm:p-8">
            <p className="route-kicker">What a project can include</p>
            <h2 className="display mt-3 text-3xl">Possible deliverables.</h2>
            <ul className="mt-6 space-y-4">
              {s.deliverables.map((x) => (
                <li
                  key={x}
                  className="flex gap-3 text-sm leading-6 text-white/65"
                >
                  <span className="text-[var(--accent)]">—</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 rounded-[26px] border border-white/[.08] p-6 sm:p-8">
          <p className="route-kicker">How we approach it</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.approach.map((x) => (
              <div key={x} className="border-t border-white/[.12] pt-4">
                <p className="mt-3 text-sm leading-6 text-white/65">{x}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="route-kicker">Related work</p>
              <h2 className="display mt-2 text-3xl sm:text-4xl">
                Examples from the workbench.
              </h2>
            </div>
            <a
              href="https://portfolio.hempongroup.co.ke/projects"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-[var(--accent)]"
            >
              Browse project archive ↗
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {s.related.map((x) => {
              const study = x.toLowerCase().includes("farmora")
                ? "farmora"
                : x.toLowerCase().includes("landlord")
                  ? "landlord-ledger"
                  : x.toLowerCase().includes("invoice")
                    ? "invoiceeasy"
                    : x.toLowerCase().includes("finai")
                      ? "finai"
                      : x.toLowerCase().includes("kanyi")
                        ? "kanyi-advocates"
                        : x.toLowerCase().includes("google")
                          ? "google-sheets-automation"
                          : null;
              return study ? (
                <Link
                  key={x}
                  href={`/case-studies/${study}`}
                  className="rounded-full border border-white/[.1] bg-white/[.025] px-4 py-2.5 text-xs text-white/65 transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                >
                  {x} ↗
                </Link>
              ) : (
                <span
                  key={x}
                  className="rounded-full border border-white/[.1] bg-white/[.025] px-4 py-2.5 text-xs text-white/65"
                >
                  {x}
                </span>
              );
            })}
          </div>
        </div>
        <div className="route-panel mt-14 flex flex-col gap-5 rounded-[26px] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="route-kicker">Start with the problem</p>
            <h2 className="display mt-2 text-2xl sm:text-3xl">
              Let’s work out what makes sense.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/48">
              Share what you are trying to achieve. We can help shape a sensible
              next step.
            </p>
          </div>
          <ProjectEnquiryCTA
            service={s.name}
            className="route-link route-link-primary shrink-0"
          >
            Let’s talk through your needs
          </ProjectEnquiryCTA>
        </div>
      </section>
    </MarketingShell>
  );
}
