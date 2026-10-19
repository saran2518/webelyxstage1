import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

const faqSections = [
  { category: "General", items: [
    { q: "What is Elyxer?", a: "A dating app built to get you on real dates. You are chosen for who you are, never for your religion, ethnicity or income." },
    { q: "How is Elyxer different?", a: "We left out the filters that judge people. Instead of endless swiping, you connect through Moments and Invites, and you can meet first in a ten-minute Virtual Date Room." },
    { q: "When does Elyxer launch?", a: "Early access is open in Bengaluru, and sign-ups are open across India. Discovery opens in each city once the community is ready. The first 10,000 members get one week of Plus, free, when discovery opens." },
  ] },
  { category: "Account and profile", items: [
    { q: "How do I create my profile?", a: "You build it during sign-up. It reads like a story about your life: your photos, your interests and the things you love doing." },
    { q: "Can I edit my profile later?", a: "Yes, at any time. Your name and date of birth are the only details that cannot be changed once your account is created." },
  ] },
  { category: "Safety and trust", items: [
    { q: "How does Elyxer keep me safe?", a: "Add a live selfie in the app to earn the Selfie Badge. Other members see your city, never your exact location. Every photo is reviewed before it goes live." },
    { q: "Can I report or block someone?", a: "Yes, from any profile or chat. Our team reviews every report, and urgent reports are handled first." },
  ] },
  { category: "Moments and Invites", items: [
    { q: "What are Moments?", a: "A photo or video from your day that stays live for 48 hours. When someone recognises themselves in it, they can send you a Vibe or an Invite." },
    { q: "How do Invites work?", a: "An Invite asks you out with one simple plan, such as coffee, a long walk or dinner. Accept it, and the two of you take it from there." },
  ] },
  { category: "Privacy", items: [
    { q: "How is my data handled?", a: "We collect only what we need and never sell your data. Our Privacy Policy explains what we collect and why." },
    { q: "Can I delete my account?", a: "Yes, from Settings. Your account is deactivated for 30 days in case you change your mind, then permanently deleted." },
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
          <p className="font-sans text-sm text-muted-foreground mb-5">
            Cannot find what you are looking for?
          </p>
          <Button asChild className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3 text-sm font-sans font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 shadow-soft">
            <a href="mailto:support@elyxer.com">Write to us</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default HelpFAQ;
