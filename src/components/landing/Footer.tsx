import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background/50 border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="#home" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-foreground/70">
              When you choose HEMPON GROUP, you’re not just hiring a web design service—you’re forming a partnership.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-foreground/70 hover:text-primary"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="text-foreground/70 hover:text-primary"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/hempongroup/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/70 hover:text-primary"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="text-foreground/70 hover:text-primary"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h6 className="font-bold text-foreground">Quick Link</h6>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#home" className="text-foreground/70 hover:text-primary">Home</a></li>
              <li><a href="#about" className="text-foreground/70 hover:text-primary">About</a></li>
              <li><a href="#pricing" className="text-foreground/70 hover:text-primary">Service</a></li>
              <li><a href="#feature" className="text-foreground/70 hover:text-primary">Feature</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h6 className="font-bold text-foreground">Services</h6>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#pricing" className="text-foreground/70 hover:text-primary">Web Design</a></li>
              <li><a href="#pricing" className="text-foreground/70 hover:text-primary">Web Development</a></li>
              <li><a href="#pricing" className="text-foreground/70 hover:text-primary">SEO Optimization</a></li>
              <li><a href="#pricing" className="text-foreground/70 hover:text-primary">Blog Writing</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-foreground/60">
          <p>Copyright © {new Date().getFullYear()} Hempon Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
