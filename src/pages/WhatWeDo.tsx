import Layout from "@/components/Layout";

const sections = [
  {
    label: "Vision",
    title: "Redefining what dating can be.",
    content:
      "We envision a world where dating platforms are designed around alignment and intentional interaction — where every feature supports emotional intelligence, not behavioral exploitation. Elyxer exists to shift the paradigm from volume to value, from swiping to seeing.",
  },
  {
    label: "Mission",
    title: "Trust-led design. Curated connection.",
    content:
      "Our mission is to build a dating experience rooted in trust, transparency, and thoughtful design. We curate every interaction to foster genuine human connection — not engagement metrics. Every design decision we make begins with a single question: does this help people connect meaningfully?",
  },
  {
    label: "Brand Story",
    title: "Why Elyxer exists.",
    content:
      "Elyxer was born from a simple observation: modern dating platforms optimize for attention, not connection. They reward impulsivity, penalize vulnerability, and reduce people to profiles. We set out to design something fundamentally different — a platform that honors the complexity of human connection and treats every user as a whole person, not a data point.",
  },
];

const WhatWeDo = () => (
  <Layout>
    <section className="pt-32 md:pt-44 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground text-center animate-fade-up">
          What We Do
        </h1>
        <p className="mt-6 text-center text-base md:text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
          We architect connection. Every detail is intentional, every interaction is designed, every experience is curated.
        </p>
      </div>
    </section>

    {sections.map((s, i) => (
      <section key={s.label} className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-4 block animate-fade-up">
            {s.label}
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-5 animate-fade-up-delay-1">
            {s.title}
          </h2>
          <p className="font-sans text-base text-muted-foreground leading-relaxed animate-fade-up-delay-2">
            {s.content}
          </p>
          {i < sections.length - 1 && (
            <div className="mt-16 border-b border-border" />
          )}
        </div>
      </section>
    ))}
  </Layout>
);

export default WhatWeDo;
