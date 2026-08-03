import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { ContactForm } from "./ContactForm";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Me",
    details: [
      {
        text: "+254 738 219 953",
        href: "tel:+254738219953",
      },
      {
        text: "+254 711 879 129",
        href: "tel:+254711879129",
      },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    details: [
      {
        text: "magatijoel@gmail.com",
        href: "mailto:magatijoel@gmail.com",
      },
    ],
  },
  {
    icon: MapPin,
    label: "Location",
    details: [
      {
        text: "Mombasa, Kenya",
        href: "https://maps.app.goo.gl/69WVyjyQaKheYG866",
      },
    ],
  },
  {
    icon: Clock3,
    label: "Availability",
    details: [
      {
        text: "Monday – Friday, 8:00 AM – 6:00 PM",
      },
      {
        text: "Weekend meetings by appointment",
      },
    ],
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Start a Conversation
          </span>

          <h2 className="mt-5 font-headline text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Ready to Build Something{" "}
            <span className="text-primary">Amazing?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Tell me about your website, mobile app, automation, or business
            system. I’ll help you turn the idea into a practical, polished
            digital solution.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border/60 bg-card/70 p-5 shadow-sm backdrop-blur-sm sm:p-8">
              <div className="mb-6">
                <h3 className="font-headline text-2xl font-bold">
                  Tell Me About Your Project
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Share a few details and I’ll get back to you as soon as
                  possible.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-5 lg:col-span-2">
            <div>
              <h3 className="font-headline text-2xl font-bold">
                Contact Details
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Prefer a direct conversation? Reach me using any of the options
                below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, details }) => (
                <div
                  key={label}
                  className="group flex gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-sm font-semibold text-foreground">
                      {label}
                    </p>

                    <div className="space-y-1">
                      {details.map((detail) =>
                        detail.href ? (
                          <a
                            key={detail.text}
                            href={detail.href}
                            target={
                              detail.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              detail.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="block break-words text-sm leading-6 text-muted-foreground transition-colors hover:text-primary"
                          >
                            {detail.text}
                          </a>
                        ) : (
                          <p
                            key={detail.text}
                            className="text-sm leading-6 text-muted-foreground"
                          >
                            {detail.text}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254738219953?text=Hello%20Joel%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 transition-all hover:-translate-y-0.5 hover:bg-emerald-500/15"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Chat on WhatsApp
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Get a quick response about your project
                  </p>
                </div>
              </div>

              <span className="text-lg text-emerald-500">→</span>
            </a>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>

                <p className="text-sm font-semibold">Available for new work</p>
              </div>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Currently accepting selected website, mobile application,
                automation, and business-system projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
