import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    title: 'Starter Website',
    category: 'For individuals and small businesses',
    price: 'From KSh 15,000',
    description:
        'A professional online presence for businesses that need a simple, modern website.',
    features: [
      '1–3 responsive pages',
      'Mobile-friendly design',
      'Contact form',
      'WhatsApp chat button',
      'Google Maps integration',
      'Basic search engine setup',
      '14 days of post-launch support',
    ],
  },
  {
    title: 'Business Website',
    category: 'For growing businesses',
    price: 'From KSh 25,000',
    description:
        'A complete business website with more pages, stronger content structure, and useful integrations.',
    featured: true,
    features: [
      'Up to 6 responsive pages',
      'Services and portfolio sections',
      'Testimonials and FAQ sections',
      'Contact and enquiry forms',
      'Social media integration',
      'Google Analytics setup',
      'Basic on-page SEO',
      '30 days of post-launch support',
    ],
  },
  {
    title: 'Online Store',
    category: 'For businesses selling online',
    price: 'From KSh 45,000',
    description:
        'An e-commerce website for showcasing products, accepting orders, and receiving payments.',
    features: [
      'Product catalogue setup',
      'Shopping cart and checkout',
      'Order management',
      'M-Pesa or card payment integration',
      'Customer email notifications',
      'Basic inventory configuration',
      'Administrator training',
      '30 days of post-launch support',
    ],
  },
  {
    title: 'Custom Web Solution',
    category: 'For advanced requirements',
    price: 'Custom quotation',
    description:
        'Suitable for portals, dashboards, booking systems, and applications with custom workflows.',
    features: [
      'Custom user interface',
      'Authentication and user roles',
      'Dashboards and admin panels',
      'Third-party API integrations',
      'Database development',
      'Business workflow automation',
      'Deployment and documentation',
      'Ongoing support options',
    ],
  },
];

export function Pricing() {
  return (
      <section id="pricing" className="bg-background/70 py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="text-center lg:col-span-5 lg:text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                Website packages
              </p>

              <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                Flexible options for different business needs
              </h2>

              <p className="mt-4 text-foreground/80">
                Every project is different. These packages provide a helpful
                starting point, and your final quotation will depend on the
                required pages, features, content, and integrations.
              </p>

              <p className="mt-4 text-sm text-foreground/60">
                Domain registration, hosting, premium plugins, payment-provider
                fees, and ongoing maintenance are quoted separately where
                applicable.
              </p>
            </div>

            <div className="lg:col-span-7">
              <Carousel
                  opts={{ align: 'start', loop: true }}
                  className="w-full"
              >
                <CarouselContent>
                  {pricingPlans.map((plan) => (
                      <CarouselItem
                          key={plan.title}
                          className="md:basis-1/2"
                      >
                        <div className="h-full p-1">
                          <Card
                              className={`flex h-full flex-col bg-card/60 shadow-lg ${
                                  plan.featured
                                      ? 'border-accent shadow-accent/10'
                                      : ''
                              }`}
                          >
                            <CardHeader>
                              {plan.featured && (
                                  <span className="mb-2 w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                              Most Popular
                            </span>
                              )}

                              <CardDescription className="font-semibold text-accent">
                                {plan.category}
                              </CardDescription>

                              <CardTitle className="text-2xl font-bold text-primary">
                                {plan.title}
                              </CardTitle>

                              <p className="text-3xl font-extrabold text-foreground">
                                {plan.price}
                              </p>

                              <p className="pt-2 text-sm leading-relaxed text-foreground/70">
                                {plan.description}
                              </p>
                            </CardHeader>

                            <CardContent className="flex-1">
                              <ul className="space-y-3">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start"
                                    >
                                      <Check className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                      <span className="text-foreground/80">
                                  {feature}
                                </span>
                                    </li>
                                ))}
                              </ul>
                            </CardContent>

                            <CardFooter>
                              <Button
                                  asChild
                                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                              >
                                <a
                                    href={`#contact`}
                                    aria-label={`Request a quote for ${plan.title}`}
                                >
                                  Request a Quote
                                </a>
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>
                      </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
  );
}