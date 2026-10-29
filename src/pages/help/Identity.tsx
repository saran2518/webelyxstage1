import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Identity = () => (
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
          Gender, pronouns and orientation
        </h1>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="space-y-6 font-sans text-base text-muted-foreground leading-relaxed animate-fade-up-delay-2">
          <p>
            Elyxer is an open community. Everyone is welcome here, whoever you are, however you identify and whoever you love. These choices help you show up as yourself and help us introduce you to the right people.
          </p>
          <p className="font-sans text-sm">
            <Link to="#gender" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">Gender</Link>
            <span aria-hidden="true" className="text-muted-foreground">{" · "}</span>
            <Link to="#pronouns" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">Pronouns</Link>
            <span aria-hidden="true" className="text-muted-foreground">{" · "}</span>
            <Link to="#sexual-orientation" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">Sexual orientation</Link>
          </p>
          <h2 id="gender" className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4 scroll-mt-32 md:scroll-mt-36">
            Gender
          </h2>
          <p>
            Start with the option that fits you best: Man, Woman or Non-binary. If you&apos;d like to say more, tap the edit icon to add a more specific identity, such as Transgender man. You can add more than one.
          </p>
          <p>
            Your selection helps us choose the profiles you see and who sees you. Who you&apos;d like to meet is a separate choice that you make yourself.
          </p>
          <h2 id="pronouns" className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4 scroll-mt-32 md:scroll-mt-36">
            Pronouns
          </h2>
          <p>
            Pronouns are the words people use when they talk about you, such as she/her, he/him or they/them. Sharing yours helps others refer to you correctly. Select up to two. If yours aren&apos;t listed, choose Other (self-describe) and add them in your own words.
          </p>
          <h2 id="sexual-orientation" className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4 scroll-mt-32 md:scroll-mt-36">
            Sexual orientation
          </h2>
          <p>
            Choose the option that describes you best, such as Straight, Gay, Lesbian, Bisexual, Pansexual, Asexual or Queer. Your selection helps us choose better recommendations for you.
          </p>
          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Your profile, your choice
          </h2>
          <p>
            Showing your gender, pronouns or sexual orientation on your profile is optional, and each has its own Show on your profile tick box. If you leave it unticked, it stays private. This is personal, and we never sell your data.
          </p>
          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Change it anytime
          </h2>
          <p>
            Identity can grow and change. You can update any of these, and whether they show on your profile, at any time from Edit Profile.
          </p>
          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Respect for everyone
          </h2>
          <p>
            Everyone deserves to be treated with respect. Misgendering someone, ignoring their pronouns, or harassing, judging or outing someone because of who they are or who they love goes against our{" "}
            <Link to="/community-guidelines" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">
              Community Guidelines
            </Link>
            . If someone makes you feel unwelcome, report them from their profile or chat. Every report is read by our team.
          </p>
          <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
            Not seeing your identity?
          </h2>
          <p>
            We&apos;re always learning. If an identity that matters to you is missing, write to us and let us know.
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

export default Identity;
