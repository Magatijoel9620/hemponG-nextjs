import { Code2, Database, Smartphone, Sparkles, Workflow } from "lucide-react";

const technologies = [
  { name: "Next.js / React", icon: Code2 },
  { name: "Flutter", icon: Smartphone },
  { name: "Supabase / PostgreSQL", icon: Database },
  { name: "Automation", icon: Workflow },
  { name: "AI integrations", icon: Sparkles },
];

export function TechnologyStrip() {
  return (
    <section className="border-y border-border/50 bg-background py-8">
      <div className="container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Built with modern technology
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-end">
            {technologies.map(({ name, icon: Icon }) => (
              <div key={name} className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground">
                <Icon className="h-3.5 w-3.5 text-primary" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
