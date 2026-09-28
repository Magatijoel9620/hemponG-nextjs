import { ArrowRight, Compass, Hammer, Rocket, ShieldCheck, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your business, audience, workflow and the problem you actually need solved.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Plan",
    description: "We define the right structure, features, technology and delivery milestones before building.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Build",
    description: "Design and development happen together, with responsive interfaces and practical functionality.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Launch",
    description: "We test, deploy and help you get comfortable with the finished digital product.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Improve",
    description: "Post-launch support keeps your website or system useful as your business changes.",
    icon: ShieldCheck,
  },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            How we work
          </span>
          <h2 className="mt-5 font-headline text-3xl font-bold tracking-tight md:text-5xl">
            From idea to <span className="text-primary">something useful.</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            A clear process keeps the technology focused on the business instead
            of making the business adapt to the technology.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map(({ number, title, description, icon: Icon }, index) => (
            <div key={number} className="group relative rounded-3xl border border-border/60 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card">
              {index < steps.length - 1 && (
                <div aria-hidden="true" className="absolute right-[-14px] top-12 z-10 hidden text-primary/40 md:block">
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tracking-widest text-primary">{number}</span>
                <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-8 font-headline text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
