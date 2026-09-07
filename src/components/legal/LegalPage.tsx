import type { ReactNode } from "react";
import Link from "next/link";

import { Footer } from "@/components/landing/Footer";
import { Logo } from "@/components/ui/logo";

export interface LegalSection {
  title: string;
  paragraphs?: ReactNode[];
  bullets?: string[];
  afterBullets?: ReactNode[];
}

interface LegalPageProps {
  title: string;
  intro: string[];
  sections: LegalSection[];
  closing?: ReactNode;
}

export function LegalPage({
  title,
  intro,
  sections,
  closing,
}: LegalPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" aria-label="Hempon Group homepage">
            <Logo className="w-36" />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="border-b border-border/50 bg-muted/20 py-16 md:py-20">
          <div className="container max-w-4xl">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Hempon Group
            </span>
            <h1 className="mt-5 font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <p>Effective Date: 7 September 2026</p>
              <p>Last Updated: 7 September 2026</p>
            </div>
          </div>
        </section>

        <article className="container max-w-4xl py-14 md:py-20">
          <div className="space-y-5 text-base leading-7 text-muted-foreground md:text-lg">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 space-y-12">
            {sections.map(({ title: sectionTitle, paragraphs, bullets, afterBullets }) => (
              <section key={sectionTitle}>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {sectionTitle}
                </h2>
                {paragraphs && (
                  <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground md:text-lg">
                    {paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground md:text-lg">
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {afterBullets && (
                  <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground md:text-lg">
                    {afterBullets.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {closing && (
            <p className="mt-12 border-t border-border/60 pt-8 text-base leading-7 text-muted-foreground md:text-lg">
              {closing}
            </p>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
