import { ReactNode } from "react";

export const Section = ({ id, title, children }: { id?: string; title: string; children: ReactNode }) => (
  <section id={id} className="py-10 md:py-20 border-b border-border last:border-b-0 scroll-mt-24">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-foreground mb-6 md:mb-8 tracking-tight">
      {title}
    </h2>
    <div className="space-y-4 md:space-y-5 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
      {children}
    </div>
  </section>
);

export const SubSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="mt-8 md:mt-10">
    <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-normal text-foreground mb-3 md:mb-4 tracking-tight">
      {title}
    </h3>
    <div className="space-y-3 md:space-y-4">{children}</div>
  </div>
);

export const LegalTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="my-5 md:my-6">
    <div className="hidden sm:block overflow-x-auto rounded-2xl border border-border bg-secondary/40 shadow-soft">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left font-sans text-xs font-semibold uppercase tracking-widest text-primary px-5 py-4"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border/60">
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-4 font-sans text-sm text-foreground/80 align-top leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="sm:hidden space-y-4">
      {rows.map((row, i) => (
        <div
          key={i}
          className="rounded-2xl border border-border bg-secondary/40 p-5 shadow-soft space-y-3"
        >
          {row.map((cell, j) => (
            <div key={j} className="space-y-1">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-primary">
                {headers[j]}
              </p>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">{cell}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export const Callout = ({ title, children }: { title?: string; children: ReactNode }) => (
  <div className="my-5 md:my-6 rounded-2xl border-l-2 border-primary bg-secondary/50 p-5 sm:p-6 md:p-7">
    {title && (
      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-2 md:mb-3">
        {title}
      </p>
    )}
    <div className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">{children}</div>
  </div>
);

export const LegalHero = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) => (
  <section className="pt-28 sm:pt-32 md:pt-44 pb-12 md:pb-20 border-b border-border">
    <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
      <p className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-primary mb-4 md:mb-6 animate-fade-up">
        {eyebrow}
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-normal text-foreground tracking-tight animate-fade-up-delay-1 leading-[1.05]">
        {title}
      </h1>
      <p className="mt-6 md:mt-8 max-w-2xl font-sans text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up-delay-2">
        {subtitle}
      </p>
      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-y-2 sm:gap-y-3 sm:gap-x-10 font-sans text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground animate-fade-up-delay-3">
        <span><span className="text-foreground/60">Effective</span> · [INSERT DATE]</span>
        <span><span className="text-foreground/60">Updated</span> · [INSERT DATE]</span>
        <span><span className="text-foreground/60">Version</span> · 1.0</span>
      </div>
    </div>
  </section>
);

export const LegalFooterNote = ({ children }: { children: ReactNode }) => (
  <div className="mt-20 pt-10 border-t border-border">
    <p className="font-sans text-xs uppercase tracking-widest text-primary text-center mb-4">
      Compliance
    </p>
    <p className="font-sans text-sm text-muted-foreground italic text-center max-w-2xl mx-auto leading-relaxed">
      {children}
    </p>
    <p className="mt-6 font-sans text-xs text-muted-foreground text-center">
      © {new Date().getFullYear()} PROAPEX INNOVATIONS PRIVATE LIMITED. All rights reserved.
    </p>
  </div>
);
