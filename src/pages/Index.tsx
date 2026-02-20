import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import phoneMockup from "@/assets/phone-mockup.png";
import coupleHero from "@/assets/couple-hero.jpg";
import coupleLgbtqMen from "@/assets/couple-lgbtq-men.jpg";
import coupleBeachSunset from "@/assets/couple-beach-sunset.png";
import coupleCamden from "@/assets/couple-camden.jpg";
import coupleCooking from "@/assets/couple-cooking.png";

const features = [
{
  title: "Alignment over excess",
  description:
  "Every connection begins with shared values and emotional resonance — not volume, not velocity.",
  image: coupleBeachSunset
},
{
  title: "Intentionality over impulse",
  description:
  "Thoughtful interaction design that rewards deliberation, patience, and genuine curiosity.",
  image: coupleLgbtqMen
},
{
  title: "Clarity over ambiguity",
  description:
  "Transparent communication frameworks that foster trust from the very first exchange.",
  image: coupleHero
}];


const Index = () =>
<Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
        src={coupleCamden}
        alt="Couple enjoying coffee together at a cozy Camden Market café"
        className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container mx-auto px-6 pb-16 md:pb-24 pt-32">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-white animate-fade-up">
            ​A Refined Architecture for Real Connection
          </h1>
          <p className="mt-6 text-lg font-sans text-white/80 leading-relaxed animate-fade-up-delay-1">
            ​Thoughtfully engineered connection platform designed to elevate the modern dating experience through alignment, intentionality, and trust.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up-delay-2">
            <Link
            to="/early-access"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-sm font-sans font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 shadow-soft">
              Get Early Access
            </Link>
            <Link
            to="/product"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 text-sm font-sans font-medium text-white transition-all duration-300 hover:bg-white/10">
              Explore the Product
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Divider */}
    <div className="w-full h-px bg-border" />

    {/* Principles intro */}
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground animate-fade-up">
          Built on three core principles.
        </h2>
        <p className="mt-5 text-base md:text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
          Every element of Elyxer is shaped by a philosophy that puts depth ahead of distraction.
        </p>
      </div>
    </section>

    {/* Architecture section */}
    <section className="relative py-32 md:py-44">
      <div className="absolute inset-0">
        <img
          src={coupleCooking}
          alt="Couple cooking together in a modern kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>
      <div className="relative container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white animate-fade-up">
          A refined architecture for modern connection.
        </h2>
        <p className="mt-6 text-base md:text-lg font-sans text-white/80 leading-relaxed animate-fade-up-delay-1">
          In a landscape of overstimulation and endless options, Elyxer restores clarity and deliberation to dating. We believe meaningful connection is not a matter of chance — it is a product of design.
        </p>
      </div>
    </section>

    {/* Feature cards with images */}
    <section className="py-24 md:py-32 mt-8 md:mt-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) =>
        <div
          key={f.title}
          className={`rounded-xl border border-border bg-card overflow-hidden shadow-soft animate-fade-up-delay-${i + 1}`}>

              <img
            src={f.image}
            alt={f.title}
            className="w-full h-48 object-cover"
            loading="lazy" />

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
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground animate-fade-up">
          Connection, composed.
        </h2>
        <p className="mt-5 text-base font-sans text-muted-foreground animate-fade-up-delay-1">
          Join a community of individuals who value depth, intention, and authentic connection.
        </p>
        <div className="mt-10 animate-fade-up-delay-2">
          <Link
          to="/early-access"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-sans font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 shadow-soft">

            Request Invite
          </Link>
        </div>
      </div>
    </section>
  </Layout>;


export default Index;