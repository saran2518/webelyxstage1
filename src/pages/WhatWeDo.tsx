import Layout from "@/components/Layout";
import { media } from "@/content/media";

const story = { label: "Our story.", title: "Why Elyxer exists.", content: 'Elyxer began with a simple feeling: modern dating had forgotten the romance of being introduced. We wanted to bring back the magic of someone saying, "I think you two would love each other." The name comes from elixir, a little magic for the way we meet, and it is said the same way: eh-LIX-er.', image: media.what.story, imageAlt: "Couple enjoying time outdoors" };

const panels = [
  {
    label: "Our vision",
    title: "A world where everyone is chosen.",
    intro: "We imagine a world where dating feels wholesome again.",
    points: [
      ["Seen, not sorted.", "People are cherished for their warmth, curiosity and the way they live."],
      ["No artificial filters.", "No one is reduced to categories or checklists."],
      ["Truly seen.", "Finding someone special begins with being known for who you are."],
    ],
    closing: "Elyxer is our first step towards that world.",
  },
  {
    label: "Our mission",
    title: "Built to get you on real dates.",
    intro: "We are building a dating experience that takes you from a first hello to a real date, with ease.",
    points: [
      ["A safe, healthy community.", "Kind, genuine people, protected at every step."],
      ["An exceptional experience.", "Calm, beautiful and effortless to use."],
      ["Real connections.", "Moments, Invites and the Virtual Date Room, made to bring two people face to face."],
    ],
    closing: "Less time on screens. More time on real dates.",
  },
];

const WhatWeDo = () => (
  <Layout>
    <section className="pt-32 md:pt-44 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="tracking-[0.01em] text-4xl md:text-5xl font-display font-normal text-foreground text-center animate-fade-up">
          What we do
        </h1>
        <p className="mt-6 text-center text-base md:text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
          We are creating a new world of meeting people, where everyone is chosen for who they are.
        </p>
      </div>
    </section>

    <section className="ls-vm-strip" data-reveal>
      <div className="container mx-auto px-6">
        <div className="rounded-xl overflow-hidden aspect-[21/9] max-md:aspect-[4/3]">
          <img
            src={media.what.vision.src}
            alt="Couple sharing a quiet moment on a beach"
            className="w-full h-full object-cover"
            style={media.what.vision.focus ? { objectPosition: media.what.vision.focus } : undefined}
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className="ls-vm">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="ls-vm-grid" data-reveal-stagger>
          {panels.map((p) => (
            <div key={p.label} className="ls-vm-panel" data-reveal-child>
              <span className="ls-vm-eyebrow font-sans">{p.label}</span>
              <h2 className="mt-5 text-[28px] md:text-[34px] leading-[1.2] font-display font-normal tracking-[0.01em]">{p.title}</h2>
              <p className="ls-vm-intro mt-5 font-sans">{p.intro}</p>
              <ul className="mt-8 space-y-5">
                {p.points.map(([l, t]) => (
                  <li key={l} className="ls-vm-point">
                    <span className="ls-vm-star" aria-hidden="true">✦</span>
                    <p className="font-sans"><strong className="font-display font-normal">{l}</strong> {t}</p>
                  </li>
                ))}
              </ul>
              <div className="ls-vm-rule mt-10" />
              <p className="ls-vm-closing mt-5 font-sans">{p.closing}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20" data-reveal>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-4 block animate-fade-up">{story.label}</span>
            <h2 className="tracking-[0.01em] text-2xl md:text-3xl font-display font-normal text-foreground mb-5 animate-fade-up-delay-1">{story.title}</h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed animate-fade-up-delay-2">{story.content}</p>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-xl overflow-hidden shadow-soft-lg aspect-[4/5] max-w-[460px] mx-auto w-full">
              <img
                src={story.image.src}
                alt={story.imageAlt}
                className="w-full h-full object-cover"
                style={story.image.focus ? { objectPosition: story.image.focus } : undefined}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ls-beliefs py-16 md:py-20 border-t border-border" data-reveal>
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-display font-normal tracking-[0.01em] text-foreground mb-6">What we believe</h2>
        <ul className="list-disc pl-5 space-y-3 font-sans text-base text-muted-foreground leading-relaxed">
          <li>Everyone deserves to feel chosen.</li>
          <li>One real date is worth a thousand messages.</li>
          <li>Kindness is the most beautiful thing about a person.</li>
          <li>Safety should be felt, not just promised.</li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default WhatWeDo;
