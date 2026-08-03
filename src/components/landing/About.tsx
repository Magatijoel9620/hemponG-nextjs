import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Code2,
  Headphones,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We take time to understand your organization, audience, goals, and challenges before recommending a solution.",
  },
  {
    icon: Lightbulb,
    title: "Solutions Built Around You",
    description:
      "Every website and digital product is shaped around your brand, workflow, priorities, and long-term growth.",
  },
  {
    icon: Code2,
    title: "Modern, Maintainable Technology",
    description:
      "We build responsive, scalable, and easy-to-maintain solutions using reliable modern technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Quality and Reliability",
    description:
      "Each project is carefully tested for performance, responsiveness, usability, accessibility, and security.",
  },
  {
    icon: Clock3,
    title: "Clear and Reliable Delivery",
    description:
      "You receive transparent milestones, regular progress updates, and realistic timelines throughout the project.",
  },
  {
    icon: Headphones,
    title: "Training and Ongoing Support",
    description:
      "We help you understand your website and remain available for maintenance, improvements, and future growth.",
  },
];

const stats = [
  {
    value: "100%",
    label: "Responsive Design",
  },
  {
    value: "1-on-1",
    label: "Project Collaboration",
  },
  {
    value: "End-to-End",
    label: "Design and Development",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-accent/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-3 shadow-xl shadow-black/5">
              <Image
                src="/assets/about-img.svg"
                alt="Hempon Group team planning and developing a digital project"
                width={700}
                height={700}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>

            {/* Floating trust card */}
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border/60 bg-background/90 p-5 shadow-lg backdrop-blur-xl sm:left-auto sm:right-6 sm:w-72">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-foreground">
                    Built for Long-Term Value
                  </p>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Practical digital solutions designed to support your
                    organization beyond launch day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About Hempon Group
            </span>

            <h2 className="mt-5 font-headline text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              More Than a Service Provider—Your{" "}
              <span className="text-primary">
                Digital Growth Partner
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
              Hempon Group helps businesses and organizations turn ideas into
              modern websites, applications, automation tools, and digital
              systems that solve real operational problems.
            </p>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              We combine thoughtful design, reliable technology, and practical
              business understanding to create solutions that are not only
              visually impressive, but useful, manageable, and ready to grow
              with you.
            </p>

            {/* Benefits */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {benefits.map(
                ({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="group flex items-start gap-3 rounded-2xl border border-border/50 bg-card/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-foreground">
                        {title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 gap-3 border-y border-border/50 py-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center sm:text-left"
                >
                  <p className="font-headline text-xl font-bold text-primary">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="rounded-xl">
                <a href="#contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-xl"
              >
                <Link href="https://portfolio-mjs.vercel.app/projects">
                  View Our Work
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />

              Clear communication, honest timelines, and continued support.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
