import { ReactNode } from "react";

const link =
  "text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity break-words";

export const LegalDocHero = ({ eyebrow, title, updated }: { eyebrow: string; title: string; updated: string }) => (
  <section className="pt-28 sm:pt-32 md:pt-44 pb-12 md:pb-20 border-b border-border">
    <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
      <p className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-primary mb-4 md:mb-6 animate-fade-up">
        {eyebrow}
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-normal text-foreground tracking-[0.01em] animate-fade-up-delay-1 leading-[1.05]">
        {title}
      </h1>
      <p className="mt-8 md:mt-10 font-sans text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground animate-fade-up-delay-2">
        <span className="text-foreground/60">Last updated</span> · {updated}
      </p>
    </div>
  </section>
);

export const LegalContents = ({ items }: { items: { id: string; title: string }[] }) =>
  items.length === 0 ? null : (
    <nav aria-label="Contents" className="mt-10 md:mt-16 rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8 shadow-soft">
      <p className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-primary mb-4 md:mb-5">
        Contents
      </p>
      <ol className="grid gap-x-10 gap-y-2.5 md:grid-cols-2">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className="font-sans text-sm text-foreground/80 hover:text-primary transition-colors leading-snug"
            >
              {it.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );

export const DocSection = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} className="py-10 md:py-16 border-b border-border last:border-b-0 scroll-mt-28">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-normal text-foreground mb-5 md:mb-7 tracking-[0.01em] leading-snug">
      {title}
    </h2>
    <div className="space-y-4 md:space-y-5 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground">
      {children}
    </div>
  </section>
);

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="pt-4 md:pt-6 text-lg sm:text-xl font-display font-normal text-foreground tracking-[0.01em]">
    {children}
  </h3>
);

export const P = ({ children }: { children: ReactNode }) => <p>{children}</p>;

export const UL = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc pl-5 space-y-2.5 marker:text-primary">{children}</ul>
);

export const OL = ({ children }: { children: ReactNode }) => (
  <ol className="list-decimal pl-5 space-y-2 marker:text-primary">{children}</ol>
);

export const LI = ({ children }: { children: ReactNode }) => <li className="pl-1 space-y-2.5">{children}</li>;

export const A = ({ href, ext, children }: { href: string; ext?: boolean; children: ReactNode }) =>
  ext ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={link}>
      {children}
    </a>
  ) : (
    <a href={href} className={link}>
      {children}
    </a>
  );
