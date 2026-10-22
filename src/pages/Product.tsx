import Layout from "@/components/Layout";
import { media } from "@/content/media";
import SlotMedia from "@/components/SlotMedia";
import EarlyAccessButton from "@/components/EarlyAccessButton";

const productSections = [
  { title: "Profiles that tell your story.", text: "No forced prompts, no boxes to tick. Your profile unfolds like a short story about your life: your photographs, your passions, your favourite corners of the city and the quiet rituals that make you who you are.", slots: [media.how.s1] },
  { title: "Connect with life's moments.", text: 'Share a photograph or a short video from your day. It lives for 48 hours, then gently fades away. When someone sees it and feels "that is me too", they can send you a Vibe or an Invite.', slots: media.how.s2 },
  { title: "Where someone actually asks.", text: "An Invite holds one simple plan: coffee, a long walk or dinner. No schedules, no pressure, just the courage to ask. Accept, and the rest is yours to write.", slots: media.how.s3 },
  { title: "Meet before you meet.", text: "Step into the Virtual Date Room for ten minutes together on video, with icebreakers to make the first words easy. See the smile, hear the laugh, and decide together whether to meet.", slots: media.how.s4 },
  { title: "Safety, built in.", text: "Add a live selfie, taken in the app, to earn your Selfie Badge. Members see your city, never your exact location. Every photograph is reviewed, and every report is read by a real person who cares.", slots: [media.how.s5] },
];

const Product = () => (
  <Layout>
    <section className="pt-32 md:pt-44 pb-16">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h1 className="tracking-[0.01em] text-4xl md:text-5xl font-display font-normal text-foreground animate-fade-up">
          How Elyxer works.
        </h1>
        <p className="mt-6 text-base md:text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
          Every part of Elyxer is made with one hope: that you meet someone worth remembering.
        </p>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-5xl">
        {productSections.map((s, i) => (
          <div
            key={s.title}
            data-reveal
            className={`ls-product-step flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-14 py-14 ${
              i < productSections.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex-1 w-full">
              {i === 3 ? (
                <div className="ls-video-frame relative mx-auto max-w-sm">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-soft">
                    <SlotMedia slot={s.slots[0]} alt={`${s.title} 1`} className="h-full w-full object-cover" />
                    <span className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground/70 px-3 py-1 text-xs font-sans font-medium text-primary-foreground">
                      10:00
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 w-24 md:w-28 aspect-[3/4] overflow-hidden rounded-lg border-2 border-background shadow-soft">
                    <SlotMedia slot={s.slots[1]} alt={`${s.title} 2`} className="h-full w-full object-cover" />
                  </div>
                </div>
              ) : (
              <div className={`ls-product-photos mx-auto w-full max-w-[440px] ${s.slots.length > 1 ? "grid grid-cols-2 gap-3" : ""}`}>
                {s.slots.map((slot, n) => <SlotMedia key={n} slot={slot} alt={`${s.title} ${n + 1}`} className="w-full aspect-[4/5] object-cover rounded-xl shadow-soft" />)}
              </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <span className="font-sans text-lg font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="tracking-[0.01em] text-xl md:text-2xl font-display font-normal text-foreground mb-4">
                {s.title}
              </h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                {s.text}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-12 text-center"><EarlyAccessButton /></div>
      </div>
    </section>
  </Layout>
);

export default Product;
