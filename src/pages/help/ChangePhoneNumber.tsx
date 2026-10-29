import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const ChangePhoneNumber = () => (
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
          How do I change my phone number?
        </h1>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="space-y-6 font-sans text-base text-muted-foreground leading-relaxed animate-fade-up-delay-2">
          <p>
            For your security, the phone number linked to your Elyxer account
            cannot be changed. Your number is how we confirm it&apos;s really
            you each time you sign in.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            If you no longer have access to your old number
          </h2>
          <p>
            If you added and verified an email address during sign-up, you can
            still sign in with that email.
          </p>
          <p>
            If you can&apos;t sign in at all, write to us and we&apos;ll help.
            We can&apos;t move your account to a new number, but we can delete
            the account linked to your old number. You can then create a fresh
            account with your current number.
          </p>

          <div className="rounded-lg border border-border bg-card px-5 py-4 shadow-soft">
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Please note: deleting your old account permanently erases it,
              including your profile, photos and conversations. This can&apos;t
              be undone.
            </p>
          </div>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            What to include when you write to us
          </h2>
          <ul className="list-disc list-inside space-y-2 font-sans text-base text-muted-foreground leading-relaxed">
            <li>The phone number linked to your old account</li>
            <li>Written confirmation that we may delete your old account</li>
          </ul>
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

export default ChangePhoneNumber;
