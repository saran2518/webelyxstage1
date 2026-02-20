import Layout from "@/components/Layout";
import coupleHero from "@/assets/couple-hero.jpg";
import coupleLgbtqMen from "@/assets/couple-lgbtq-men.jpg";
import coupleCafe from "@/assets/couple-cafe.jpg";
import coupleGarden from "@/assets/couple-garden.jpg";
import coupleParkVideo from "@/assets/couple-park.mp4";

const productSections = [
  {
    title: "Profiles constructed with purpose",
    text: "Every profile on Elyxer is designed to reveal character, values, and emotional depth — not just appearance. Our structured profile framework invites authenticity and discourages performative self-presentation.",
    image: coupleHero,
    video: undefined,
    imageAlt: "Elegant couple in an art gallery",
  },
  {
    title: "Sophistication beneath the surface",
    text: "Behind every interaction lies a thoughtful architecture of compatibility analysis, behavioral modeling, and emotional intelligence mapping. The technology is invisible — the experience is intuitive.",
    image: coupleLgbtqMen,
    video: undefined,
    imageAlt: "Two men sharing an intimate moment on a rooftop at sunset",
  },
  {
    title: "Interaction that advances with intention",
    text: "Conversations on Elyxer follow a deliberate arc. Each stage of interaction is designed to build trust progressively, ensuring both participants feel safe, respected, and genuinely curious about each other.",
    image: coupleCafe,
    video: undefined,
    imageAlt: "Couple at a sunlit cafe",
  },
  {
    title: "Curated Spaces",
    text: "Beyond one-on-one connections, Elyxer offers intimate group experiences — curated spaces for shared interests, guided conversations, and communal reflection. Connection isn't always one-to-one; sometimes it begins in community.",
    image: coupleGarden,
    video: undefined,
    imageAlt: "Couple walking through a beautiful garden",
  },
  {
    title: "Trust as infrastructure",
    text: "Trust isn't a feature — it's the foundation. Identity verification, behavioral accountability, and transparent moderation ensure that every participant can engage with confidence and peace of mind.",
    image: undefined,
    video: coupleParkVideo,
    imageAlt: "Couple sharing a moment",
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
      <div className="container mx-auto px-6 max-w-5xl">
        {productSections.map((s, i) => (
          <div
            key={s.title}
            className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-14 py-14 ${
              i < productSections.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex-1 w-full">
              <div className="rounded-xl overflow-hidden shadow-soft">
                {s.video ? (
                  <video
                    src={s.video}
                    className="w-full h-56 md:h-72 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="w-full h-56 md:h-72 object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <span className="font-serif text-lg font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
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
