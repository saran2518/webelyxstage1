import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { social } from "@/content/media";
import InstagramGlyph from "@/components/InstagramGlyph";
import FacebookGlyph from "@/components/FacebookGlyph";

const contactCards = [
  {
    title: "Support",
    text: "Help with your account, early access or anything in the app.",
    email: "support@elyxer.co",
    href: "mailto:support@elyxer.co",
  },
  {
    title: "Feedback",
    text: "Your suggestions shape Elyxer. Tell us what you love and what you would change.",
    email: "support@elyxer.co",
    href: "mailto:support@elyxer.co?subject=Feedback",
  },
  {
    title: "Grievances",
    text: "Grievance Officer: Sarankumar Kothandakumar. For complaints under the IT Rules, 2021 and the DPDP Act, 2023.",
    email: "grievance@proapexinnovations.com",
    href: "mailto:grievance@proapexinnovations.com",
  },
];

const Contact = () => (
  <Layout>
    <section>
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-4 block animate-fade-up">
          Contact
        </span>
        <h1 className="tracking-[0.01em] text-4xl md:text-5xl font-display font-normal text-foreground animate-fade-up">
          We would love to hear from you.
        </h1>
        <p className="mt-6 text-base md:text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
          Questions, thoughts or something we could do better? Write to us and a real person from the Elyxer team will get back to you.
        </p>
      </div>
    </section>

    <section className="pb-16 md:pb-20" data-reveal>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-xl border border-primary/25 bg-card p-8 shadow-soft"
            >
              <h2 className="tracking-[0.01em] text-xl font-display font-normal text-foreground">
                {card.title}
              </h2>
              <p className="mt-4 flex-1 font-sans text-sm text-muted-foreground leading-relaxed">
                {card.text}
              </p>
              <a
                href={card.href}
                className="mt-6 font-sans text-sm font-medium text-primary break-all transition-opacity duration-300 hover:opacity-75"
              >
                {card.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20 border-t border-border" data-reveal>
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="font-sans text-sm text-foreground">
          Elyxer is a product of ProApex Innovations Private Limited.
        </p>
        <p className="mt-4 flex items-start gap-2 font-sans text-sm text-muted-foreground leading-relaxed">
          <MapPin size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
          <span>
            Unit 101, Oxford Towers, 139, HAL Old Airport Road, Kodihalli, Bengaluru, Karnataka - 560008, India
          </span>
        </p>
      </div>
    </section>

    <section className="py-16 md:py-20 border-t border-border" data-reveal>
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="tracking-[0.01em] text-2xl font-display font-normal text-foreground">
          Follow Elyxer
        </h2>
        <div className="mt-6 flex items-center gap-5">
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Elyxer on Instagram"
            className="transition-opacity duration-300 hover:opacity-75"
          >
            <InstagramGlyph size={28} gradient />
          </a>
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Elyxer on Facebook"
            className="transition-opacity duration-300 hover:opacity-75"
          >
            <FacebookGlyph size={28} />
          </a>
        </div>
      </div>
    </section>

    <section className="pb-32 md:pb-28" data-reveal>
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="font-sans text-base text-muted-foreground">
          Looking for a quick answer? Visit our{" "}
          <Link
            to="/help"
            className="font-medium text-primary transition-opacity duration-300 hover:opacity-75"
          >
            Help &amp; FAQ
          </Link>
          .
        </p>
      </div>
    </section>
  </Layout>
);

export default Contact;
