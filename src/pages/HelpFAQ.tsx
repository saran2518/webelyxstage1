import Layout from "@/components/Layout";
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
  ] },
  { category: "Account", items: [
    { q: "How do I change my phone number?", a: (
      <>
        For your security, the number linked to your account can&apos;t be changed.{" "}
        <Link to="/help/change-phone-number" className="text-primary hover:underline">
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
