import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const highlights = [
  "Modern responsive design",
  "Business-focused solutions",
  "Reliable support after launch",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pb-20 pt-28 md:pb-28 md:pt-36"
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/assets/hero-bg.svg')] bg-cover bg-center bg-no-repeat opacity-60"
      />

      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Hero content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Websites • Apps • Automation
            </span>

            <h1 className="mt-6 font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Digital Solutions That Help Your{" "}
              <span className="text-primary">
                Business Move Forward
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground lg:mx-0">
              Hempon Group designs and develops modern websites, business
              systems, automation tools, and digital experiences built around
              your goals.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground lg:mx-0">
              From your first idea to launch and ongoing support, we combine
              thoughtful design with reliable technology to create solutions
              that look professional, perform smoothly, and deliver practical
              value.
            </p>

            {/* Highlights */}
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {highlight}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                asChild
                className="rounded-xl"
              >
                <a href="#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-xl"
              >
                <a
                  href="https://wa.me/254738219953?text=Hello%20Hempon%20Group%2C%20I%20would%20like%20to%20discuss%20a%20digital%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Based in Mombasa, Kenya • Serving clients locally and remotely
            </p>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute inset-10 rounded-full bg-primary/15 blur-3xl"
            />

            <div className="relative w-full overflow-hidden rounded-[2rem] border border-border/60 bg-card/60 p-4 shadow-2xl shadow-primary/10 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2 px-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />

                <div className="ml-3 h-7 flex-1 rounded-lg bg-muted/70" />
              </div>

              <Image
                src="/assets/hero-img.svg"
                alt="Website design, development and automation services by Hempon Group"
                width={700}
                height={500}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 left-4 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-lg backdrop-blur-xl sm:left-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Built for Growth
              </p>

              <p className="mt-1 text-sm font-medium text-foreground">
                Responsive • Fast • Easy to Manage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
