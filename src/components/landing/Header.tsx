'use client';

import * as React from 'react';
import Link from 'next/link';
import { Instagram, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#feature' },
  { name: 'About', href: '#about' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState('#home');

  React.useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.href.substring(1)));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      onClick={() => {
        setActiveLink(href);
        setIsSheetOpen(false);
      }}
      className={cn(
        'text-foreground/80 hover:text-primary transition-colors',
        activeLink === href && 'text-primary font-bold'
      )}
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="#home" className="mr-8 flex items-center">
          <Logo className="w-36" />
        </Link>
        <div className="hidden flex-1 items-center md:flex">
          <nav className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>{item.name}</NavLink>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.instagram.com/hempongroup/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-foreground/80" />
            </a>
          </Button>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-background">
              <div className="flex h-full flex-col p-6">
                <Link href="#home" className="mb-8" onClick={() => setIsSheetOpen(false)}>
                  <Logo className="w-36" />
                </Link>
                <nav className="flex flex-col gap-6 text-lg">
                  {navItems.map((item) => (
                    <NavLink key={item.href} href={item.href}>{item.name}</NavLink>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
