import { useState } from "react";
import Layout from "@/components/Layout";
import { media } from "@/content/media";
import { Button } from "@/components/ui/button";

const featuredArticle = {
  title: "Chosen for who you are.",
  excerpt: "What it truly means to be seen, and why we built a dating app around that feeling.",
  image: media.blog.featured,
};
const articles = [
  { title: "Why one plan beats a hundred hellos.", excerpt: "Coffee, a long walk, dinner. How a simple invitation can say more than weeks of small talk.", image: media.blog.a1 },
  { title: "The quiet romance of ordinary moments.", excerpt: "Sunday mornings in the park, the first coffee of the day. Why the smallest things reveal the most about us.", image: media.blog.a2 },
  { title: "Meet before you meet.", excerpt: "Ten minutes on video, from your own space, before the first date.", image: media.blog.a3 },
  { title: "Being yourself, beautifully.", excerpt: "Why the most attractive profile is always the most honest one.", image: media.blog.a4 },
];

const WorldOfDating = () => {
  const [email, setEmail] = useState("");

  return (
    <Layout>
      <section className="pt-32 md:pt-44 pb-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h1 className="tracking-[0.01em] text-4xl md:text-5xl font-display font-normal text-foreground animate-fade-up">
            The world of dating, reconsidered.
          </h1>
          <p className="mt-6 text-base md:text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
            Stories, reflections and gentle truths about love and modern connection, from the Elyxer team.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-soft animate-fade-up">
            <img
              src={featuredArticle.image.src}
              alt="Featured article"
              className="w-full aspect-[4/3] md:aspect-[16/9] object-cover"
              style={featuredArticle.image.focus ? { objectPosition: featuredArticle.image.focus } : undefined}
              loading="lazy"
            />
            <div className="p-8 md:p-12">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                Featured
              </span>
              <h2 className="tracking-[0.01em] text-2xl md:text-3xl font-display font-normal text-foreground mb-4">
                {featuredArticle.title}
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                {featuredArticle.excerpt}
              </p>
              <span className="font-sans text-xs text-muted-foreground">Coming soon</span>
            </div>
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
                className="rounded-xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow duration-300"
              >
                <img
                  src={a.image.src}
                  alt={a.title}
                  className="w-full aspect-[4/3] object-cover"
                  style={a.image.focus ? { objectPosition: a.image.focus } : undefined}
                  loading="lazy"
                />
                <div className="p-7">
                  <h3 className="tracking-[0.01em] text-lg font-display font-normal text-foreground mb-2">
                    {a.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-3">
                    {a.excerpt}
                  </p>
                  <span className="font-sans text-xs text-muted-foreground">Coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <h2 className="tracking-[0.01em] text-2xl md:text-3xl font-display font-normal text-foreground mb-4">
            Be the first to read.
          </h2>
          <p className="font-sans text-sm text-muted-foreground mb-8">
            Stories on love and connection, delivered when they are ready.
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
            <Button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-sans font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default WorldOfDating;
