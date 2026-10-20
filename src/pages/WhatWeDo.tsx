import Layout from "@/components/Layout";
import { media } from "@/content/media";

const sections = [
  { label: "Our vision.", title: "A kinder way to love.", content: "We imagine a world where people are cherished for their warmth, their curiosity and the way they live, not reduced to a list of preferences. Elyxer is our first step towards that world.", image: media.what.vision, imageAlt: "Couple sharing a quiet moment on a beach" },
  { label: "Our mission.", title: "Built to get you on real dates.", content: "Fewer endless conversations, more evenings worth remembering. Every part of Elyxer, from Moments to Invites to the Virtual Date Room, exists to bring two people face to face.", image: media.what.mission, imageAlt: "Couple spending time together at a café" },
  { label: "Our story.", title: "Why Elyxer exists.", content: 'Elyxer began with a simple feeling: modern dating had forgotten the romance of being introduced. We wanted to bring back the magic of someone saying, "I think you two would love each other." The name comes from elixir, a little magic for the way we meet, and it is said the same way: eh-LIX-er.', image: media.what.story, imageAlt: "Couple enjoying time outdoors" },
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

    {sections.map((s, i) => (
      <section key={s.label} className="py-16 md:py-20" data-reveal>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>
            <div className="flex-1">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-4 block animate-fade-up">
                {s.label}
              </span>
              <h2 className="tracking-[0.01em] text-2xl md:text-3xl font-display font-normal text-foreground mb-5 animate-fade-up-delay-1">
                {s.title}
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed animate-fade-up-delay-2">
                {s.content}
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-xl overflow-hidden shadow-soft-lg aspect-[4/5] max-w-[460px] mx-auto w-full">
                <img
                  src={s.image.src}
                  alt={s.imageAlt}
                  className="w-full h-full object-cover"
                  style={s.image.focus ? { objectPosition: s.image.focus } : undefined}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {i < sections.length - 1 && (
            <div className="mt-16 border-b border-border" />
          )}
        </div>
      </section>
    ))}
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
