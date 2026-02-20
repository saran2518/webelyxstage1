import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqSections = [
  {
    category: "General",
    items: [
      { q: "What is Elyxer?", a: "Elyxer is a curated dating platform designed around emotional alignment, intentional interaction, and authentic connection. It is not a swipe-based app — it is an architected experience for people who value depth." },
      { q: "How is Elyxer different from other dating apps?", a: "Unlike conventional dating platforms, Elyxer prioritizes quality over quantity. Every feature — from profile construction to conversation design — is built to foster genuine connection, not maximize engagement." },
      { q: "When will Elyxer launch?", a: "Elyxer is currently in early access. You can request an invite through our website to be among the first to experience the platform." },
    ],
  },
  {
    category: "Account & Profile",
    items: [
      { q: "How do I create my profile?", a: "Your profile is built through a guided process that captures your values, communication style, and what matters most to you in a connection. It's designed to reveal character, not just appearance." },
      { q: "Can I edit my profile after creation?", a: "Yes. Your profile is a living representation of who you are. You can update it at any time to reflect your evolving self." },
    ],
  },
  {
    category: "Safety & Trust",
    items: [
      { q: "How does Elyxer ensure safety?", a: "Safety is foundational to Elyxer. We implement identity verification, behavioral accountability systems, and transparent moderation to create a trusted environment for all users." },
      { q: "Can I report or block someone?", a: "Absolutely. Elyxer provides clear, accessible tools for reporting and blocking. Every report is reviewed promptly by our trust and safety team." },
    ],
  },
  {
    category: "Spaces & Invitations",
    items: [
      { q: "What are Curated Spaces?", a: "Curated Spaces are intimate group experiences designed around shared interests, guided conversations, and communal reflection. They offer a new way to connect beyond one-on-one matching." },
      { q: "How do invitations work?", a: "Elyxer operates on an invitation model to maintain community quality. You can request an invite through our website, or receive one from an existing member." },
    ],
  },
  {
    category: "Privacy",
    items: [
      { q: "How is my data handled?", a: "Your privacy is paramount. We collect only what's necessary, never sell your data, and give you full control over your information. Our privacy policy details every aspect of data handling." },
      { q: "Can I delete my account and data?", a: "Yes. You can delete your account and all associated data at any time. Deletion is permanent and complete." },
    ],
  },
];

const HelpFAQ = () => (
  <Layout>
    <section className="pt-32 md:pt-44 pb-16">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground animate-fade-up">
          Help & FAQ
        </h1>
        <p className="mt-6 text-base md:text-lg font-sans text-muted-foreground leading-relaxed animate-fade-up-delay-1">
          Find answers to common questions about Elyxer.
        </p>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-3xl">
        {faqSections.map((section) => (
          <div key={section.category} className="mb-12">
            <h2 className="text-lg font-serif font-semibold text-foreground mb-4">
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
            Can't find what you're looking for?
          </p>
          <button className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3 text-sm font-sans font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 shadow-soft">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  </Layout>
);

export default HelpFAQ;
