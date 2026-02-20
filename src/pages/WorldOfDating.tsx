import { useState } from "react";
import Layout from "@/components/Layout";

const featuredArticle = {
  title: "The Case for Slow Dating in a Fast World",
  excerpt:
    "In an era optimized for speed, the most radical act of connection may be patience. We explore why slowing down is the new competitive advantage in modern dating.",
  date: "February 2026",
};

const articles = [
  {
    title: "Emotional Intelligence as a Dating Skill",
    excerpt: "Why understanding yourself is the first step to understanding someone else.",
    date: "January 2026",
  },
  {
    title: "Beyond the Profile: What Presence Really Means",
    excerpt: "How showing up authentically changes everything — online and off.",
    date: "December 2025",
  },
  {
    title: "The Architecture of Trust in Digital Spaces",
    excerpt: "Building platforms that prioritize safety without sacrificing spontaneity.",
    date: "November 2025",
  },
  {
    title: "Curated Spaces: The Future of Group Connection",
    excerpt: "Why the next frontier of dating isn't one-on-one — it's communal.",
    date: "October 2025",
  },
];

const WorldOfDating = () => {
  const [email, setEmail] = useState("");

  return (
    <Layout>
      <section className="pt-32 md:pt-44 pb-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground animate-fade-up">
            The World of Dating, Reconsidered.
          </h1>
          <p className="mt-6 text-base md:text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
            Perspectives on modern connection — thoughtful essays, research, and cultural commentary from the Elyxer editorial team.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-lg border border-border bg-card p-8 md:p-12 shadow-soft animate-fade-up">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              Featured
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
              {featuredArticle.title}
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
              {featuredArticle.excerpt}
            </p>
            <span className="font-sans text-xs text-muted-foreground">{featuredArticle.date}</span>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a) => (
              <div
                key={a.title}
                className="rounded-lg border border-border bg-card p-7 shadow-soft hover:shadow-soft-lg transition-shadow duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {a.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                  {a.excerpt}
                </p>
                <span className="font-sans text-xs text-muted-foreground">{a.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
            Stay considered.
          </h2>
          <p className="font-sans text-sm text-muted-foreground mb-8">
            Subscribe to receive thoughtful perspectives on modern dating, delivered monthly.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-sans font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default WorldOfDating;
