import Layout from "@/components/Layout";
import { media } from "@/content/media";
import SlotMedia from "@/components/SlotMedia";
import EarlyAccessButton from "@/components/EarlyAccessButton";

const productSections = [
  { title: "Profiles that tell your story.", text: "Your profile reads like a story about your life, not a list of answers to forced prompts. Your photos, your interests, the way you spend a Sunday.", slots: [media.how.s1] },
  { title: "Connect with life's moments.", text: 'Share a moment from your day. It stays live for 48 hours. When someone sees it and thinks "I like this too", they can send you a Vibe or an Invite.', slots: media.how.s2 },
  { title: "Where someone actually asks.", text: "An Invite carries one plan: coffee, a long walk or dinner. Accept it, and the two of you take it from there.", slots: media.how.s3 },
  { title: "Meet before you meet.", text: "A ten-minute video date inside the app, with icebreakers to get you started. See if the spark is real before you meet in person.", slots: media.how.s4 },
  { title: "Safety, built in.", text: "Add a live selfie to earn your Selfie Badge. Other members see your city, never your exact location. Every photo is reviewed, and every report is read by our team.", slots: [media.how.s5] },
];

const Product = () => (
  <Layout>
    <section className="pt-32 md:pt-44 pb-16">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground animate-fade-up">
          How Elyxer works.
        </h1>
        <p className="mt-6 text-base md:text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
          Everything in Elyxer is built to take you from a profile to a real date.
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
              <div className={s.slots.length > 1 ? "grid grid-cols-2 gap-3" : "grid grid-cols-1"}>
                {s.slots.map((slot, n) => <SlotMedia key={n} slot={slot} alt={`${s.title} ${n + 1}`} className={`w-full object-cover rounded-xl shadow-soft ${s.slots.length === 4 ? "h-32 md:h-36" : "h-56 md:h-72"}`} />)}
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
        <div className="mt-12 text-center"><EarlyAccessButton /></div>
      </div>
    </section>
  </Layout>
);

export default Product;
