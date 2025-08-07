import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary/5 py-20 md:py-32">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Your Idea Matters!
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Welcome to HEMPON GROUP – Your Website Creation Partner
            </p>
            <p className="mt-4 text-foreground/70">
              Are you ready to turn your website ideas into reality? Look no further! As a skilled web designer and
              developer, I’m here to empower you to create stunning websites that captivate your audience. With my
              expertise and your vision, we can bring your online presence to life.
            </p>
            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative flex h-full min-h-[300px] items-center justify-center">
            <div className="absolute inset-0 z-0 -m-4 rounded-full bg-primary/10 opacity-50 blur-3xl"></div>
            <Image
              src="https://placehold.co/700x500.png"
              alt="Floating web development components"
              width={700}
              height={500}
              data-ai-hint="web components"
              className="relative z-10 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
