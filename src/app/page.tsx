import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { About } from '@/components/landing/About';
import { Pricing } from '@/components/landing/Pricing';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';
import { AnimatedSection } from '@/components/landing/AnimatedSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimatedSection>
          <Features />
        </AnimatedSection>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Pricing />
        </AnimatedSection>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
