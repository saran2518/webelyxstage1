import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const emailClass =
  "text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity";

const DeleteAccount = () => (
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
          Delete your Elyxer account
        </h1>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="space-y-6 font-sans text-base text-muted-foreground leading-relaxed animate-fade-up-delay-2">
          <p>
            Elyxer is an app by ProApex Innovations Private Limited. You can delete your Elyxer account and its data at any time.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Delete in the app
          </h2>
          <p>
            Open Elyxer and go to Settings › Data and Privacy › Delete account.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Delete without the app
          </h2>
          <p>
            Don&apos;t have the app any more? Email{" "}
            <a href="mailto:support@elyxer.co" className={emailClass}>support@elyxer.co</a>{" "}
            from any email address, with the subject &quot;Delete my account&quot; and the phone number on your account. We will confirm by email when your account has been deleted.
          </p>
          <div className="pt-2">
            <Button asChild className="btn-glow h-auto rounded-lg px-7 py-3.5 font-sans text-sm font-medium shadow-soft">
              <a href="mailto:support@elyxer.co?subject=Delete%20my%20account">
                Email support@elyxer.co
              </a>
            </Button>
          </div>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            What is deleted
          </h2>
          <p>
            Your profile, photos, Moments, Vibes, Invites, connections and chats are removed from Elyxer straight away.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            What we keep, and for how long
          </h2>
          <p>
            Some data must be kept by law. It is moved to a locked archive with restricted access, used only for legal and government requests, and then erased:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Sign-up details and content removed for breaking our rules: 180 days</li>
            <li>Personal data, traffic data and processing logs: 1 year</li>
            <li>Payment and tax records: for the period required by tax law</li>
          </ul>
          <p>
            If you sign up again with the same phone number, you start completely fresh.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Get a copy of your data
          </h2>
          <p>
            Email{" "}
            <a href="mailto:support@elyxer.co" className={emailClass}>support@elyxer.co</a>{" "}
            with the subject &quot;Data request&quot;.
          </p>

          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Questions or complaints
          </h2>
          <p>
            Questions:{" "}
            <a href="mailto:support@elyxer.co" className={emailClass}>support@elyxer.co</a>
          </p>
          <p>
            Complaints:{" "}
            <a href="mailto:grievance@elyxer.co" className={emailClass}>grievance@elyxer.co</a>{" "}
            (Grievance Officer: Sarankumar Kothandakumar)
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

export default DeleteAccount;
