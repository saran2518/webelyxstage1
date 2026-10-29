import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const InterestedIn = () => (
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
          Who you&apos;re interested in dating
        </h1>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="space-y-6 font-sans text-base text-muted-foreground leading-relaxed animate-fade-up-delay-2">
          <p>
            Elyxer is an open community. Tell us who you&apos;d like to meet, and we&apos;ll use it to choose the profiles you see.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Choosing who you&apos;d like to meet
          </h2>
          <p>
            Select all that apply: Men, Women or Non-binary. If you&apos;re open to meeting anyone, choose Open to all.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            How we use it
          </h2>
          <p>
            Your choice helps us choose better recommendations for you. It&apos;s separate from your own gender and sexual orientation, which describe who you are.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Change it anytime
          </h2>
          <p>
            Who you&apos;re looking for can change, and that&apos;s okay. You can update it at any time.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Respect for everyone
          </h2>
          <p>
            Everyone here is part of an open community. Treat every person you meet with respect, whoever they are and whoever they love.
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

export default InterestedIn;
