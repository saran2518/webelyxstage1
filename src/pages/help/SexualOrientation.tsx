import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const SexualOrientation = () => (
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
          Sexual orientation
        </h1>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="space-y-6 font-sans text-base text-muted-foreground leading-relaxed animate-fade-up-delay-2">
          <p>
            Elyxer is an open community, and you&apos;re welcome here whoever
            you love. Sharing your sexual orientation helps us introduce you to
            people who are right for you.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Choosing your orientation
          </h2>
          <p>
            Choose the option that describes you best, such as Straight, Gay,
            Lesbian, Bisexual, Pansexual, Asexual or Queer.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Your profile, your choice
          </h2>
          <p>
            Showing your sexual orientation on your profile is optional. Tick
            Show on your profile if you&apos;d like others to see it. If you
            leave it unticked, it stays private. Your orientation is personal,
            and we never sell your data.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            How we use it
          </h2>
          <p>
            Your selection helps us choose better recommendations for you. Who
            you&apos;d like to meet is a separate choice that you make
            yourself.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Change it anytime
          </h2>
          <p>
            You can update your sexual orientation, and whether it shows on
            your profile, at any time from Edit Profile.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Respect for everyone
          </h2>
          <p>
            Everyone deserves to be treated with respect. Harassing, judging or
            outing someone because of who they love goes against our{" "}
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

export default SexualOrientation;
