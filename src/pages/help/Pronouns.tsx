import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Pronouns = () => (
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
          Pronouns
        </h1>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="space-y-6 font-sans text-base text-muted-foreground leading-relaxed animate-fade-up-delay-2">
          <p>
            Pronouns are the words people use when they talk about you, such as
            she/her, he/him or they/them. Sharing yours helps others refer to
            you correctly, and it&apos;s one more way Elyxer stays an open
            community.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Choosing your pronouns
          </h2>
          <p>
            Select up to two pronouns from the list. If yours aren&apos;t
            listed, choose Other (self-describe) and add them in your own
            words.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Your profile, your choice
          </h2>
          <p>
            Showing your pronouns is optional. Tick Show on your profile if
            you&apos;d like others to see them. If you leave it unticked, they
            stay private.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Change it anytime
          </h2>
          <p>
            You can update your pronouns, and whether they show on your
            profile, at any time from Edit Profile.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Respect for everyone
          </h2>
          <p>
            Use the pronouns people share with you. Deliberately misgendering
            someone goes against our{" "}
            <Link to="/community-guidelines" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">
              Community Guidelines
            </Link>
            . If someone makes you feel unwelcome, report them from their
            profile or chat. Every report is read by our team.
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

export default Pronouns;
