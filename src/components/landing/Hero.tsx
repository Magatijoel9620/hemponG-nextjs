import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary/5 py-20 md:py-32">
      <div className="container relative z-10" >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Your Vision, Realized Online.
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Welcome to HEMPON GROUP – Where Digital Excellence Begins.
            </p>
            <p className="mt-4 text-foreground/70">
              Ready to transform your ideas into a stunning, high-performance website? At HEMPON GROUP, we combine cutting-edge design with powerful development to build an online presence that captivates your audience and drives results. Let's create something extraordinary together.
            </p>
            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#contact">
                  Take The First Step <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative flex h-full min-h-[300px] items-center justify-center">
            <div className="absolute inset-0 z-0 -m-4 rounded-full bg-primary/10 opacity-50 blur-3xl"></div>
            <Image
              src="/assets/hero-img.svg"
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
