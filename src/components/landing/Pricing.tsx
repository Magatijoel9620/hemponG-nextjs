import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Check,
  Clock3,
  MessageCircle,
  Sparkles,
} from "lucide-react";

type PricingPlan = {
  title: string;
  category: string;
  bestFor: string;
  price: string;
  timeline: string;
  description: string;
  featured?: boolean;
  features: string[];
};

const pricingPlans: PricingPlan[] = [
  {
    title: "Starter Website",
    category: "Simple online presence",
    bestFor: "Individuals, startups and small local businesses",
    price: "From KSh 15,000",
    timeline: "5–10 working days",
    description:
      "A clean, professional website for businesses that need a credible and modern online presence.",
    features: [
      "1–3 responsive pages",
      "Mobile-friendly design",
      "Contact or enquiry form",
      "WhatsApp chat integration",
      "Google Maps integration",
      "Basic search-engine setup",
      "Social media links",
      "14 days of post-launch support",
    ],
  },
  {
    title: "Business Website",
    category: "Complete company website",
    bestFor: "Growing businesses and professional organizations",
    price: "From KSh 25,000",
    timeline: "2–3 weeks",
    description:
      "A structured business website designed to present your services, build trust and generate enquiries.",
    featured: true,
    features: [
      "Up to 6 responsive pages",
      "Services and portfolio sections",
      "Testimonials and FAQ sections",
      "Contact and enquiry forms",
      "WhatsApp and social integrations",
      "Google Analytics setup",
      "Basic on-page SEO",
      "Content upload assistance",
      "30 days of post-launch support",
    ],
  },
  {
    title: "Online Store",
    category: "Sell products online",
    bestFor: "Retailers, suppliers and product-based businesses",
    price: "From KSh 45,000",
    timeline: "3–5 weeks",
    description:
      "An e-commerce website for showcasing products, receiving orders and supporting digital payments.",
    features: [
      "Product catalogue setup",
      "Product categories and search",
      "Shopping cart and checkout",
      "Order-management workflow",
      "M-Pesa or card-payment integration",
      "Customer email notifications",
      "Basic inventory configuration",
      "Administrator training",
      "30 days of post-launch support",
    ],
  },
  {
    title: "Custom Web Solution",
    category: "Advanced digital systems",
    bestFor: "Organizations with unique workflows or platform requirements",
    price: "Custom quotation",
    timeline: "Based on project scope",
    description:
      "Ideal for portals, dashboards, booking platforms, management systems and applications with custom business logic.",
    features: [
      "Custom user interface",
      "Authentication and user roles",
      "Dashboards and administration panels",
      "Third-party API integrations",
      "Database design and development",
      "Business workflow automation",
      "Deployment and documentation",
      "Administrator or staff training",
      "Ongoing support options",
    ],
  },
];

function buildWhatsAppUrl(planTitle: string) {
  const message = encodeURIComponent(
    `Hello Hempon Group, I am interested in the ${planTitle} package. I would like to discuss my project requirements and receive a quotation.`
  );

  return `https://wa.me/254738219953?text=${message}`;
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-muted/20 py-16 sm:py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Introduction */}
          <div className="text-center lg:sticky lg:top-28 lg:col-span-4 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Website Packages
            </span>

            <h2 className="mt-5 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Flexible Packages for{" "}
              <span className="text-primary">Different Business Needs</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Choose a practical starting point based on your goals. Every
              package can be adjusted to match your pages, content, features,
              integrations and preferred design direction.
            </p>

            <div className="mt-6 rounded-2xl border border-border/60 bg-card/60 p-5 text-left">
              <p className="text-sm font-semibold text-foreground">
                Important pricing note
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Final pricing depends on the approved scope. Domain
                registration, hosting, premium software, payment-provider fees,
                third-party services and ongoing maintenance are quoted
                separately where applicable.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" className="rounded-xl">
                <a href="#contact">
                  Request a Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl"
              >
                <a
                  href="https://wa.me/254738219953?text=Hello%20Hempon%20Group%2C%20I%20would%20like%20help%20choosing%20the%20right%20website%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Help Me Choose
                </a>
              </Button>
            </div>
          </div>

          {/* Pricing carousel */}
          <div className="min-w-0 lg:col-span-8">
            <Carousel
              opts={{
                align: "start",
                loop: false,
                containScroll: "trimSnaps",
              }}
              className="w-full min-w-0"
            >
              <CarouselContent className="-ml-4">
                {pricingPlans.map((plan) => (
                  <CarouselItem
                    key={plan.title}
                    className="basis-full pl-4 sm:basis-[85%] md:basis-1/2"
                  >
                    <div className="h-full py-1">
                      <Card
                        className={`group relative flex h-full flex-col overflow-hidden border-border/60 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:min-h-[620px] ${
                          plan.featured
                            ? "border-primary/50 shadow-lg shadow-primary/10"
                            : ""
                        }`}
                      >
                        {plan.featured && (
                          <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
                        )}

                        <CardHeader className="space-y-4 p-5 sm:p-6">
                          {plan.featured && (
                            <span className="inline-flex w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                              Most Popular
                            </span>
                          )}

                          <div>
                            <CardDescription className="font-semibold text-primary">
                              {plan.category}
                            </CardDescription>

                            <CardTitle className="mt-1 font-headline text-xl font-bold sm:text-2xl">
                              {plan.title}
                            </CardTitle>
                          </div>

                          <div>
                            <p className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                              {plan.price}
                            </p>

                            <div className="mt-2 flex items-start gap-2 text-xs text-muted-foreground">
                              <Clock3 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                              <span>
                                Estimated delivery: {plan.timeline}
                              </span>
                            </div>
                          </div>

                          <div className="rounded-xl bg-muted/40 p-3">
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              Best for
                            </p>

                            <p className="mt-1 text-sm font-medium text-foreground">
                              {plan.bestFor}
                            </p>
                          </div>

                          <p className="text-sm leading-6 text-muted-foreground">
                            {plan.description}
                          </p>
                        </CardHeader>

                        <CardContent className="flex-1 px-5 pb-5 sm:px-6 sm:pb-6">
                          <p className="mb-4 text-sm font-semibold text-foreground">
                            What&apos;s included
                          </p>

                          <ul className="space-y-3">
                            {plan.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                                  <Check className="h-3.5 w-3.5" />
                                </span>

                                <span className="text-sm leading-6 text-muted-foreground">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>

                        <CardFooter className="mt-auto flex flex-col gap-3 border-t border-border/50 p-5 sm:p-6">
                          <Button
                            asChild
                            className="w-full rounded-xl"
                            variant={plan.featured ? "default" : "outline"}
                          >
                            <a
                              href={buildWhatsAppUrl(plan.title)}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Discuss the ${plan.title} package on WhatsApp`}
                            >
                              <MessageCircle className="mr-2 h-4 w-4" />
                              Discuss This Package
                            </a>
                          </Button>

                          <a
                            href="#contact"
                            className="text-center text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                          >
                            Or send a detailed project enquiry
                          </a>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-6 flex items-center justify-center gap-3 sm:justify-end">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>

            <div className="mt-8 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-5 text-center">
              <p className="text-sm font-semibold text-foreground">
                Need something that does not fit these packages?
              </p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Custom quotations are available for redesigns, client portals,
                booking systems, mobile applications, automation tools and
                other digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
