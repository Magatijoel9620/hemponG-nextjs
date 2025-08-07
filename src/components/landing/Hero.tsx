import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
              Your Idea Matters!
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              Welcome to HEMPON GROUP – Your Website Creation Partner
            </p>
            <p className="mt-4 text-foreground/70">
              Are you ready to turn your website ideas into reality? Look no further! As a skilled web designer and
              developer, I’m here to empower you to create stunning websites that captivate your audience. With my
              expertise and your vision, we can bring your online presence to life.
            </p>
            <div className="mt-8 flex justify-center gap-4 md:justify-start">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://placehold.co/700x500.png"
              alt="Hero image showing a collaborative web design process"
              width={700}
              height={500}
              className="rounded-lg shadow-xl"
              data-ai-hint="website design collaboration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
