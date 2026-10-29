import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const NameAndAge = () => (
  <Layout>
    <section className="pt-32 md:pt-44 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <nav aria-label="Breadcrumb" className="font-sans text-xs sm:text-sm text-muted-foreground animate-fade-up">
          <Link to="/help" className="hover:text-foreground transition-colors">
            Help & FAQ
          </Link>
          <span aria-hidden="true" className="mx-2">›</span>
          <span>Account</span>
        </nav>
        <h1 className="mt-6 tracking-[0.01em] text-4xl md:text-5xl font-display font-normal text-foreground animate-fade-up-delay-1">
          Name and date of birth
        </h1>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="space-y-6 font-sans text-base text-muted-foreground leading-relaxed animate-fade-up-delay-2">
          <p>
            For safety reasons, your name and date of birth can&apos;t be changed once your profile is set up, so please check them carefully during sign-up. We&apos;re building an authentic community, where people show up as who they really are.
          </p>
          <h2 id="name" className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4 scroll-mt-28 md:scroll-mt-32">
            Your name
          </h2>
          <p>
            A name that stays the same helps everyone know who they&apos;re talking to. It also stops anyone from taking on a new identity to get around a report or a block.
          </p>
          <h2 id="age" className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4 scroll-mt-28 md:scroll-mt-32">
            Your date of birth
          </h2>
          <p>
            A date of birth that stays the same means the age on every profile can be trusted. It also helps keep Elyxer a space for adults only.
          </p>
          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            What you can change
          </h2>
          <p>
            The rest of your profile, including your photos and your story, can be edited at any time from Edit Profile.
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

export default NameAndAge;
