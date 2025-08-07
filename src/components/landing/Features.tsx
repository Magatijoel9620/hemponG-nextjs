import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Store, ShoppingCart, PenSquare, Briefcase, ShieldCheck, DraftingCompass } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const features = [
  {
    icon: Store,
    title: 'Local Business',
    description: 'We understand the unique needs of local businesses. We specialize in creating custom websites that showcase your brand and attract local customers.',
  },
  {
    icon: ShoppingCart,
    title: 'Online Store',
    description: 'Maximize your online sales potential with our robust e-commerce solutions, creating a seamless shopping experience for your customers.',
  },
  {
    icon: PenSquare,
    title: 'Blogging',
    description: 'HEMPON GROUP is here to help you create a captivating blog that resonates with your readers and establishes your online presence.',
  },
  {
    icon: Briefcase,
    title: 'Portfolio',
    description: 'Your portfolio reflects your skills. We create stunning portfolio websites that leave a lasting impression on clients and collaborators.',
  },
  {
    icon: ShieldCheck,
    title: 'Best Security',
    description: 'Our websites include SSL encryption, secure coding, and regular updates to safeguard your business and customer data from potential threats.',
  },
  {
    icon: DraftingCompass,
    title: 'Web Design',
    description: 'We create visually appealing, responsive, and fast-loading websites tailored to your brand, optimized for search engines to drive traffic.',
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
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Why choose HEMPON GROUP?</h2>
          <p className="mt-4 text-foreground/80">
            Because I understand that your website is more than just a digital address. It’s an extension of your brand, a platform to showcase your products or services, and a gateway to connect with your audience.
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
