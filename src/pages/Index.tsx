import Layout from "@/components/Layout";
import { media, social } from "@/content/media";
import SlotMedia from "@/components/SlotMedia";
import EarlyAccessButton from "@/components/EarlyAccessButton";
import { Camera, Coffee, Eye, Heart, Leaf, ShieldCheck, Sparkles, Users, Video } from "lucide-react";
import InstagramGlyph from "@/components/InstagramGlyph";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

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

const Index = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const updateActiveCard = () => {
    const track = carouselRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    if (!(card instanceof HTMLElement)) return;
    setActiveCard(Math.min(features.length - 1, Math.max(0, Math.round(track.scrollLeft / (card.offsetWidth + 14)))));
  };
  const goToCard = (index: number) => {
    const track = carouselRef.current;
    const card = track?.children[index];
    if (!track || !(card instanceof HTMLElement)) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft - 20, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  return <Layout>
    {/* Hero */}
    <section className="ls-hero relative h-screen supports-[height:100svh]:h-[100svh] min-h-[600px] flex items-end overflow-hidden">
      <div className="ls-hero-photo absolute inset-0">
        <picture className="block h-full w-full bg-foreground">
          <source media="(max-width: 767px)" srcSet={media.home.heroMobile || media.home.hero} />
          <img
            src={media.home.hero}
            alt="Couple embracing on a rainy evening"
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-[70%_35%]" />
        </picture>
      </div>
      <div className="relative container mx-auto px-6 pb-10 md:pb-16 pt-32">
        <div className="max-w-[640px]">
          <span className="ls-hero-mobile-label hidden">Early access · Bengaluru</span>
          <h1 className="text-[clamp(2.25rem,3.6vw,3.25rem)] font-display font-normal leading-[1.1] tracking-[0.01em] text-primary-foreground animate-fade-up [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
            Chosen for who you are.
          </h1>
          <p className="mt-5 text-[clamp(1.125rem,1.6vw,1.5rem)] font-display font-normal tracking-[0.01em] text-accent animate-fade-up-delay-1 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">Built to get you on real dates.</p>
          <p className="mt-6 max-w-2xl text-lg font-sans text-primary-foreground/80 leading-relaxed animate-fade-up-delay-1 [text-shadow:0_1px_10px_rgba(0,0,0,0.55)]">
            For everyone who has ever hoped to be truly seen. Here, you are loved for the life you live and the heart you bring.
          </p>
          <div className="ls-hero-desktop-action mt-10 flex flex-wrap gap-4 animate-fade-up-delay-2">
            <EarlyAccessButton />
          </div>
        </div>
      </div>
      <div className="ls-hero-bottom-bar hidden"><EarlyAccessButton /></div>
    </section>


    {/* Divider */}
    <div className="w-full h-px bg-border" />

    {/* Principles */}
    <section className="ls-section ls-pillars py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto" data-reveal>
          <span className="font-sans uppercase">What we stand for</span>
          <h2 className="mt-6 text-[28px] md:text-[40px] leading-[1.2] font-display font-normal tracking-[0.01em] text-foreground">
            We believe dating should feel natural, safe and real.
          </h2>
          <div className="ls-hairline mx-auto mt-8" />
        </div>
        <ol className="ls-pillar-grid mt-16" data-reveal-stagger>
          {[
            { icon: Users, title: "A healthy community.", body: "Kind, genuine people, here for the right reasons." },
            { icon: ShieldCheck, title: "Safety you can feel.", body: "Live selfies, reviewed photos, every report read." },
            { icon: Sparkles, title: "An exceptional experience.", body: "Calm, beautiful and effortless." },
            { icon: Leaf, title: "Real, not artificial.", body: "No swiping, no games, just real connections." },
            { icon: Eye, title: "Seen as a person.", body: "No filters, just who you truly are." },
          ].map(({ icon: Icon, title, body }) => (
            <li key={title} data-reveal-child className="ls-pillar">
              <div className="ls-pillar-icon">
                <Icon size={32} strokeWidth={1.25} aria-hidden="true" />
              </div>
              <div className="ls-hairline-sm" />
              <h3 className="mt-5 text-xl font-display font-normal tracking-[0.01em] text-foreground">{title}</h3>
              <p className="ls-pillar-body mt-3 font-sans text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Middle band */}
    <section className="ls-photo-band ls-photo-band-mobile md:hidden">
      <SlotMedia slot={media.home.band} alt="Couple cycling together on a misty road" className="ls-band-photo w-full aspect-[4/3] object-cover" />
      <div className="ls-band-words">
        <h2 className="font-display">Built to get you on real dates.</h2>
        <p className="mt-6">Love was never meant to live on a screen. Elyxer is made for the moment two people decide to meet: the first coffee, the long walk, the evening that becomes a story.</p>
      </div>
    </section>
    <section className="ls-photo-band relative overflow-hidden hidden md:flex items-center py-32 md:py-24 md:min-h-[min(56.25vw,85vh)]">
      <div className="absolute inset-0">
        <picture className="block h-full w-full bg-foreground">
          <img
            src={media.home.band}
            alt="Couple cycling together on a misty road"
            className="h-full w-full object-cover object-[70%_40%]"
          />
        </picture>
      </div>
      <div className="relative container mx-auto px-6 max-md:pt-14" data-reveal>
        <div className="max-w-[420px] text-left max-md:mx-auto max-md:max-w-none max-md:text-center">
          <h2 className="text-3xl md:text-4xl font-display font-normal tracking-[0.01em] text-primary-foreground [text-shadow:0_2px_4px_rgba(0,0,0,0.75),0_4px_20px_rgba(0,0,0,0.55)]">
            Built to get you on real dates.
          </h2>
          <p className="mt-6 text-base md:text-lg font-sans text-primary-foreground leading-relaxed [text-shadow:0_1px_3px_rgba(0,0,0,0.75),0_3px_16px_rgba(0,0,0,0.55)]">
            Love was never meant to live on a screen. Elyxer is made for the moment two people decide to meet: the first coffee, the long walk, the evening that becomes a story.
          </p>
        </div>
      </div>
    </section>


    <section className="ls-section ls-steps py-16 md:py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center" data-reveal>
          <span className="font-sans uppercase">How it works</span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-normal tracking-[0.01em] text-foreground mb-12">From hello to a real date</h2>
        </div>
        <ol className="mt-4" data-reveal-stagger>
          {[
            { icon: Camera, title: "Share a moment.", body: "A glimpse of your day, live for 48 hours." },
            { icon: Heart, title: "Be recognised.", body: "Someone sees themselves in it and reaches out." },
            { icon: Video, title: "Meet before you meet.", body: "Ten minutes on video to feel the spark." },
            { icon: Coffee, title: "Go on the date.", body: "Coffee, a walk or dinner. The real beginning." },
          ].map(({ icon: Icon, title, body }) => (
            <li key={title} data-reveal-child className="ls-step">
              <div className="ls-step-icon">
                <Icon size={32} strokeWidth={1.25} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-display font-normal tracking-[0.01em] text-foreground">{title}</h3>
              <p className="ls-step-body mt-3 text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Feature cards with images */}
    <section className="ls-section ls-features py-24 md:py-32 mt-8 md:mt-12">
      <div className="container mx-auto px-6">
        <div ref={carouselRef} onScroll={updateActiveCard} className="ls-feature-track grid md:grid-cols-3 gap-8" data-reveal-stagger>
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
        <div className="ls-carousel-dots hidden" aria-label="Feature photos">
          {features.map((feature, index) => <Button key={feature.title} variant="ghost" size="icon" aria-label={`Show ${feature.title}`} aria-pressed={activeCard === index} onClick={() => goToCard(index)}><span className={activeCard === index ? "is-active" : ""} /></Button>)}
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
          <SlotMedia slot={media.home.cta} alt="Couple talking together on a park bench" className="w-full aspect-[2/3] object-cover" />
        </div>
        <div className="bg-foreground px-6 py-14">
          <ClosingWords className="text-center" />
        </div>
      </div>
      {/* Desktop: full-bleed photo with the words on the empty left side */}
      <div className="relative hidden md:flex md:items-center md:min-h-[min(56.25vw,80vh)] md:py-24">
        <div className="absolute inset-0">
          <SlotMedia slot={media.home.cta} alt="Couple talking together on a park bench" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-6">
          <ClosingWords className="max-w-md text-left [text-shadow:0_2px_16px_rgba(0,0,0,0.65)]" />
        </div>
      </div>
    </section>

    {/* Follow our story */}
    <section className="ls-follow">
      <div className="container mx-auto px-6 text-center">
        <span className="ls-follow-hairline" aria-hidden="true" />
        <p className="ls-follow-eyebrow">Follow our story</p>
        <p className="ls-follow-line">Glimpses, stories and early news from Elyxer.</p>
        <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="ls-follow-link">
          <span className="ls-follow-icon" aria-hidden="true">
            <InstagramGlyph size={28} gradient />
          </span>
          <span className="ls-follow-handle">@elyxer.dating</span>
        </a>
      </div>
    </section>
  </Layout>;
};


export default Index;
