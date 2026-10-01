import { ArrowUpRight, Building2, ExternalLink, Layers3, Smartphone, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Farmora",
    category: "Business platform",
    description:
      "A modern farm-management platform bringing operations, inventory, livestock, sales and financial workflows into one digital workspace.",
    tags: ["Flutter", "Supabase", "SaaS"],
    icon: Layers3,
    image: "/assets/famora_landscape.jpg",
    visual: "from-emerald-500/20 via-primary/10 to-background",
  },
  {
    title: "InvoiceEasy",
    category: "Business software",
    description:
      "A focused invoicing and business-management experience designed to simplify customers, products, invoices, payments and everyday administration.",
    tags: ["Flutter", "Supabase", "Payments"],
    icon: Workflow,
    image: "/assets/ie_landscape.jpg",
    visual: "from-blue-500/20 via-primary/10 to-background",
  },
  {
    title: "Landlord Ledger",
    category: "Property management",
    description:
      "A property-management platform focused on making rental operations, tenants, payments and landlord records easier to manage from one place.",
    tags: ["Flutter", "Supabase", "Property Tech"],
    icon: Building2,
    image: "/assets/LL_landscape.jpg",
    visual: "from-amber-500/20 via-primary/10 to-background",
  },
  {
    title: "Digital Experiences",
    category: "Web & product design",
    description:
      "Responsive websites and product interfaces designed to make brands clearer, more credible and easier for customers to engage with.",
    tags: ["Next.js", "React", "TypeScript"],
    icon: Smartphone,
      image: "/assets/digital_exp.png",
    visual: "from-violet-500/20 via-primary/10 to-background",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="relative overflow-hidden border-y border-border/50 bg-muted/20 py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Selected work
            </span>
            <h2 className="mt-5 font-headline text-3xl font-bold tracking-tight md:text-5xl">
              We don&apos;t just talk about digital products.{" "}
              <span className="text-primary">We build them.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
              From business platforms to polished web experiences, our work is
              focused on solving real operational and customer problems.
            </p>
          </div>

          <Button asChild variant="outline" data-magnetic className="w-fit rounded-xl">
            <a href="https://portfolio-mjs.vercel.app/projects" target="_blank" rel="noopener noreferrer">
              Explore portfolio
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map(({ title, category, description, tags, icon: Icon, image, visual }) => (
            <article
              key={title}
              data-reflect
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${visual}`}>
                {image ? (
                  <img
                    src={image}
                    alt={`${title} project preview`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 h-px bg-white/15" />
                <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-background/80 text-primary shadow-lg backdrop-blur-md">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {category}
                </p>
                <h3 className="mt-2 font-headline text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border/70 bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://portfolio-mjs.vercel.app/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  View project details
                  <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
