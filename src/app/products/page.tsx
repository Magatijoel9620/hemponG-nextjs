import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MarketingShell from "@/components/MarketingShell";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Digital Products | Hempon Group",
  description:
    "Explore Hempon products for farm operations, property management, invoicing, business finance and personal productivity.",
  alternates: { canonical: "/products" },
};
export default function ProductsPage() {
  return (
    <MarketingShell>
      <section className="section-shell py-12 sm:py-20">
        <p className="route-kicker">Hempon products · Product centre</p>
        <h1 className="display mt-5 max-w-5xl text-5xl leading-[.94] sm:text-6xl md:text-8xl">
          Tools for the work{" "}
          <span className="text-white/25">businesses do.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          A growing collection of practical digital products built around real
          operational needs. Explore what each product is designed to help with,
          then visit its product page for access, downloads and guidance.
        </p>
        <div className="mt-10 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/[.1] px-3 py-2 text-[10px] text-white/45">
            Business operations
          </span>
          <span className="rounded-full border border-white/[.1] px-3 py-2 text-[10px] text-white/45">
            Finance & invoicing
          </span>
          <span className="rounded-full border border-white/[.1] px-3 py-2 text-[10px] text-white/45">
            Productivity
          </span>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((p, i) => (
            <article key={p.slug} className="route-card">
              <Link href={`/products/${p.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111722]">
                  <Image
                    src={p.image}
                    alt={`${p.name} product preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[9px] text-white/75 backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="route-kicker">{p.platform}</p>
                  <h2 className="display mt-2 text-3xl">{p.name}</h2>
                  <p className="mt-3 min-h-[5.5rem] text-sm leading-6 text-white/52">
                    {p.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[var(--accent)]">
                    Explore product <span>↗</span>
                  </span>
                </div>
              </Link>
              <div className="flex flex-wrap gap-3 border-t border-white/[.08] px-5 py-4 sm:px-6">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-semibold text-white/65 hover:text-white"
                >
                  Open product ↗
                </a>
                <a
                  href={p.download}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-semibold text-white/40 hover:text-[var(--accent)]"
                >
                  Access & downloads ↗
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="route-panel mt-10 flex flex-col gap-5 rounded-[26px] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="route-kicker">Need something different?</p>
            <h2 className="display mt-2 text-2xl sm:text-3xl">
              We also build solutions around your workflow.
            </h2>
          </div>
          <Link
            href="/services"
            className="route-link route-link-primary shrink-0"
          >
            Explore services ↗
          </Link>
        </div>
      </section>
    </MarketingShell>
  );
}
