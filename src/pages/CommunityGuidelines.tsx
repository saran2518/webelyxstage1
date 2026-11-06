import Layout from "@/components/Layout";
import { Section } from "@/components/legal/LegalPrimitives";

const inlineLink = "text-primary underline underline-offset-4 decoration-1 hover:opacity-75 transition-opacity";

const CommunityGuidelines = () => (
  <Layout>
    <section className="pt-28 sm:pt-32 md:pt-44 pb-12 md:pb-20 border-b border-border">
      <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-normal text-foreground tracking-[0.01em] animate-fade-up-delay-1 leading-[1.05]">Community Guidelines</h1>
        <p className="mt-8 md:mt-10 font-sans text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground animate-fade-up-delay-2">
          Last updated November 01, 2026 · Version 1
        </p>
      </div>
    </section>
    <article className="pb-20 md:pb-32">
      <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
        <Section id="purpose-and-scope" title="1. Purpose and scope">
          <p>Elyxer is an adults-only dating and social connection service. These Guidelines apply to all activity on Elyxer, including profiles, photos, Moments, Vibes, Invites, messages, virtual sessions and AI-assisted features.</p>
          <p>Be truthful, respect boundaries and report harm. A connection, payment, Vibe, Invite or accepted date does not entitle anyone to another person’s attention, information or consent.</p>
        </Section>
        <Section id="adults-only-and-authentic-profiles" title="2. Adults only and authentic profiles">
          <ul className="list-disc pl-5 space-y-2">
            <li>You must be at least 18 years old to use Elyxer. Parental or guardian permission does not create an exception.</li>
            <li>Use your own account and current, genuine photos. Do not falsify your age, impersonate another person, use stolen photos, or misrepresent your identity, qualifications or experiences.</li>
            <li>Do not let a minor use your account, arrange dating access for a minor, or involve a minor in a virtual date.</li>
            <li>Do not use AI-generated people, deceptive face alterations or another person’s image to misrepresent yourself. Ordinary, non-deceptive photo adjustments are permitted.</li>
            <li>A Selfie Badge only indicates that a selfie was captured through Elyxer. It does not verify identity, age, liveness, background or safety.</li>
          </ul>
        </Section>
        <Section id="child-safety" title="3. Child safety: no images or information about children">
          <p>Do not upload, post, send or display a photo or video in which a child appears, including a child appearing alongside you. This applies to profile photos, Moments, messages, virtual sessions and any other Elyxer feature.</p>
          <p>This prohibition includes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>photos of your own childhood, even if you are now an adult;</li>
            <li>family, group, school or event photos that include a child;</li>
            <li>images in which a child is in the background or otherwise identifiable; and</li>
            <li>children’s names, contact details, school information or other identifying information.</li>
          </ul>
          <p>Do not crop, blur, disguise or edit an image to evade this rule. Choose a different image that contains no child.</p>
          <p>Child sexual abuse or exploitation is strictly prohibited. Do not groom, sexually solicit, sexualise or exploit anyone under 18; request, create, possess, share or link to child sexual abuse material; or use synthetic, altered or fictional content to evade these rules. Claimed consent, humour or roleplay is not an excuse.</p>
          <p>If you suspect an account belongs to a minor or encounter child-safety concerns, stop contact and report it through the in-app reporting tools or <a href="mailto:grievance@elyxer.co" className={inlineLink}>grievance@elyxer.co</a>. Do not download, forward or redistribute suspected illegal material. Provide the account or content reference and only the information needed to make the report.</p>
          <p>Elyxer may restrict access, preserve relevant evidence securely and make reports to the authorities where required by law.</p>
        </Section>
        <Section id="respect-boundaries-and-consent" title="4. Respect, boundaries and consent">
          <p>Do not engage in bullying, threats, stalking, coercion, repeated unwanted contact, hate speech or discriminatory abuse. Do not target people based on caste, religion, ethnicity, nationality, gender, gender identity, sexual orientation, disability or another protected or personal characteristic.</p>
          <p>Respect a refusal, block, request to stop or lack of engagement. Do not use another account, feature or channel to bypass someone’s boundary. Consent to a conversation, date or virtual session is not consent to sexual activity or recording. Anyone may change their mind or leave.</p>
        </Section>
        <Section id="sexual-content-and-exploitation" title="5. Sexual content and exploitation">
          <p>Do not upload, request, send or link to pornography, sexually explicit images or videos, depictions of sexual acts, non-consensual intimate content, sexual extortion, trafficking or commercial sexual services. Do not send unsolicited sexual messages or intimate images, or pressure anyone to provide intimate material.</p>
          <p>Profile and Moment content must be suitable for a non-explicit dating environment. Do not use nudity, underwear-focused or sexually suggestive profile images. Ordinary sports, beach or other activity photos are assessed in context.</p>
        </Section>
        <Section id="scams-and-prohibited-commercial-activity" title="6. Scams and prohibited commercial activity">
          <p>Do not use Elyxer to solicit money, loans, gift cards, investments, cryptocurrency, financial credentials or payment-card security information. Romance scams, phishing, blackmail, fraudulent fundraising and deceptive links are prohibited.</p>
          <p>Do not use Elyxer for escorting, paid sexual arrangements, unauthorised advertising, recruitment, affiliate spam or sales solicitation. An ordinary description of your profession is allowed, but it must not become a sales pitch. Never share your password or OTP.</p>
        </Section>
        <Section id="privacy-and-sharing" title="7. Privacy and sharing">
          <p>Do not disclose another person’s private information, such as their address, phone number, documents, private messages or location, without a lawful basis. Do not scrape profiles, build personal dossiers, track someone’s movements or use information to contact a person who has blocked you.</p>
          <p>Do not share screenshots or recordings of another user’s profile or communications outside their intended audience without permission, except where lawful and reasonably necessary to protect yourself, preserve evidence, obtain confidential legal advice or report to Elyxer or an appropriate authority. This exception does not permit public shaming, unlawful surveillance or redistribution of child sexual abuse material.</p>
          <p>Do not record or capture Elyxer virtual sessions. Any lawful evidence-preservation or reporting exception is narrow and does not authorise illegal recording. Elyxer cannot guarantee that another user will comply with these rules or prevent copies made outside the service.</p>
        </Section>
        <Section id="moments-and-virtual-sessions" title="8. Moments and virtual sessions">
          <p>Share only content you have the right to use. Do not post scams, infringement, threats, dangerous challenges, encouragement of self-harm, explicit material or deliberately deceptive content likely to harm others.</p>
          <p>Do not add a third party to a private virtual session without the other participant’s agreement. Do not use a session to intimidate someone, expose them to explicit conduct or continue after consent is withdrawn.</p>
        </Section>
        <Section id="ai-assisted-features-and-search" title="9. AI-assisted features and search">
          <p>When using AI assistance to write your profile, use your own information. Do not enter another person’s private details, sensitive information, identification documents, contact details or prohibited content. Do not ask AI to invent a persona, credentials or events. Review AI-generated text before publishing it.</p>
          <p>Do not use search to look up people by name, number or contact details; seek sexual, violent, drug-related or exploitative content; or uncover private sensitive information. Do not evade safeguards through coded terms, spelling changes, prompt injection or repeated requests. Search results are not verified assessments of a person’s character, safety or compatibility and do not reveal hidden information.</p>
        </Section>
        <Section id="platform-integrity-and-lawful-use" title="10. Platform integrity and lawful use">
          <p>Do not access Elyxer without authorisation, distribute malicious software, scrape or automate mass interactions, manipulate visibility, create commercial account farms, coordinate false reports, or bypass privacy controls, eligibility restrictions, bans or search safeguards.</p>
          <p>Do not create or share deceptive synthetic media, impersonations or intimate deepfakes. Follow applicable disclosure, labelling and provenance requirements. Do not remove legally required labels or use editing tools to conceal unlawful content.</p>
          <p>You must not use Elyxer to publish or share content that is unlawful, infringes another person’s rights, impersonates another person, harms children, violates privacy, promotes violence or otherwise violates applicable law, including the Information Technology Act, 2000 and applicable rules.</p>
        </Section>
        <Section id="reporting-and-enforcement" title="11. Reporting and enforcement">
          <p>Use the in-app Report or Block tools where available, or email <a href="mailto:grievance@elyxer.co" className={inlineLink}>grievance@elyxer.co</a> with the account or content reference and a description. You do not need to contact the reported user first. Good-faith reports are welcome; knowingly fabricated or malicious reports may result in action.</p>
          <p>Depending on the circumstances, Elyxer may remove content, warn a user, restrict features, suspend or terminate access, preserve relevant evidence, or make a legally required report. Serious child-safety concerns, threats, exploitation or scams may result in immediate protective restrictions without a prior warning.</p>
          <p>We assess reports and available evidence and use human review as appropriate. We normally notify affected users of enforcement action and available review, unless law, safety or an investigation requires limits. You may request review at <a href="mailto:grievance@elyxer.co" className={inlineLink}>grievance@elyxer.co</a>, preferably within 30 days. A review request does not require Elyxer to restore access while a safety risk remains and does not limit any statutory remedy.</p>
        </Section>
        <Section id="safety-and-contact" title="12. Safety and contact">
          <p>For immediate danger in India, call 112. You may also report criminal concerns to the appropriate police authority or at <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" className={inlineLink}>https://cybercrime.gov.in/</a>. You do not need to wait for Elyxer to respond.</p>
          <p>
Support: <a href="mailto:support@elyxer.co" className={inlineLink}>support@elyxer.co</a>            <br />
            Grievance Officer: Sarankumar K, Chief Executive Officer – Director            <br />
            Grievance email: <a href="mailto:grievance@elyxer.co" className={inlineLink}>grievance@elyxer.co</a>
          </p>
          <p>We may update these Guidelines to reflect changes to Elyxer, safety practices or applicable law. We will notify users of material changes through appropriate channels, normally in advance where practicable. These Guidelines should be read with Elyxer’s other policies. Applicable law prevails in the event of a conflict.</p>
        </Section>
      </div>
    </article>
  </Layout>
);

export default CommunityGuidelines;
