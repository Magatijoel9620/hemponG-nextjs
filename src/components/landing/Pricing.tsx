import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    title: 'Essential Design',
    category: 'Web Design',
    price: 'Kes 20K - 100K',
    features: [
      '1-Page Site: Kes 15K',
      'Up to 5 Pages: Kes 25K',
      'Up to 10 Pages: Kes 35K',
      'Up to 20 Pages: Kes 75K',
      'Blog Setup: Kes 15K',
      'Landing Page: Kes 20K',
    ],
  },
  {
    title: 'E-Commerce Pro',
    category: 'E-Commerce Development',
    price: 'Kes 40K - 250K',
    features: [
      'Advanced E-commerce Tools',
      'Full Order Management System',
      'Secure Payment Integration',
      'Dedicated Technical Support',
    ],
  },
  {
    title: 'Bespoke Solutions',
    category: 'Custom Development',
    price: 'Ksh 100K+',
    features: [
      'Pixel-Perfect, Custom Components',
      'Unique, High-Impact Pages',
      'On-the-Go Revisions & Changes',
      'Priority Technical Support',
    ],
  },
  {
    title: 'All-Inclusive Value',
    category: 'All Plans Feature',
    price: 'Included',
    features: [
      'Domain Name Registration',
      'High-Speed Web Hosting',
      'Unlimited Business Emails',
      'SSL Security Certificate',
      'Technical Support',
      'On-Page SEO Foundation',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background/70">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Transparent Pricing for Every Vision</h2>
            <p className="mt-4 text-foreground/80">
              Let's build a website that not only meets your needs but also exceeds your expectations. Explore our plans or contact us for a custom quote.
            </p>
          </div>
          <div className="lg:col-span-7">
            <Carousel opts={{ align: 'start', loop: true }} className="w-full">
              <CarouselContent>
                {pricingPlans.map((plan, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1">
                      <Card className="flex h-full flex-col bg-card/60 shadow-lg">
                        <CardHeader>
                          <CardDescription className="text-accent font-semibold">{plan.category}</CardDescription>
                          <CardTitle className="text-2xl font-bold text-primary">{plan.title}</CardTitle>
                          <p className="text-3xl font-extrabold text-foreground">{plan.price}</p>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <Check className="mr-2 h-5 w-5 text-green-500" />
                                <span className="text-foreground/80">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                            <a href="#contact">Choose Plan</a>
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
