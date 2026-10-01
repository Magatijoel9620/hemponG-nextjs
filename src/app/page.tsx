import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { TechnologyStrip } from '@/components/landing/TechnologyStrip';
import { Features } from '@/components/landing/Features';
import { Portfolio } from '@/components/landing/Portfolio';
import { Process } from '@/components/landing/Process';
import { About } from '@/components/landing/About';
import { Pricing } from '@/components/landing/Pricing';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';
import { AnimatedSection } from '@/components/landing/AnimatedSection';
import { MobileWhatsApp } from '@/components/landing/MobileWhatsApp';
import { InteractionLayer } from '@/components/landing/InteractionLayer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <InteractionLayer />
      <Header />
      <main className="flex-1">
        <Hero />
        <TechnologyStrip />
        <AnimatedSection><Features /></AnimatedSection>
        <AnimatedSection><Portfolio /></AnimatedSection>
        <AnimatedSection><Process /></AnimatedSection>
        <AnimatedSection><About /></AnimatedSection>
        <AnimatedSection><Pricing /></AnimatedSection>
        <Contact />
      </main>
      <Footer />
      <MobileWhatsApp />
    </div>
  );
}
