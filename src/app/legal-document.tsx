import { readFileSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );
}

function renderParagraph(lines: string[]) {
  return lines.flatMap((line, index) => {
    const hardBreak = line.trimEnd().endsWith("\\");
    const text = hardBreak ? line.trimEnd().slice(0, -1) : line;

    return [
      ...(index > 0 && !lines[index - 1].trimEnd().endsWith("\\")
        ? [" "]
        : []),
      <InlineMarkdown key={`${index}-${text}`} text={text} />,
      ...(hardBreak ? [<br key={`break-${index}`} />] : []),
    ];
  });
}

function MarkdownContent({ markdown }: { markdown: string }) {
  const lines = markdown.split(/\r?\n/);
  const blocks: React.ReactNode[] = [];

  for (let index = 0; index < lines.length; ) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const Heading = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
      blocks.push(
        <Heading key={`heading-${index}`}>
          <InlineMarkdown text={heading[2]} />
        </Heading>,
      );
      index += 1;
      continue;
    }

    if (/^-\s+/.test(line)) {
      const items: string[][] = [];
      while (index < lines.length && /^-\s+/.test(lines[index].trim())) {
        const item = [lines[index].trim().replace(/^-\s+/, "")];
        index += 1;
        while (
          index < lines.length &&
          lines[index].trim() &&
          !/^(?:#{1,6}\s+|-\s+)/.test(lines[index].trim())
        ) {
          item.push(lines[index].trim());
          index += 1;
        }
        items.push(item);
      }

      blocks.push(
        <ul key={`list-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={`item-${itemIndex}`}>{renderParagraph(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(?:#{1,6}\s+|-\s+)/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push(<p key={`paragraph-${index}`}>{renderParagraph(paragraph)}</p>);
  }

  return <div className="legal-copy">{blocks}</div>;
}

export default function LegalDocument({
  fileName,
}: {
  fileName: "privacy.md" | "terms.md";
}) {
  const markdown = readFileSync(
    join(process.cwd(), "public", fileName),
    "utf8",
  );

  return (
    <main className="min-h-screen bg-[var(--bg)] px-4 pb-20 pt-6 sm:px-6 sm:pt-8">
      <div className="section-shell">
        <header className="flex items-center justify-between border-b border-white/[.08] pb-5">
          <a href="/" aria-label="Hempon Group home">
            <Image
              src="/assets/logo.svg"
              alt="Hempon Group"
              width={170}
              height={56}
              className="h-auto w-[135px] invert sm:w-[155px]"
              priority
            />
          </a>
          <nav className="flex gap-4 text-xs text-white/55 sm:gap-6">
            <a className="transition hover:text-white" href="/privacy-policy">
              Privacy
            </a>
            <a className="transition hover:text-white" href="/terms">
              Terms
            </a>
            <a className="transition hover:text-white" href="/">
              Home
            </a>
          </nav>
        </header>

        <article className="mx-auto max-w-3xl py-12 sm:py-16">
          <MarkdownContent markdown={markdown} />
          <a
            href="/"
            className="mt-12 inline-flex text-sm text-[var(--accent)] transition hover:text-white"
          >
            ← Back to Hempon Group
          </a>
        </article>
      </div>
    </main>
  );
}
