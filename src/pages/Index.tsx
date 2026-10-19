import Layout from "@/components/Layout";
import { media } from "@/content/media";
import SlotMedia from "@/components/SlotMedia";
import EarlyAccessButton from "@/components/EarlyAccessButton";

const features = [
  { title: "No filters on who you are.", description: "We left out the filters that judge people: religion, ethnicity, income, smoking and drinking. You are seen for what you love and how you live.", image: media.home.card1 },
  { title: "Someone actually asks.", description: "An Invite carries one simple plan: coffee, a long walk or dinner. No endless small talk.", image: media.home.card2 },
  { title: "Meet before you meet.", description: "Start with a ten-minute video date inside the app. Add a live selfie to earn your Selfie Badge. Report and block are always one tap away.", image: media.home.card3 },
];

const Index = () =>
<Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <picture className="block h-full w-full">
          <source media="(max-width: 767px)" srcSet={media.home.heroMobile} />
          <img
            src={media.home.hero}
            alt="Couple sitting together on a hilltop at sunset"
            className="parallax-slow h-full w-full object-cover object-[70%_50%] max-md:object-[50%_50%]" />
        </picture>

        <div className="absolute inset-0 bg-foreground/50" />
        <div className="aurora" />
      </div>
      <div className="relative container mx-auto px-6 pb-2 md:pb-3 pt-32">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal leading-[1.15] tracking-normal text-primary-foreground animate-fade-up">
            Chosen for who you are.
          </h1>
          <p className="mt-5 text-xl md:text-2xl font-serif text-accent animate-fade-up-delay-1">Built to get you on real dates.</p>
          <p className="mt-6 text-lg font-sans text-primary-foreground/80 leading-relaxed animate-fade-up-delay-1">
            A dating app where you are seen for your interests, your life and your character, never your religion, ethnicity or income.
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
    <section className="py-16 md:py-20" data-reveal>
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
          What we stand for.
        </h2>
        <p className="mt-5 text-lg md:text-xl font-sans text-muted-foreground leading-relaxed">
          No judgement filters · Real people · Real dates
        </p>
      </div>
    </section>

    {/* Architecture section */}
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <picture className="block h-full w-full">
          <source media="(max-width: 767px)" srcSet={media.home.bandMobile} />
          <img
            src={media.home.band}
            alt="Couple laughing together at a cafe table in the rain"
            className="parallax-slow h-full w-full object-cover object-[70%_50%] max-md:object-[50%_50%]"
          />
        </picture>
        <div className="absolute inset-0 bg-foreground/55" />
      </div>
      <div className="relative container mx-auto px-6 max-w-3xl text-center" data-reveal>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground">
          Built to get you on real dates.
        </h2>
        <p className="mt-6 text-base md:text-lg font-sans text-primary-foreground/80 leading-relaxed">
          Most apps keep you swiping. Elyxer is built around the moment someone actually asks. Share a moment from your day, see who lives life like you, and send an invite for coffee, a long walk or dinner.
        </p>
      </div>
    </section>


    {/* Feature cards with images */}
    <section className="py-24 md:py-32 mt-8 md:mt-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6" data-reveal-stagger>
          {features.map((f) =>
        <div
          key={f.title}
          data-reveal-child
          className="glass-light lift rounded-xl overflow-hidden">

              <SlotMedia
            slot={f.image}
            alt={f.title}
            className="w-full h-48 object-cover" />

              <div className="p-8 md:p-10">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
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

    {/* Final CTA */}
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0"><SlotMedia slot={media.home.cta} alt="Couple sharing a moment in the kitchen" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-foreground/60" /></div>
      <div className="relative container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground">
          In Elyxer, you are the chosen.
        </h2>
        <p className="mt-5 text-base font-sans text-primary-foreground/80">
          Early access is open in Bengaluru. The first 10,000 members get one week of Plus, free, when discovery opens.
        </p>
        <div className="mt-10">
          <EarlyAccessButton />
        </div>
      </div>
    </section>

  </Layout>;


export default Index;