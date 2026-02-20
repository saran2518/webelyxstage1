import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import phoneMockup from "@/assets/phone-mockup.png";

const features = [
  {
    title: "Alignment over excess",
    description:
      "Every connection begins with shared values and emotional resonance — not volume, not velocity.",
  },
  {
    title: "Intentionality over impulse",
    description:
      "Thoughtful interaction design that rewards deliberation, patience, and genuine curiosity.",
  },
  {
    title: "Clarity over ambiguity",
    description:
      "Transparent communication frameworks that foster trust from the very first exchange.",
  },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-[1.15] tracking-tight text-foreground animate-fade-up">
              Engineered for alignment. Designed for intention.
            </h1>
            <p className="mt-6 text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
              A refined connection platform built on emotional alignment, intentional interaction, and authentic presence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up-delay-2">
              <Link
                to="/early-access"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-sm font-sans font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 shadow-soft"
              >
                Get Early Access
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center justify-center rounded-lg border border-border px-7 py-3.5 text-sm font-sans font-medium text-foreground transition-all duration-300 hover:bg-secondary"
              >
                Explore the Product
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center animate-fade-up-delay-2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
            </div>
            <img
              src={phoneMockup}
              alt="Elyxer app preview"
              className="relative z-10 w-64 md:w-72 lg:w-80 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Architecture section */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground animate-fade-up">
          A refined architecture for modern connection.
        </h2>
        <p className="mt-6 text-base md:text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
          In a landscape of overstimulation and endless options, Elyxer restores clarity and deliberation to dating. We believe meaningful connection is not a matter of chance — it is a product of design.
        </p>
      </div>
    </section>

    {/* Feature cards */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`rounded-lg border border-border bg-card p-8 md:p-10 shadow-soft animate-fade-up-delay-${i + 1}`}
            >
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {f.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground animate-fade-up">
          Connection, composed.
        </h2>
        <p className="mt-5 text-base font-sans text-muted-foreground animate-fade-up-delay-1">
          Join a community of individuals who value depth, intention, and authentic connection.
        </p>
        <div className="mt-10 animate-fade-up-delay-2">
          <Link
            to="/early-access"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-sans font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 shadow-soft"
          >
            Request Invite
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
