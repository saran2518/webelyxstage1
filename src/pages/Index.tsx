import Layout from "@/components/Layout";
import { media } from "@/content/media";
import SlotMedia from "@/components/SlotMedia";
import EarlyAccessButton from "@/components/EarlyAccessButton";

const features = [
  { title: "Seen for who you are.", description: "Your profile reads like a story, written in the places you love, the passions you keep and the little rituals that make you, you.", image: media.home.card1 },
  { title: "Someone actually asks.", description: "An Invite is a simple, heartfelt plan: coffee, a long walk or dinner. No endless small talk, just a chance to meet.", image: media.home.card2 },
  { title: "Meet before you meet.", description: "A ten-minute video date inside the app, with gentle icebreakers to ease you in. Add a live selfie to earn your Selfie Badge.", image: media.home.card3 },
];

const ClosingWords = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <h2 className="text-3xl md:text-4xl font-display font-normal tracking-[0.01em] text-primary-foreground">
      In Elyxer, you are the chosen.
    </h2>
    <p className="mt-5 text-base font-sans text-primary-foreground/80">
      Early access is now open in Bengaluru. Be among the first to arrive, and enjoy one week of Plus, on us, when discovery opens.
    </p>
    <div className="mt-10">
      <EarlyAccessButton />
    </div>
  </div>
);

