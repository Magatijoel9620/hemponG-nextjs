import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { About } from '@/components/landing/About';
import { Pricing } from '@/components/landing/Pricing';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
