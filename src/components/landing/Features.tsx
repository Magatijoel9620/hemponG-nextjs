import {
  Bot,
  BriefcaseBusiness,
  Code2,
  FileSpreadsheet,
  LayoutDashboard,
  ShoppingCart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Business Websites",
    description:
      "Modern, responsive websites for law firms, schools, clinics, hotels, restaurants, real-estate agencies, and growing businesses.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Fast, conversion-focused online storefronts with product catalogues, secure checkout flows, customer accounts, and scalable architecture.",
  },
  {
    icon: LayoutDashboard,
    title: "Business Systems",
    description:
      "Custom dashboards, client portals, management tools, and internal systems designed to simplify everyday business operations.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Portfolio & Professional Sites",
    description:
      "Polished portfolio websites for developers, creatives, professionals, and organizations that want to present their work with confidence.",
  },
  {
    icon: FileSpreadsheet,
    title: "Workflow Automation",
    description:
      "Google Apps Script, spreadsheet automation, reporting tools, and digital workflows that reduce repetitive work and improve accuracy.",
  },
  {
    icon: Bot,
    title: "AI-Powered Experiences",
    description:
      "Practical AI integrations for content assistance, recommendations, data extraction, automation, and smarter user experiences.",
  },
];

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="group relative h-full overflow-hidden border-border/60 bg-card/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <CardHeader className="p-6 sm:p-7">
        <div className="mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <CardTitle className="font-headline text-xl font-bold tracking-tight">
          {title}
        </CardTitle>

        <CardDescription className="pt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What I Build
          </span>

          <h2 className="mt-5 font-headline text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Digital Solutions Built Around{" "}
            <span className="text-primary">Real Business Needs</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            I design and develop websites, applications, automation tools, and
            digital systems that help businesses present themselves better,
            work more efficiently, and grow with confidence.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
