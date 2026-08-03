import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  { text: 'Collaborative Partnership', description: 'We align our strategy with your business goals, ensuring every pixel serves your vision.' },
  { text: 'Empowerment & Training', description: 'We equip you with the knowledge to manage your site and maximize its potential.' },
  { text: 'Commitment to Quality', description: 'Rigorous testing guarantees a flawless, high-performance experience for your users.' },
  { text: 'Continuous Improvement', description: 'Your feedback is vital. We thrive on collaboration and value your insights for growth.' },
  { text: 'Tailored Solutions', description: 'We blend creativity with function, crafting bespoke websites that are uniquely yours.' },
  { text: 'Reliable Delivery & Support', description: 'We honor your timelines and provide ongoing support to ensure your long-term success.' },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">import Image from "next/image";
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
                <Link href="/projects">
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
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="lg:order-last">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              We're More Than a Web Designer—We're Your Partner in Success.
            </h2>
            <p className="mt-4 text-foreground/80">
              Choosing HEMPON GROUP means gaining a dedicated team invested in your digital journey. We believe in building relationships, not just websites.
            </p>
            <p className="mt-4 text-foreground/70">Our commitment to you includes:</p>
            <ul className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit.text} className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <span className="font-bold text-foreground">{benefit.text}</span>
                    <p className="text-foreground/70 text-sm">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
             <p className="mt-6 text-foreground/70">
              With HEMPON GROUP, you get more than a website—you get a dedicated partner committed to seeing you thrive.
            </p>
            <Button size="lg" asChild className="mt-8 bg-primary hover:bg-primary/90">
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/about-img.svg"
              alt="A team of designers and developers collaborating on a web project"
              width={600}
              height={600}
              data-ai-hint="team collaboration"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
