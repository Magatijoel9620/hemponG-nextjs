import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Facebook, Twitter, Instagram, Linkedin, Code } from 'lucide-react';

const socialLinks = [
    { href: "#", 'aria-label': "Facebook", icon: Facebook },
    { href: "#", 'aria-label': "Twitter", icon: Twitter },
    { href: "https://www.instagram.com/hempongroup/", 'aria-label': "Instagram", icon: Instagram },
    { href: "#", 'aria-label': "LinkedIn", icon: Linkedin }
];

const serviceLinks = [
  { href: "#pricing", text: "Web Design" },
  { href: "#pricing", text: "Web Development" },
  { href: "#pricing", text: "SEO Optimization" },
  { href: "#pricing", text: "Blog Writing" },
  { href: "#pricing", text: "Google Scripting" },
];

const quickLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#pricing", text: "Service" },
    { href: "#feature", text: "Feature" },
    { href: "#contact", text: "Contact" }
];

export function Footer() {
  return (
    <footer className="bg-background/80 border-t border-border/40">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <Link href="#home" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="max-w-xs text-sm text-foreground/70">
              When you choose HEMPON GROUP, you’re not just hiring a web design service—you’re forming a partnership.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(link => (
                  <a key={link['aria-label']} href={link.href} aria-label={link['aria-label']} target="_blank" rel="noopener noreferrer" className="text-foreground/70 transition-colors hover:text-primary">
                      <link.icon size={20} />
                  </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h6 className="font-bold text-foreground">Quick Links</h6>
              <ul className="mt-4 space-y-3 text-sm">
                {quickLinks.map(link => (
                  <li key={link.text}>
                    <a href={link.href} className="text-foreground/70 transition-colors hover:text-primary">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h6 className="font-bold text-foreground">Services</h6>
              <ul className="mt-4 space-y-3 text-sm">
                {serviceLinks.map(link => (
                  <li key={link.text}>
                    <a href={link.href} className="text-foreground/70 transition-colors hover:text-primary">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="font-bold text-foreground">Legal</h6>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="#" className="text-foreground/70 transition-colors hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="text-foreground/70 transition-colors hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-border/40 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Hempon Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
