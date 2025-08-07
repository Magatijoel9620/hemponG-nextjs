import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    title: 'Basic Design',
    category: 'Web Design',
    price: 'Kes 20K - 100K',
    features: [
      'One (1) pager = Kes 15K',
      'Upto 5 pages = Kes 25K',
      'Upto 10 Pages = Kes 35K',
      'Upto 20 pages = Kes 75K',
      'Blog website = Kes 15K',
      'Landing Page = Kes 20K',
    ],
  },
  {
    title: 'Ecommerce Web Design',
    category: 'Ecommerce Web Development',
    price: 'Kes 40K - 250K',
    features: [
      'Ecommerce Tools',
      'Order Management System',
      'Payment Integration',
      'Technical Support',
    ],
  },
  {
    title: 'Custom Design',
    category: 'Custom Web Development',
    price: 'Ksh 100K+',
    features: [
      'Carefully crafted components',
      'Amazing pages',
      'Changes on the go',
      'Technical Support',
    ],
  },
  {
    title: 'Prices Inclusive of:-',
    category: 'All Plans',
    price: 'All',
    features: [
      'Domain Registration',
      'Website Hosting',
      'Unlimited business Emails',
      'Technical Support',
      'SSL Certificate',
      'On-page basic SEO',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background/70">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Pricing Plan</h2>
            <p className="mt-4 text-foreground/80">
              Contact us today and experience the passion, professionalism and reliable support that sets us apart. Let’s create a website that represents your unique vision and helps you achieve your online goals.
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
                            <a href="#contact">Get Started</a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
