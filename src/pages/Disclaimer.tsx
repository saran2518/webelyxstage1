import Layout from "@/components/Layout";
import { LegalTable } from "@/components/legal/LegalPrimitives";
import { LegalDocHero, LegalContents, DocSection, P, UL, OL, LI, A, H3 } from "@/components/legal/LegalDoc";

const contents = [{"id": "section-1", "title": "1. No Guarantee of Connections or User Conduct"}, {"id": "section-2", "title": "2. Personal Safety and Emergency Situations"}, {"id": "section-3", "title": "3. User Content and Opinions"}, {"id": "section-4", "title": "4. Testimonials and Success Stories"}, {"id": "section-5", "title": "5. External Links and Third-Party Services"}, {"id": "section-6", "title": "6. Features, Availability and Changes"}, {"id": "section-7", "title": "7. AI-Assisted Features, Selfie Badge and Screening"}, {"id": "section-8", "title": "8. No Professional Advice"}, {"id": "section-9", "title": "9. Limitation and Preservation of Legal Rights"}, {"id": "section-10", "title": "10. Contact"}];

const Disclaimer = () => (
  <Layout>
    <LegalDocHero eyebrow="Legal · Disclaimer" title="Disclaimer" updated="November 18, 2026" />
    <article className="pb-20 md:pb-32">
      <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
        <div className="pt-10 md:pt-16 space-y-4 md:space-y-5 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
          <P>This Disclaimer applies to your access to and use of Elyxer, operated by PROAPEX INNOVATIONS PRIVATE LIMITED (“<strong>Elyxer</strong>,” “<strong>we</strong>,” “<strong>us</strong>” or “<strong>our</strong>”). It should be read together with our Legal Terms, Privacy Policy and Community Guidelines. If there is any conflict, the applicable Legal Terms govern.</P>
        </div>
        <LegalContents items={contents} />
        <DocSection id="section-1" title={"1. No Guarantee of Connections or User Conduct"}>
          <P>Elyxer provides tools that may help adults discover and connect with other people. We do not guarantee that you will find a connection, receive a response, form a relationship or have a particular experience. We do not guarantee that user profiles, statements, photographs, intentions, age or identity are accurate or authentic.</P>
          <P>Users are responsible for their own conduct and decisions, including communications and interactions arranged through Elyxer or outside the app. We do not supervise or control independently arranged meetings or private interactions. Use caution online and when meeting, and review the safety provisions in our Legal Terms and Community Guidelines.</P>
        </DocSection>
        <DocSection id="section-2" title={"2. Personal Safety and Emergency Situations"}>
          <P>Elyxer is not an emergency-response service and cannot provide immediate assistance or guarantee your safety. If you or another person faces immediate danger in India, contact emergency services at <strong>112</strong>. You should use your own judgment, respect consent and boundaries, and take reasonable precautions when interacting with others.</P>
        </DocSection>
        <DocSection id="section-3" title={"3. User Content and Opinions"}>
          <P>Profiles, messages, photographs, testimonials and other material may be provided by users or other third parties. Such content represents the views and responsibility of its author, not necessarily Elyxer’s views. We do not endorse or guarantee the accuracy, completeness, reliability or suitability of user content.</P>
        </DocSection>
        <DocSection id="section-4" title={"4. Testimonials and Success Stories"}>
          <P>Testimonials, reviews, success stories or other user experiences displayed on Elyxer are individual experiences and are provided for informational purposes. They are not a guarantee that you will achieve similar results or have a similar experience. Experiences vary, and testimonials may not be representative of all users.</P>
        </DocSection>
        <DocSection id="section-5" title={"5. External Links and Third-Party Services"}>
          <P>Elyxer may contain links to third-party websites, applications, venues, products or services. These are provided for convenience only. Unless expressly stated otherwise, Elyxer does not own, control, endorse or assume responsibility for third-party content, availability, policies, products or services. Your use of third-party services is subject to their own terms and policies.</P>
        </DocSection>
        <DocSection id="section-6" title={"6. Features, Availability and Changes"}>
          <P>We may add, change, suspend or discontinue features, content or parts of the Services. We do not guarantee that the Services will be uninterrupted, error-free, secure or available at all times, or that any feature will remain available. Any feature descriptions or illustrations are informational and do not guarantee a particular outcome or level of performance.</P>
        </DocSection>
        <DocSection id="section-7" title={"7. AI-Assisted Features, Selfie Badge and Screening"}>
          <P>AI-assisted profile writing and search can produce inaccurate or incomplete results; review any AI-generated text before publishing it. Search results and relevance indicators are not assessments of a person’s character, safety or compatibility. The Selfie Badge shows only that a selfie was taken in the app; it does not verify identity, age or safety. Automated photo screening and moderation reduce risk but cannot detect every prohibited image or harmful user.</P>
        </DocSection>
        <DocSection id="section-8" title={"8. No Professional Advice"}>
          <P>Information made available through Elyxer is for general informational purposes and is not legal, medical, psychological, financial or other professional advice. You should seek advice from a suitably qualified professional where appropriate and should not rely on content within the Services as a substitute for such advice.</P>
        </DocSection>
        <DocSection id="section-9" title={"9. Limitation and Preservation of Legal Rights"}>
          <P>To the fullest extent permitted by applicable law, Elyxer disclaims responsibility for losses or harm arising from user content, another user’s conduct, third-party services or independently arranged interactions. Nothing in this Disclaimer excludes or limits Elyxer’s own legally actionable conduct, any obligation imposed by law, or any liability or consumer right that cannot lawfully be excluded or limited.</P>
        </DocSection>
        <DocSection id="section-10" title={"10. Contact"}>
          <P>For questions or concerns about this Disclaimer, contact <A href="mailto:support@elyxer.co">support@elyxer.co</A>. For safety or grievance matters, contact <A href="mailto:grievance@elyxer.co">grievance@elyxer.co</A>.</P>
        </DocSection>
      </div>
    </article>
  </Layout>
);

export default Disclaimer;
