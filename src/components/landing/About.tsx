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
    <section id="about" className="py-20 md:py-28 bg-background">
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
              src="https://placehold.co/600x600.png"
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
