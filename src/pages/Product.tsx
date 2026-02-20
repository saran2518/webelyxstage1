import Layout from "@/components/Layout";

const productSections = [
  {
    title: "Profiles constructed with purpose",
    text: "Every profile on Elyxer is designed to reveal character, values, and emotional depth — not just appearance. Our structured profile framework invites authenticity and discourages performative self-presentation.",
  },
  {
    title: "Sophistication beneath the surface",
    text: "Behind every interaction lies a thoughtful architecture of compatibility analysis, behavioral modeling, and emotional intelligence mapping. The technology is invisible — the experience is intuitive.",
  },
  {
    title: "Interaction that advances with intention",
    text: "Conversations on Elyxer follow a deliberate arc. Each stage of interaction is designed to build trust progressively, ensuring both participants feel safe, respected, and genuinely curious about each other.",
  },
  {
    title: "Curated Spaces",
    text: "Beyond one-on-one connections, Elyxer offers intimate group experiences — curated spaces for shared interests, guided conversations, and communal reflection. Connection isn't always one-to-one; sometimes it begins in community.",
  },
  {
    title: "Trust as infrastructure",
    text: "Trust isn't a feature — it's the foundation. Identity verification, behavioral accountability, and transparent moderation ensure that every participant can engage with confidence and peace of mind.",
  },
];

const Product = () => (
  <Layout>
    <section className="pt-32 md:pt-44 pb-16">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground animate-fade-up">
          The Architecture of Intentional Dating.
        </h1>
        <p className="mt-6 text-base md:text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
          Every layer of Elyxer is built to support depth, trust, and genuine human connection.
        </p>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-4xl">
        {productSections.map((s, i) => (
          <div
            key={s.title}
            className={`flex flex-col md:flex-row items-start gap-8 py-14 ${
              i < productSections.length - 1 ? "border-b border-border" : ""
            } ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="font-serif text-lg font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-4">
                {s.title}
              </h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                {s.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Product;
