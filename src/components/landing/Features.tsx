import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Store, ShoppingCart, PenSquare, Briefcase, ShieldCheck, DraftingCompass } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const features = [
  {
    icon: Store,
    title: 'Local Business Websites',
    description: 'We build custom websites that capture your brand’s essence and connect you with your local community, driving foot traffic and online engagement.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Launch a powerful online store with our seamless e-commerce platforms, designed to maximize sales and provide an exceptional user experience.',
  },
  {
    icon: PenSquare,
    title: 'Engaging Blogs',
    description: 'Establish your authority and connect with your audience through a captivating blog, expertly designed to boost your online presence.',
  },
  {
    icon: Briefcase,
    title: 'Professional Portfolios',
    description: 'Showcase your skills and achievements with a stunning portfolio website that makes a memorable impact on potential clients and employers.',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Security',
    description: 'Protect your digital assets and customer data with our robust security measures, including SSL encryption and proactive threat monitoring.',
  },
  {
    icon: DraftingCompass,
    title: 'Bespoke Web Design',
    description: 'Our visually striking, responsive designs are optimized for speed and search engines, ensuring you make a brilliant first impression.',
  },
];

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-card/50 border-border/50">
      <CardHeader>
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon className="h-8 w-8" />
          </div>
        </div>
        <CardTitle className="text-center text-xl font-bold">{title}</CardTitle>
        <CardDescription className="pt-2 text-center text-foreground/70">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export function Features() {
  return (
    <section id="feature" className="py-20 md:py-28 bg-background/70">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Solutions Tailored for Growth</h2>
          <p className="mt-4 text-foreground/80">
            Your website is your digital storefront. We build more than just pages; we create experiences that resonate with your audience and serve as a powerful engine for your brand’s growth.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
