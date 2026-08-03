import Link from "next/link";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";

import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://x.com/hempon_group",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "https://www.instagram.com/hempongroup/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/joel-magati",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

const serviceLinks = [
  {
    href: "#features",
    text: "Business Websites",
  },
  {
    href: "#features",
    text: "E-Commerce Solutions",
  },
  {
    href: "#features",
    text: "Business Systems",
  },
  {
    href: "#features",
    text: "Workflow Automation",
  },
  {
    href: "#features",
    text: "AI Integrations",
  },
];

const quickLinks = [
  {
    href: "#home",
    text: "Home",
  },
  {
    href: "#about",
    text: "About Us",
  },
  {
    href: "#features",
    text: "Services",
  },
  {
    href: "#pricing",
    text: "Pricing",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];

const contactDetails = [
  {
    icon: Phone,
    label: "+254 738 219 953",
    href: "tel:+254738219953",
  },
  {
    icon: Mail,
    label: "magatijoel@gmail.com",
    href: "mailto:magatijoel@gmail.com",
  },
  {
    icon: MapPin,
    label: "Mombasa, Kenya",
    href: "https://maps.app.goo.gl/69WVyjyQaKheYG866",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-muted/20">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container py-14 md:py-16">
        {/* Top CTA */}
        <div className="mb-14 flex flex-col gap-6 rounded-3xl border border-primary/20 bg-primary/5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Have a project in mind?
            </p>

            <h2 className="mt-2 font-headline text-2xl font-bold tracking-tight md:text-3xl">
              Let&apos;s build something useful together.
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Share your idea and receive guidance on the right website,
              application, automation, or digital solution for your business.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-xl">
              <a href="#contact">
                Start a Project
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-xl"
            >
              <a
                href="https://wa.me/254738219953?text=Hello%20Hempon%20Group%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Main footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-4">
            <Link
              href="#home"
              className="inline-flex"
              aria-label="Hempon Group homepage"
            >
              <Logo className="w-40" />
            </Link>

            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Hempon Group builds modern websites, digital platforms,
              automation tools, and business systems designed to help
              organizations work better and grow with confidence.
            </p>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              Available for selected projects
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map(({ href, text }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              {serviceLinks.map(({ href, text }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Contact
            </h3>

            <ul className="mt-5 space-y-4">
              {contactDetails.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </span>

                    <span className="pt-2 text-sm text-muted-foreground transition-colors group-hover:text-primary">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {currentYear} Hempon Group. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-1.5 rounded-lg border border-border/60 px-3 py-1.5 transition-all hover:border-primary/40 hover:text-primary"
            >
              Back to Top
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
