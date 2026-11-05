import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = { q: string; a: ReactNode };
type FaqSection = { category: string; items: FaqItem[] };

const faqSections: FaqSection[] = [
  { category: "General", items: [
    { q: "What is Elyxer?", a: "A dating app built to get you on real dates, where you are chosen for who you are." },
    { q: "When does it launch?", a: "Early access is open now. Discovery opens city by city, starting with Bengaluru." },
  ] },
  { category: "Profile", items: [
    { q: "How do I create my profile?", a: "During sign-up. It reads like a short story about your life." },
    { q: "Can I edit it later?", a: "Yes, anytime. Only your name and date of birth stay fixed." },
    { q: "How does gender work on Elyxer?", a: (
      <>
        Elyxer is an open community. Choose how you identify, and decide whether it shows on your profile.{" "}
        <Link to="/help/identity#gender" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">
          Read more
        </Link>
      </>
    ) },
    { q: "Why do you ask for my pronouns?", a: (
      <>
        So others can refer to you correctly. Sharing them on your profile is optional.{" "}
        <Link to="/help/identity#pronouns" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">
          Read more
        </Link>
      </>
    ) },
    { q: "Why do you ask about sexual orientation?", a: (
      <>
        It helps us choose better recommendations for you. Showing it on your profile is optional.{" "}
        <Link to="/help/identity#sexual-orientation" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">
          Read more
        </Link>
      </>
    ) },
    { q: "How do I choose who I'd like to meet?", a: (
      <>
        Select all that apply, or choose Open to all. You can change it anytime.{" "}
        <Link to="/help/interested-in" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">
          Read more
        </Link>
      </>
    ) },
    { q: "What are dating goals?", a: (
      <>
        Up to two goals that show what you&apos;re looking for right now.{" "}
        <Link to="/help/dating-goals" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">
          Read more
        </Link>
      </>
    ) },
  ] },
  { category: "Account", items: [
    { q: "How do I change my phone number?", a: (
      <>
        For your security, the number linked to your account can&apos;t be changed.{" "}
        <Link to="/help/change-phone-number" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">
          Read more
        </Link>
      </>
    ) },
    { q: "Can I change my name later?", a: (
      <>
        No. Your name can&apos;t be changed once your profile is set up.{" "}
        <Link to="/help/name-and-age#name" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">
          Read more
        </Link>
      </>
    ) },
    { q: "Can I change my age later?", a: (
      <>
        No. Your date of birth can&apos;t be changed once your profile is set up.{" "}
        <Link to="/help/name-and-age#age" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">
          Read more
        </Link>
      </>
    ) },
  ] },
  { category: "Safety", items: [
    { q: "How does Elyxer keep me safe?", a: "Live selfies, reviewed photos, and your city shown, never your exact location." },
    { q: "Can I report or block someone?", a: "Yes, from any profile or chat. Every report is read by our team." },
  ] },
  { category: "Moments and Invites", items: [
    { q: "What are Moments?", a: "Glimpses of your day, live for 48 hours." },
    { q: "How do Invites work?", a: "One simple plan, such as coffee, a long walk or dinner. Accept, and take it from there." },
    { q: "When can I start using them?", a: "Discovery and core features open soon. As an early member, you will be among the first." },
  ] },
  { category: "Privacy", items: [
    { q: "Is my data safe?", a: "We collect only what we need and never sell it." },
    { q: "Can I delete my account?", a: "Yes, from Settings, at any time." },
    { q: "How do I get or delete my data?", a: (
      <>
        To delete your account, open Elyxer and go to Settings › Data and Privacy › Delete account, or visit our{" "}
        <Link to="/help#delete-account" className="text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity">
          Delete account page
        </Link>
        . For a copy of your data, email support@elyxer.co with the subject &quot;Data request&quot;.
      </>
    ) },
  ] },
];

const HelpFAQ = () => (
  <Layout>
    <section className="pt-32 md:pt-44 pb-16">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h1 className="tracking-[0.01em] text-4xl md:text-5xl font-display font-normal text-foreground animate-fade-up">
          Help & FAQ
        </h1>
        <p className="mt-6 text-base md:text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
          Answers to common questions about Elyxer.
        </p>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-3xl">
        {faqSections.map((section) => (
          <div key={section.category} className="mb-12">
            <h2 className="tracking-[0.01em] text-lg font-display font-normal text-foreground mb-4">
              {section.category}
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {section.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`${section.category}-${i}`}
                  className="rounded-lg border border-border bg-card px-5 shadow-soft"
                >
                  <AccordionTrigger className="font-sans text-sm font-medium text-foreground py-4 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}

        <section id="delete-account" aria-labelledby="delete-account-heading" className="scroll-mt-28 md:scroll-mt-32 mt-20 pt-16 border-t border-border">
          <h2 id="delete-account-heading" className="tracking-[0.01em] text-2xl md:text-3xl font-display font-normal text-foreground mb-8">
            Delete your account and data
          </h2>
          <div className="space-y-6 font-sans text-base text-muted-foreground leading-relaxed">
            <p>
              Elyxer is an app by ProApex Innovations Private Limited. You can delete your Elyxer account and its data at any time.
            </p>

            <h3 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
              Delete in the app
            </h3>
            <p>
              Open Elyxer and go to Settings › Data and Privacy › Delete account.
            </p>

            <h3 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
              Delete without the app
            </h3>
            <p>
              Don&apos;t have the app any more? Email{" "}
              <a href="mailto:support@elyxer.co" className="ls-inline-email">support@elyxer.co</a>{" "}
              from any email address, with the subject &quot;Delete my account&quot; and the phone number on your account. We will confirm by email when your account has been deleted.
            </p>
            <div className="pt-2">
              <Button asChild className="btn-glow h-auto rounded-lg px-7 py-3.5 font-sans text-sm font-medium shadow-soft">
                <a href="mailto:support@elyxer.co?subject=Delete%20my%20account">
                  Email support@elyxer.co
                </a>
              </Button>
            </div>

            <h3 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
              What is deleted
            </h3>
            <p>
              Your profile, photos, Moments, Vibes, Invites, connections and chats are removed from Elyxer straight away.
            </p>

            <h3 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
              What we keep, and for how long
            </h3>
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

            <h3 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
              Get a copy of your data
            </h3>
            <p>
              Email{" "}
              <a href="mailto:support@elyxer.co" className="ls-inline-email">support@elyxer.co</a>{" "}
              with the subject &quot;Data request&quot;.
            </p>

            <h3 className="tracking-[0.01em] text-lg font-display font-normal text-foreground pt-4">
              Questions or complaints
            </h3>
            <p>
              Questions:{" "}
              <a href="mailto:support@elyxer.co" className="ls-inline-email">support@elyxer.co</a>
            </p>
            <p>
              Complaints:{" "}
              <a href="mailto:grievance@elyxer.co" className="ls-inline-email">grievance@elyxer.co</a>{" "}
              (Grievance Officer: Sarankumar Kothandakumar)
            </p>
          </div>
        </section>

        <div className="text-center mt-16">
          <p className="font-sans text-sm text-muted-foreground mb-3">
            Still curious?
          </p>
          <a
            href="mailto:support@elyxer.co"
            className="font-display text-2xl font-normal tracking-[0.01em] text-primary ls-plain-email transition-opacity duration-300 hover:opacity-75"
          >
            support@elyxer.co
          </a>
        </div>

      </div>
    </section>
  </Layout>
);

export default HelpFAQ;
