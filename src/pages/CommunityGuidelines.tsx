import Layout from "@/components/Layout";
import { LegalTable } from "@/components/legal/LegalPrimitives";
import { LegalDocHero, LegalContents, DocSection, P, UL, OL, LI, A, H3 } from "@/components/legal/LegalDoc";

const contents = [{"id": "section-1", "title": "1. Purpose and scope"}, {"id": "section-2", "title": "2. Adults only and authentic profiles"}, {"id": "section-3", "title": "3. Child safety: no images or information about children"}, {"id": "section-4", "title": "4. Respect, boundaries and consent"}, {"id": "section-5", "title": "5. Sexual content and exploitation"}, {"id": "section-6", "title": "6. Scams and prohibited commercial activity"}, {"id": "section-7", "title": "7. Privacy and sharing"}, {"id": "section-8", "title": "8. Moments and virtual sessions"}, {"id": "section-9", "title": "9. AI-assisted features and search"}, {"id": "section-10", "title": "10. Platform integrity and lawful use"}, {"id": "section-11", "title": "11. Reporting and enforcement"}, {"id": "section-12", "title": "12. Safety and contact"}];

const CommunityGuidelines = () => (
  <Layout>
    <LegalDocHero eyebrow="Legal · Community" title="Community Guidelines" updated="November 18, 2026" />
    <article className="pb-20 md:pb-32">
      <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
        <LegalContents items={contents} />
        <DocSection id="section-1" title={"1. Purpose and scope"}>
          <P>Elyxer is an adults-only dating and social connection service. These Guidelines apply to all activity on Elyxer, including profiles, photos, Moments, Vibes, Invites, messages, virtual sessions and AI-assisted features.</P>
          <P>Be truthful, respect boundaries and report harm. A connection, payment, Vibe, Invite or accepted date does not entitle anyone to another person’s attention, information or consent.</P>
        </DocSection>
        <DocSection id="section-2" title={"2. Adults only and authentic profiles"}>
          <UL>
            <LI>You must be at least 18 years old to use Elyxer. Parental or guardian permission does not create an exception.</LI>
            <LI>Use your own account and current, genuine photos. Do not falsify your age, impersonate another person, use stolen photos, or misrepresent your identity, qualifications or experiences.</LI>
            <LI>Do not let a minor use your account, arrange dating access for a minor, or involve a minor in a virtual date.</LI>
            <LI>Do not use AI-generated people, deceptive face alterations or another person’s image to misrepresent yourself. Ordinary, non-deceptive photo adjustments are permitted.</LI>
            <LI>A Selfie Badge only indicates that a selfie was captured through Elyxer. It does not verify identity, age, liveness, background or safety.</LI>
          </UL>
        </DocSection>
        <DocSection id="section-3" title={"3. Child safety: no images or information about children"}>
          <P><strong>Do not upload, post, send or display a photo or video in which a child appears, including a child appearing alongside you.</strong> This applies to profile photos, Moments, messages, virtual sessions and any other Elyxer feature.</P>
          <P>This prohibition includes:</P>
          <UL>
            <LI>photos of your own childhood, even if you are now an adult;</LI>
            <LI>family, group, school or event photos that include a child;</LI>
            <LI>images in which a child is in the background or otherwise identifiable; and</LI>
            <LI>children’s names, contact details, school information or other identifying information.</LI>
          </UL>
          <P>Do not crop, blur, disguise or edit an image to evade this rule. Choose a different image that contains no child.</P>
          <P>Child sexual abuse or exploitation is strictly prohibited. Do not groom, sexually solicit, sexualise or exploit anyone under 18; request, create, possess, share or link to child sexual abuse material; or use synthetic, altered or fictional content to evade these rules. Claimed consent, humour or roleplay is not an excuse.</P>
          <P>If you suspect an account belongs to a minor or encounter child-safety concerns, stop contact and report it through the in-app reporting tools or <A href="mailto:grievance@elyxer.co">grievance@elyxer.co</A>. Do not download, forward or redistribute suspected illegal material. Provide the account or content reference and only the information needed to make the report.</P>
          <P>Elyxer may restrict access, preserve relevant evidence securely and make reports to the authorities where required by law.</P>
        </DocSection>
        <DocSection id="section-4" title={"4. Respect, boundaries and consent"}>
          <P>Do not engage in bullying, threats, stalking, coercion, repeated unwanted contact, hate speech or discriminatory abuse. Do not target people based on caste, religion, ethnicity, nationality, gender, gender identity, sexual orientation, disability or another protected or personal characteristic.</P>
          <P>Respect a refusal, block, request to stop or lack of engagement. Do not use another account, feature or channel to bypass someone’s boundary. Consent to a conversation, date or virtual session is not consent to sexual activity or recording. Anyone may change their mind or leave.</P>
        </DocSection>
        <DocSection id="section-5" title={"5. Sexual content and exploitation"}>
          <P>Do not upload, request, send or link to pornography, sexually explicit images or videos, depictions of sexual acts, non-consensual intimate content, sexual extortion, trafficking or commercial sexual services. Do not send unsolicited sexual messages or intimate images, or pressure anyone to provide intimate material.</P>
          <P>Profile and Moment content must be suitable for a non-explicit dating environment. Profile photos and Moments must not show nudity, underwear or lingerie, or sexually suggestive poses. Swimwear in an ordinary beach, pool or sports setting is allowed. Photos are screened automatically when you upload them, and a photo that is flagged cannot be uploaded.</P>
        </DocSection>
        <DocSection id="section-6" title={"6. Scams and prohibited commercial activity"}>
          <P>Do not use Elyxer to solicit money, loans, gift cards, investments, cryptocurrency, financial credentials or payment-card security information. Romance scams, phishing, blackmail, fraudulent fundraising and deceptive links are prohibited.</P>
          <P>Do not use Elyxer for escorting, paid sexual arrangements, unauthorised advertising, recruitment, affiliate spam or sales solicitation. An ordinary description of your profession is allowed, but it must not become a sales pitch. Never share your password or OTP.</P>
        </DocSection>
        <DocSection id="section-7" title={"7. Privacy and sharing"}>
          <P>Do not disclose another person’s private information, such as their address, phone number, documents, private messages or location, without a lawful basis. Do not scrape profiles, build personal dossiers, track someone’s movements or use information to contact a person who has blocked you.</P>
          <P>Do not share screenshots or recordings of another user’s profile or communications outside their intended audience without permission, except where lawful and reasonably necessary to protect yourself, preserve evidence, obtain confidential legal advice or report to Elyxer or an appropriate authority. This exception does not permit public shaming, unlawful surveillance or redistribution of child sexual abuse material.</P>
          <P>Do not record or capture Elyxer virtual sessions. Any lawful evidence-preservation or reporting exception is narrow and does not authorise illegal recording. Elyxer cannot guarantee that another user will comply with these rules or prevent copies made outside the service.</P>
        </DocSection>
        <DocSection id="section-8" title={"8. Moments and virtual sessions"}>
          <P>Share only content you have the right to use. Do not post scams, infringement, threats, dangerous challenges, encouragement of self-harm, explicit material or deliberately deceptive content likely to harm others.</P>
          <P>Do not add a third party to a private virtual session without the other participant’s agreement. Do not use a session to intimidate someone, expose them to explicit conduct or continue after consent is withdrawn.</P>
        </DocSection>
        <DocSection id="section-9" title={"9. AI-assisted features and search"}>
          <P>When using AI assistance to write your profile, use your own information. Do not enter another person’s private details, sensitive information, identification documents, contact details or prohibited content. Do not ask AI to invent a persona, credentials or events. Review AI-generated text before publishing it.</P>
          <P>Do not use search to look up people by name, number or contact details; seek sexual, violent, drug-related or exploitative content; or uncover private sensitive information. Do not evade safeguards through coded terms, spelling changes, prompt injection or repeated requests. Search results are not verified assessments of a person’s character, safety or compatibility and do not reveal hidden information.</P>
        </DocSection>
        <DocSection id="section-10" title={"10. Platform integrity and lawful use"}>
          <P>Do not access Elyxer without authorisation, distribute malicious software, scrape or automate mass interactions, manipulate visibility, create commercial account farms, coordinate false reports, or bypass privacy controls, eligibility restrictions, bans or search safeguards.</P>
          <P>Do not create or share deceptive synthetic media, impersonations or intimate deepfakes. Follow applicable disclosure, labelling and provenance requirements. Do not remove legally required labels or use editing tools to conceal unlawful content.</P>
          <P>You must not use Elyxer to publish or share content that is unlawful, infringes another person’s rights, impersonates another person, harms children, violates privacy, promotes violence or otherwise violates applicable law, including the Information Technology Act, 2000 and applicable rules.</P>
        </DocSection>
        <DocSection id="section-11" title={"11. Reporting and enforcement"}>
          <P>Use the in-app Report or Block tools where available, or email <strong><A href="mailto:grievance@elyxer.co">grievance@elyxer.co</A></strong> with the account or content reference and a description. You do not need to contact the reported user first. Good-faith reports are welcome; knowingly fabricated or malicious reports may result in action.</P>
          <P>When you report a conversation or account, Elyxer’s trust and safety team may review the reported conversation, including both participants’ messages, along with related account records. We also review conversations where we suspect illegal activity or a serious safety risk, or where the law requires it. See our Privacy Policy for details.</P>
          <P>Depending on the circumstances, Elyxer may remove content, warn a user, restrict features, suspend or terminate access, preserve relevant evidence, or make a legally required report. Reports of serious harm, such as child-safety concerns, threats, sexual exploitation or scams, may lead to automatic suspension as soon as the report is received, followed by moderator review.</P>
          <P>We assess reports and available evidence and use human review as appropriate. We normally notify affected users of enforcement action and available review, unless law, safety or an investigation requires limits. You may request review at <A href="mailto:grievance@elyxer.co">grievance@elyxer.co</A>, preferably within 30 days. A review request does not require Elyxer to restore access while a safety risk remains and does not limit any statutory remedy.</P>
        </DocSection>
        <DocSection id="section-12" title={"12. Safety and contact"}>
          <P>For immediate danger in India, call <strong>112</strong>. You may also report criminal concerns to the appropriate police authority or at <A href="https://cybercrime.gov.in/" ext>https://cybercrime.gov.in/</A>. You do not need to wait for Elyxer to respond.</P>
          <P><strong>Support:</strong> <A href="mailto:support@elyxer.co">support@elyxer.co</A><br /><strong>Grievance Officer:</strong> Sarankumar K, Chief Executive Officer – Director<br /><strong>Grievance email:</strong> <A href="mailto:grievance@elyxer.co">grievance@elyxer.co</A></P>
          <P>We may update these Guidelines to reflect changes to Elyxer, safety practices or applicable law. We will notify users of material changes through appropriate channels, normally in advance where practicable. These Guidelines should be read with Elyxer’s other policies. Applicable law prevails in the event of a conflict.</P>
        </DocSection>
      </div>
    </article>
  </Layout>
);

export default CommunityGuidelines;
