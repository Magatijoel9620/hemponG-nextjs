"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Instagram,
  Menu,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("#home");
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const sections = navItems
      .map((item) =>
        document.getElementById(item.href.replace("#", ""))
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null
      );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visibleEntry) {
          setActiveLink(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavigation = (href: string) => {
    setActiveLink(href);
    setIsSheetOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-5">
      <div
        className={cn(
          "container max-w-7xl rounded-2xl border transition-all duration-300",
          "backdrop-blur-xl",
          isScrolled
            ? "border-border/60 bg-background/90 shadow-xl shadow-black/5"
            : "border-border/40 bg-background/75 shadow-lg shadow-black/5"
        )}
      >
        <div className="flex h-16 items-center justify-between px-3 sm:px-5">
          {/* Brand */}
          <Link
            href="#home"
            onClick={() => handleNavigation("#home")}
            className="group flex items-center"
            aria-label="Hempon Group homepage"
          >
            <Logo className="w-36 transition-transform duration-300 group-hover:scale-[1.03]" />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center rounded-xl border border-border/40 bg-muted/30 p-1 md:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const isActive = activeLink === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavigation(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-lg px-4 py-2 text-sm font-medium",
                    "transition-all duration-200",
                    isActive
                      ? "bg-background text-primary shadow-sm"
                      : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
                  )}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-primary" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hidden rounded-xl sm:inline-flex"
            >
              <a
                href="https://www.instagram.com/hempongroup/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Hempon Group on Instagram"
                title="Instagram"
              >
                <Instagram className="h-4.5 w-4.5 text-muted-foreground transition-colors hover:text-primary" />
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              className="hidden rounded-xl lg:inline-flex"
            >
              <a href="#contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            {/* Mobile menu */}
            <Sheet
              open={isSheetOpen}
              onOpenChange={setIsSheetOpen}
            >
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-xl md:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">
                    Open navigation menu
                  </span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[290px] border-l border-border/50 bg-background/95 p-0 backdrop-blur-xl sm:w-[340px]"
              >
                <div className="flex h-full flex-col">
                  <SheetHeader className="border-b border-border/50 p-6 text-left">
                    <SheetTitle>
                      <Link
                        href="#home"
                        onClick={() =>
                          handleNavigation("#home")
                        }
                        aria-label="Hempon Group homepage"
                      >
                        <Logo className="w-36" />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-1 flex-col p-5">
                    <nav
                      className="space-y-2"
                      aria-label="Mobile navigation"
                    >
                      {navItems.map((item) => {
                        const isActive =
                          activeLink === item.href;

                        return (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() =>
                              handleNavigation(item.href)
                            }
                            aria-current={
                              isActive ? "page" : undefined
                            }
                            className={cn(
                              "flex items-center justify-between rounded-xl px-4 py-3",
                              "text-sm font-medium transition-colors",
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            {item.name}

                            {isActive && (
                              <span className="h-2 w-2 rounded-full bg-primary" />
                            )}
                          </a>
                        );
                      })}
                    </nav>

                    <div className="mt-auto space-y-3 border-t border-border/50 pt-5">
                      <Button
                        asChild
                        className="w-full rounded-xl"
                      >
                        <a
                          href="#contact"
                          onClick={() =>
                            setIsSheetOpen(false)
                          }
                        >
                          Start a Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full rounded-xl"
                      >
                        <a
                          href="https://wa.me/254738219953?text=Hello%20Hempon%20Group%2C%20I%20would%20like%20to%20discuss%20a%20digital%20project."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Chat on WhatsApp
                        </a>
                      </Button>

                      <a
                        href="https://www.instagram.com/hempongroup/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Instagram className="h-4 w-4" />
                        Follow on Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
