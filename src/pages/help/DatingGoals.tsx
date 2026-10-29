import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const DatingGoals = () => (
  <Layout>
    <section className="pt-32 md:pt-44 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <nav aria-label="Breadcrumb" className="font-sans text-xs sm:text-sm text-muted-foreground animate-fade-up">
          <Link to="/help" className="hover:text-foreground transition-colors">
            Help & FAQ
          </Link>
          <span aria-hidden="true" className="mx-2">›</span>
          <span>Profile</span>
        </nav>
        <h1 className="mt-6 tracking-[0.01em] text-4xl md:text-5xl font-display font-normal text-foreground animate-fade-up-delay-1">
          Dating goals
        </h1>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="space-y-6 font-sans text-base text-muted-foreground leading-relaxed animate-fade-up-delay-2">
          <p>
            Your dating goals show what you&apos;re looking for right now, so
            you can meet people who want something similar.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Choosing your goals
          </h2>
          <p>Select up to two that fit your dating mindset:</p>
          <ul className="list-disc list-inside space-y-2 font-sans text-base text-muted-foreground leading-relaxed">
            <li>
              <span className="text-foreground">Meaningful Connection:</span>{" "}
              trust, depth and commitment
            </li>
            <li>
              <span className="text-foreground">Keeping it Light:</span> fun,
              ease and smiles
            </li>
            <li>
              <span className="text-foreground">Travel Buddy:</span> journeys,
              stories and sunsets
            </li>
            <li>
              <span className="text-foreground">Shared Experiences:</span>{" "}
              moments, memories and laughter
            </li>
            <li>
              <span className="text-foreground">Discovery Mode:</span>{" "}
              curiosity, openness and flow
            </li>
          </ul>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            How we use it
          </h2>
          <p>
            Your goals help us choose better recommendations for you, so the
            people you see are looking for something similar.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Change it anytime
          </h2>
          <p>
            What you&apos;re looking for can change, and that&apos;s okay. You
            can update your goals at any time from Edit Profile.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Be honest about it
          </h2>
          <p>
            We&apos;re building an authentic community, where people show up as
            who they really are. Choosing goals that reflect what you really
            want makes it easier for everyone.
          </p>
        </div>

        <div className="text-center mt-16">
          <p className="font-sans text-sm text-muted-foreground mb-3">
            Have more questions?
          </p>
          <a
            href="mailto:support@elyxer.co"
            className="font-display text-2xl font-normal tracking-[0.01em] text-primary ls-plain-email transition-opacity duration-300 hover:opacity-75"
          >
            support@elyxer.co
          </a>
          <div className="mt-10">
            <Link
              to="/help"
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Help & FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default DatingGoals;