const Index = () =>
<Layout>
    {/* Hero */}
    <section className="ls-hero relative h-screen supports-[height:100svh]:h-[100svh] min-h-[600px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <picture className="block h-full w-full bg-foreground">
          <source media="(max-width: 767px)" srcSet={media.home.heroMobile} />
          <img
            src={media.home.hero}
            alt="Couple close together beside a rain-streaked cafe window"
            className="parallax-slow h-full w-full object-cover object-[58%_32%] max-md:object-[60%_45%] max-md:hero-mobile-photo" />
        </picture>

        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative container mx-auto px-6 pb-10 md:pb-16 pt-32">
        <div className="max-w-[640px]">
          <h1 className="text-[clamp(2.25rem,3.6vw,3.25rem)] font-display font-normal leading-[1.1] tracking-[0.01em] text-primary-foreground animate-fade-up">
            Chosen for who you are.
          </h1>
          <p className="mt-5 text-[clamp(1.125rem,1.6vw,1.5rem)] font-display font-normal tracking-[0.01em] text-accent animate-fade-up-delay-1">Built to get you on real dates.</p>
          <p className="mt-6 max-w-2xl text-lg font-sans text-primary-foreground/80 leading-relaxed animate-fade-up-delay-1">
            For everyone who has ever hoped to be truly seen. Here, you are loved for the life you live and the heart you bring.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up-delay-2">
            <EarlyAccessButton />
          </div>
        </div>
      </div>
    </section>


    {/* Divider */}
    <div className="w-full h-px bg-border" />

    {/* Principles intro */}
    <section className="ls-section ls-principles py-16 md:py-20" data-reveal>
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-display font-normal tracking-[0.01em] text-foreground">
          What we stand for.
        </h2>
        <p className="mt-5 text-lg md:text-xl font-sans text-muted-foreground leading-relaxed">
          Seen for who you are · Real people · Real dates
        </p>
      </div>
    </section>

    {/* Middle band */}
    <section className="ls-photo-band relative overflow-hidden flex items-center py-32 max-md:py-0 md:py-24 max-md:items-start max-md:min-h-[80vh] md:min-h-[min(56.25vw,85vh)]">
      <div className="absolute inset-0">
        <picture className="block h-full w-full bg-foreground">
          <source media="(max-width: 767px)" srcSet={media.home.bandMobile} />
          <img
            src={media.home.band}
            alt="Couple laughing together at a cafe table in the rain"
             className="h-full w-full object-cover object-[70%_30%] max-md:object-[60%_50%]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30 max-md:bg-gradient-to-b max-md:from-foreground/70 max-md:to-foreground/30" />
      </div>
      <div className="relative container mx-auto px-6 max-w-3xl text-center max-md:pt-14" data-reveal>
        <h2 className="text-3xl md:text-4xl font-display font-normal tracking-[0.01em] text-primary-foreground">
          Built to get you on real dates.
        </h2>
        <p className="mt-6 text-base md:text-lg font-sans text-primary-foreground/80 leading-relaxed">
          Love was never meant to live on a screen. Elyxer is made for the moment two people decide to meet: the first coffee, the long walk, the evening that becomes a story.
        </p>
      </div>
    </section>


    <section className="ls-section ls-steps py-16 md:py-20 border-b border-border" data-reveal>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-normal tracking-[0.01em] text-foreground text-center mb-12">From hello to a real date</h2>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Share a moment.", body: "The light through your window, the song on repeat, the coffee you never skip. A small piece of your day, live for 48 hours." },
            { title: "Be recognised.", body: "When someone sees themselves in your moment, they reach out with a Vibe or an Invite." },
            { title: "Meet before you meet.", body: "Ten minutes on video, from the comfort of your own space, to feel the spark before the first date." },
            { title: "Go on the date.", body: "Coffee, a long walk or dinner. The beginning every love story deserves." },
          ].map((step, i) => (
            <li key={step.title}>
              <span className="font-sans text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 mb-3 text-xl font-display font-normal tracking-[0.01em] text-foreground">{step.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Feature cards with images */}
    <section className="ls-section ls-features py-24 md:py-32 mt-8 md:mt-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8" data-reveal-stagger>
          {features.map((f) =>
        <div
          key={f.title}
          data-reveal-child
          className="glass-light lift rounded-xl overflow-hidden h-full flex flex-col">

              <SlotMedia
            slot={f.image}
            alt={f.title}
            className="w-full aspect-[4/5] max-h-[420px] object-cover" />

              <div className="p-8 md:p-10">
                <h3 className="text-xl font-display font-normal tracking-[0.01em] text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
        )}
        </div>
      </div>
    </section>

    <section className="ls-section ls-manifesto py-16 md:py-20 border-t border-border" data-reveal>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <span className="ls-sparkle" aria-hidden="true">✦</span>
        <blockquote className="text-2xl md:text-3xl font-display font-normal tracking-[0.01em] text-foreground leading-relaxed">
          “Somewhere, someone is hoping to meet a person exactly like you. We make it happen.”
        </blockquote>
      </div>
    </section>

    {/* Final CTA */}
    <section className="ls-closing relative overflow-hidden">
      {/* Phone: photo on top, words on a dark panel below so faces stay clear */}
      <div className="md:hidden">
        <div className="relative">
          <SlotMedia slot={media.home.cta} alt="Couple sharing a quiet moment on a rainy rooftop at night" className="w-full aspect-[2/3] object-cover object-[60%_35%]" />
          <div className="absolute inset-x-0 bottom-0 h-48" style={{ background: "linear-gradient(to bottom, hsl(var(--foreground) / 0) 0%, hsl(var(--foreground) / 0.7) 45%, hsl(var(--foreground) / 1) 82%, hsl(var(--foreground) / 1) 100%)" }} />
        </div>
        <div className="bg-foreground px-6 py-14">
          <ClosingWords className="text-center" />
        </div>
      </div>
      {/* Desktop: full-bleed photo with the words on the empty left side */}
      <div className="relative hidden md:flex md:items-center md:min-h-[min(56.25vw,80vh)] md:py-24">
        <div className="absolute inset-0">
          <SlotMedia slot={media.home.cta} alt="Couple sharing a quiet moment on a rainy rooftop at night" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(var(--foreground) / 0.9) 0%, hsl(var(--foreground) / 0.75) 30%, hsl(var(--foreground) / 0.35) 55%, hsl(var(--foreground) / 0.2) 100%)" }} />
        </div>
        <div className="relative container mx-auto px-6">
          <ClosingWords className="max-w-md text-left" />
        </div>
      </div>
    </section>

  </Layout>;


export default Index;