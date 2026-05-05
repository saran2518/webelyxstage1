import Layout from "@/components/Layout";

const Section = ({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="mb-10">
    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">{title}</h2>
    <div className="space-y-4 font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
      {children}
    </div>
  </section>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-6">
    <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground mb-3">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const Table = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto my-4 rounded-lg border border-border">
    <table className="w-full text-sm">
      <thead className="bg-muted">
        <tr>
          {headers.map((h) => (
            <th key={h} className="text-left font-sans font-semibold text-foreground px-4 py-3">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-t border-border">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 font-sans text-muted-foreground align-top">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Callout = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <div className="my-4 rounded-lg border border-border bg-card p-5 shadow-soft">
    {title && <p className="font-sans font-semibold text-foreground mb-2">{title}</p>}
    <div className="font-sans text-sm text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

const PrivacyPolicy = () => (
  <Layout>
    <section className="pt-32 md:pt-44 pb-12">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">Elyxer</p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground animate-fade-up">
          Privacy Policy
        </h1>
        <p className="mt-4 font-sans text-sm text-muted-foreground">
          PROAPEX INNOVATIONS PRIVATE LIMITED
        </p>
        <p className="mt-2 font-sans text-xs text-muted-foreground">
          Effective Date: [INSERT DATE] · Last Updated: [INSERT DATE] · Version 1.0
        </p>
      </div>
    </section>

    <article className="pb-20 md:pb-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <Callout title="Important Notice">
          This Privacy Policy applies to all users of the Elyxer application and related services operated by
          PROAPEX INNOVATIONS PRIVATE LIMITED. By registering or using Elyxer, you acknowledge that you have read,
          understood, and agreed to the collection and use of your personal data as described herein. This policy is
          compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act,
          2000 and Rules thereunder.
        </Callout>

        <Section title="1. About Us">
          <p>
            Elyxer is a dating and social connection application owned and operated by PROAPEX INNOVATIONS PRIVATE
            LIMITED, a company incorporated under the Companies Act, 2013 in India.
          </p>
          <ul className="list-none space-y-1">
            <li><strong className="text-foreground">Registered Name:</strong> PROAPEX INNOVATIONS PRIVATE LIMITED</li>
            <li><strong className="text-foreground">Application Name:</strong> Elyxer</li>
            <li><strong className="text-foreground">Registered Address:</strong> Unit 101, Oxford Towers, 139, HAL Old Airport Road, Kodihalli, Bengaluru, Karnataka - 560008, India</li>
            <li><strong className="text-foreground">Email:</strong> support@elyxer.co</li>
            <li><strong className="text-foreground">Website:</strong> www.elyxer.co</li>
          </ul>
          <p>
            <strong className="text-foreground">Data Fiduciary:</strong> PROAPEX INNOVATIONS PRIVATE LIMITED is the
            Data Fiduciary under the Digital Personal Data Protection Act, 2023, and is responsible for all decisions
            relating to the processing of your personal data.
          </p>
        </Section>

        <Section title="2. Scope and Applicability">
          <p>This Privacy Policy applies to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>All users who download, install, register, or use the Elyxer mobile application;</li>
            <li>All personal data collected through the app, our website, customer support channels, and any related services;</li>
            <li>Users located in India. If you access Elyxer from outside India, please be aware that your data may be processed in India and in AWS data centres outside India.</li>
          </ul>
          <p>Elyxer is strictly intended for users who are 18 years of age or older. We enforce this as follows:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>During registration, users are required to enter their date of birth. Our system automatically calculates the user's age from this entry.</li>
            <li>Users are then shown their calculated age and asked to explicitly confirm it before proceeding.</li>
            <li>Accounts where the entered date of birth indicates the user is below 18 years of age are automatically placed on hold and access to the application is suspended.</li>
            <li>A held account may only be reactivated by our support team upon the user providing valid proof of age (such as a government-issued ID). Until such proof is verified and approved, the account remains inaccessible.</li>
            <li>We do not knowingly collect or process personal data of persons below the age of 18. If we discover that a minor has provided data without valid age verification, we will permanently delete such data.</li>
          </ul>
        </Section>

        <Section title="3. Personal Data We Collect">
          <p>
            We collect the following categories of personal data during your use of Elyxer. Where data is classified as
            Sensitive Personal Data under the DPDP Act 2023, explicit consent is obtained separately before collection.
          </p>

          <SubSection title="3.1 Onboarding & Identity Data">
            <Table
              headers={["Data Point", "Purpose", "Sensitivity"]}
              rows={[
                ["Mobile Number", "Account verification via OTP only; not stored post-verification", "Moderate"],
                ["Full Name", "Display name on your profile", "Low"],
                ["Email Address", "Account verification & service notifications", "Moderate"],
                ["Date of Birth / Age", "Age verification (18+ gate); profile display", "Moderate"],
              ]}
            />
          </SubSection>

          <SubSection title="3.2 Sensitive Personal Data">
            <Table
              headers={["Data Point", "Purpose", "Legal Basis"]}
              rows={[
                ["Gender & Gender Identity", "Profile personalisation and matching", "Explicit Consent (DPDP Act, S.4)"],
                ["Pronouns", "Profile display and user experience", "Explicit Consent (DPDP Act, S.4)"],
                ["Sexual Orientation", "Matching preferences and dating goals", "Explicit Consent (DPDP Act, S.4)"],
                ["Dating Gender Preference", "Core matching functionality", "Explicit Consent (DPDP Act, S.4)"],
                ["Dating Goals", "Matching quality and compatibility", "Explicit Consent (DPDP Act, S.4)"],
              ]}
            />
            <Callout>
              <strong className="text-foreground">Important:</strong> The sensitive personal data listed above is
              collected only after your explicit, informed, and separate consent. You may withdraw this consent at any
              time through your account settings, though doing so may affect certain features of Elyxer.
            </Callout>
          </SubSection>

          <SubSection title="3.3 Profile & Lifestyle Data">
            <Table
              headers={["Data Point", "Purpose", "Sensitivity"]}
              rows={[
                ["Education", "Profile display and matching", "Low"],
                ["Profession / Occupation", "Profile display and matching", "Low"],
                ["Location (City/Area)", "Proximity-based matching", "Moderate"],
                ["Height", "Profile display preference", "Low"],
                ["Languages Spoken", "Compatibility matching", "Low"],
                ["Profile Photos", "Profile display; AI moderation for safety", "Moderate"],
                ["Selfie Badge Photo", "Anti-catfishing trust signal; displayed on profile; real-time camera capture", "Moderate"],
              ]}
            />
          </SubSection>

          <SubSection title="3.3.1 Selfie Badge Feature">
            <p>Elyxer offers an optional Selfie Badge feature. When you choose to participate:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You take a real-time selfie using your device camera within the app;</li>
              <li>The selfie is displayed on your public Elyxer profile alongside a Selfie Badge indicator visible to other users;</li>
              <li>The Selfie Badge signals to other users that you have uploaded a real-time photo — it does not constitute identity verification or any guarantee of authenticity;</li>
              <li>Your selfie is stored on our secure AWS servers for as long as it remains on your profile;</li>
              <li>You may delete your selfie at any time through your profile settings. Upon deletion, the Selfie Badge is immediately removed from your profile;</li>
              <li>Participation in the Selfie Badge feature is entirely voluntary. Choosing not to participate does not affect your access to any other Elyxer features.</li>
            </ul>
            <Callout title="Selfie Badge Disclaimer">
              The Selfie Badge indicates that a user has uploaded a real-time selfie taken within the Elyxer app. It
              does not mean that the user's identity has been verified, that they are who they claim to be, or that
              their profile information is accurate. Elyxer does not perform identity verification. You should exercise
              caution when interacting with all users regardless of whether they hold a Selfie Badge.
            </Callout>
          </SubSection>

          <SubSection title="3.4 AI-Generated Profile Data">
            <p>When you provide descriptive inputs during onboarding (such as your bio, interests, and narratives), Elyxer uses artificial intelligence to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process your free-text inputs and convert them into structured profile data;</li>
              <li>Generate your Profile Studio components including My Story, Interests, Narratives, and Join Me For sections;</li>
              <li>Power the Magic Search feature, which uses AI to identify users with similar interests and compatibility signals.</li>
            </ul>
            <p>
              You retain the right to review, edit, or delete any AI-generated profile content through your account
              settings. AI-generated data is derived from information you voluntarily provide and is not used to make
              legally binding automated decisions about you.
            </p>
          </SubSection>

          <SubSection title="3.5 Technical & Usage Data">
            <ul className="list-disc pl-6 space-y-1">
              <li>Device information (device type, OS version, unique device identifiers);</li>
              <li>App usage data (features used, session duration, interaction logs);</li>
              <li>Log data (IP address, timestamps, crash reports);</li>
              <li>Push notification tokens (for service notifications).</li>
            </ul>
          </SubSection>

          <SubSection title="3.6 Payment & Subscription Data">
            <p>
              For paid subscription features, payment processing is handled by our third-party payment gateway
              partner(s). We do not store your full card numbers or CVV on our servers. We retain:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Transaction reference IDs and subscription status;</li>
              <li>Billing name and email for invoice generation;</li>
              <li>Payment history for dispute resolution.</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="4. How We Collect Your Data">
          <ul className="list-disc pl-6 space-y-1">
            <li>Directly from you during account registration and onboarding;</li>
            <li>Through your active use of app features (profile updates, searches, interactions);</li>
            <li>Through your device camera when you voluntarily use the Selfie Badge feature — camera access is requested only at the moment you initiate this feature;</li>
            <li>Automatically via device and usage tracking technologies;</li>
            <li>From third-party services where you log in via Google or Apple Sign-In (limited to email and name);</li>
            <li>From payment processors upon completion of a subscription transaction.</li>
          </ul>
        </Section>

        <Section title="5. Purpose of Processing and Legal Basis">
          <Table
            headers={["Purpose", "Legal Basis", "Data Used"]}
            rows={[
              ["Account creation & verification", "Contractual necessity", "Mobile, Email, Name"],
              ["Core matching & recommendations", "Explicit Consent", "Sensitive data, preferences"],
              ["AI profile generation", "Explicit Consent + Legitimate Interest", "Profile inputs, photos"],
              ["Magic Search feature", "Explicit Consent", "Interests, preferences"],
              ["Service notifications & alerts", "Contractual necessity", "Email, Push token"],
              ["Subscription & billing", "Contractual necessity", "Payment data"],
              ["Selfie Badge feature", "Explicit Consent", "Real-time selfie photo"],
              ["Safety & fraud prevention", "Legal obligation", "Usage logs, device data"],
              ["Product improvement & analytics", "Legitimate Interest", "Anonymised usage data"],
              ["Legal compliance", "Legal obligation", "As required by law"],
            ]}
          />
        </Section>

        <Section title="6. Data Storage and Infrastructure">
          <p>
            Elyxer uses Amazon Web Services (AWS) as its cloud infrastructure provider. Our primary data infrastructure
            is hosted on AWS ap-south-1 (Mumbai, India). For operational requirements such as disaster recovery,
            performance, and service reliability, certain data may also be processed on additional AWS regions globally
            (including but not limited to Asia Pacific, US East, and EU regions).
          </p>
          <p>
            We are committed to keeping your data stored in India as our primary location. Where data is transferred
            outside India, we ensure such transfers are carried out in compliance with applicable Indian law, including
            the DPDP Act 2023, and that AWS maintains equivalent data protection standards through internationally
            recognised certifications including ISO 27001 and SOC 2 Type II.
          </p>
          <p>
            As and when the Central Government of India notifies specific countries or frameworks for permissible
            cross-border data transfers under the DPDP Act, we will ensure full compliance with such notifications and
            update this policy accordingly.
          </p>
        </Section>

        <Section title="7. Data Retention">
          <Table
            headers={["Data Category", "Retention Period", "Notes"]}
            rows={[
              ["Account & profile data", "Until account deletion + 90 days", "Retained for dispute resolution"],
              ["Deactivated account data", "Until reactivation or deletion request", "Full data retained; profile hidden from other users"],
              ["Sensitive personal data", "Until consent withdrawn or account deleted", "Deleted upon withdrawal of consent"],
              ["AI-generated profile data", "Until account deletion", "User may edit/delete anytime"],
              ["Payment transaction records", "7 years", "Required by Indian tax laws"],
              ["Usage & log data", "12 months rolling", "Anonymised after 12 months"],
              ["Verification data (OTP logs)", "30 days", "Deleted post-verification period"],
            ]}
          />
          <p>
            Upon deletion of your account, we will delete or anonymise your personal data within 90 days, except where
            retention is required by applicable law.
          </p>

          <SubSection title="7.1 Account Deactivation vs Deletion">
            <p>Elyxer offers two options for users who wish to stop using the app:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Deactivation (Pause):</strong> Your account and profile are hidden from other users immediately. Your data is fully retained on our servers. You may reactivate your account at any time and your profile will be restored exactly as you left it. Deactivation does not trigger any data deletion.</li>
              <li><strong className="text-foreground">Permanent Deletion:</strong> Your account and all associated personal data (except data we are legally required to retain) are permanently deleted within 90 days of your request. This action is irreversible. Deleted accounts cannot be recovered.</li>
            </ul>
            <p>
              To deactivate or delete your account, go to Account Settings &gt; Privacy Controls, or contact our
              support team at support@elyxer.co.
            </p>
          </SubSection>
        </Section>

        <Section title="8. Data Sharing and Disclosure">
          <p>
            We do not sell your personal data to any third party. We may share your data only in the following
            circumstances:
          </p>
          <SubSection title="8.1 Service Providers">
            <p>We share data with trusted third-party service providers who process data on our behalf under strict data processing agreements, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cloud infrastructure: Amazon Web Services (AWS);</li>
              <li>Payment processing: [INSERT PAYMENT GATEWAY NAME e.g. Razorpay / PayU];</li>
              <li>Analytics: [e.g. Firebase Analytics / Mixpanel] — anonymised data only;</li>
              <li>Customer support tools: [e.g. Freshdesk / Intercom];</li>
              <li>SMS / OTP verification: [e.g. Exotel / MSG91].</li>
            </ul>
          </SubSection>
          <SubSection title="8.2 Legal Obligations">
            <p>We may disclose your data to law enforcement, government agencies, or courts when required by law, court order, or lawful governmental request, including under the Information Technology Act, 2000 and applicable Rules.</p>
          </SubSection>
          <SubSection title="8.3 Business Transfers">
            <p>In the event of a merger, acquisition, or sale of all or part of our business, your personal data may be transferred to the successor entity. You will be notified of such transfer and any material changes to this policy.</p>
          </SubSection>
          <SubSection title="8.4 With Your Consent">
            <p>We may share your data with other parties where you have given explicit consent to do so.</p>
          </SubSection>
        </Section>

        <Section title="9. Your Rights Under the DPDP Act 2023">
          <p>As a Data Principal under the Digital Personal Data Protection Act, 2023, you have the following rights with respect to your personal data:</p>
          <Table
            headers={["Right", "What It Means", "How to Exercise"]}
            rows={[
              ["Right to Access", "Know what data we hold about you", "Account Settings > My Data"],
              ["Right to Correction", "Correct inaccurate or incomplete data", "Edit Profile or Contact Us"],
              ["Right to Erasure", "Request deletion of your personal data", "Account Settings > Delete Account"],
              ["Right to Grievance Redressal", "Raise complaints about data processing", "Contact Grievance Officer (see below)"],
              ["Right to Withdraw Consent", "Withdraw consent for sensitive data processing", "Account Settings > Privacy Controls"],
              ["Right to Nominate", "Nominate someone to exercise rights on your behalf in case of death/incapacity", "Contact Grievance Officer"],
            ]}
          />
          <p>We will respond to all valid requests within 30 days of receipt. In complex cases, we may request an extension and will notify you accordingly.</p>
        </Section>

        <Section title="10. Grievance Redressal">
          <p>
            In accordance with the Information Technology Act, 2000, IT (Intermediary Guidelines and Digital Media
            Ethics Code) Rules, 2021, and the DPDP Act 2023, we have appointed a Grievance Officer to address concerns
            regarding the processing of your personal data.
          </p>
          <p>
            If you are not satisfied with our response, you may escalate your complaint to the Data Protection Board of
            India, once constituted under the DPDP Act 2023.
          </p>
        </Section>

        <Section title="11. Data Security">
          <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, alteration, or disclosure. Our security measures include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>End-to-end encryption for data in transit (TLS 1.2 or higher);</li>
            <li>Encryption of data at rest for sensitive personal data categories;</li>
            <li>Role-based access controls limiting internal access to personal data;</li>
            <li>Regular security audits and vulnerability assessments;</li>
            <li>AWS security controls including VPC, IAM, and CloudTrail logging;</li>
            <li>Incident response and breach notification procedures.</li>
          </ul>
          <p>In the event of a personal data breach that is likely to result in a risk to your rights, we will notify you and the relevant authorities as required under the DPDP Act 2023.</p>
        </Section>

        <Section title="12. Artificial Intelligence and Automated Processing">
          <p>Elyxer uses AI and machine learning in the following ways:</p>
          <SubSection title="12.1 AI Profile Generation (Profile Studio)">
            <p>Your free-text inputs during onboarding are processed by our AI to generate structured profile sections (My Story, Interests, Narratives, Join Me For). This processing helps create richer, more expressive profiles. You can edit or delete any AI-generated content at any time.</p>
          </SubSection>
          <SubSection title="12.2 Magic Search">
            <p>Our Magic Search feature uses AI algorithms to identify and suggest users with similar interests and compatible traits. This involves automated analysis of your profile data and preferences. This feature does not produce legally binding decisions and is intended purely to facilitate connections between users.</p>
            <p>You have the right to opt out of AI-based profiling features by contacting us at support@elyxer.co or through your privacy settings. Opting out may limit certain features of the application.</p>
          </SubSection>
          <SubSection title="12.3 Profile Photo and Content Moderation">
            <p>All profile photos and bio content uploaded by users are subject to moderation to ensure the safety and integrity of the Elyxer community. Our moderation process uses a combination of:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Automated AI scanning — profile photos and text inputs are automatically reviewed for content that violates our Community Guidelines, including explicit, offensive, or inappropriate material;</li>
              <li>Manual review by our trust and safety team — flagged content is escalated to human reviewers for a final determination.</li>
            </ul>
            <p>Photos or content found to be in violation of our guidelines may be removed without prior notice. Repeated violations may result in account suspension or permanent termination. Users may appeal any moderation decision by contacting grievance@elyxer.co.</p>
            <p>Please note: our AI moderation systems process your photos solely for safety and policy compliance purposes. This processing does not constitute biometric identification and the results are not used for any purpose beyond content moderation.</p>
          </SubSection>
        </Section>

        <Section title="13. Messaging, Chat and Virtual Date Rooms">
          <p>Elyxer facilitates connections through a unique interaction system — users can send Invites, express interest through Vibes, and when both users Vibe Back, a chat conversation is unlocked. Users may also engage in Virtual Date Rooms for real-time interaction.</p>
          <SubSection title="13.1 How Our Interaction System Works">
            <p>The Elyxer connection flow works as follows:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Invite:</strong> A user sends an invite to another user expressing interest;</li>
              <li><strong className="text-foreground">Vibe:</strong> A user expresses a positive reaction to another user's profile or Moment;</li>
              <li><strong className="text-foreground">Vibe Back:</strong> When both users Vibe each other, a chat conversation is automatically unlocked;</li>
              <li><strong className="text-foreground">Chat:</strong> Text-based messaging between two users who have mutually Vibed;</li>
              <li><strong className="text-foreground">Virtual Date Room:</strong> A dedicated in-app space for real-time interaction between connected users.</li>
            </ul>
          </SubSection>
          <SubSection title="13.2 Data Collected Through Messaging">
            <p>When you use Elyxer's messaging and interaction features, we collect and process the following data:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Content of text messages sent and received through the chat feature;</li>
              <li>Invite and Vibe interaction logs (who sent, who received, timestamps);</li>
              <li>Virtual Date Room session metadata (session duration, participants, timestamps);</li>
              <li>Message delivery and read status;</li>
              <li>Any media or content shared within chats (where applicable).</li>
            </ul>
          </SubSection>
          <SubSection title="13.3 Message Storage and Encryption">
            <p>Your chat messages and interaction data are stored on our secure AWS infrastructure. We implement the following protections:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>All messages and interaction data are encrypted at rest using industry-standard encryption;</li>
              <li>All data in transit between your device and our servers is protected using TLS 1.2 or higher;</li>
              <li>Access to message content is strictly limited to authorised personnel for safety investigation purposes only.</li>
            </ul>
            <p>Please note: Elyxer does not currently offer end-to-end encryption (E2E) for messages. This means message content is accessible to our systems for moderation, safety, and legal compliance purposes. We will update this policy if E2E encryption is implemented in future.</p>
          </SubSection>
          <SubSection title="13.4 Virtual Date Rooms">
            <p>Virtual Date Rooms enable real-time interaction between connected users. We wish to clarify:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Virtual Date Room sessions are not recorded or stored by Elyxer;</li>
              <li>Session metadata (duration, participants, timestamps) is retained for 90 days for safety and operational purposes;</li>
              <li>Users are solely responsible for their conduct during Virtual Date sessions and must comply with our Community Guidelines at all times.</li>
            </ul>
          </SubSection>
          <SubSection title="13.5 Message Data Upon Account Deletion">
            <p>When you permanently delete your Elyxer account:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your chat messages and interaction data will be removed from active systems within 90 days;</li>
              <li>For safety investigation purposes, message data may be retained beyond 90 days where a report or complaint has been filed involving your account, and for as long as is legally required to resolve such matters;</li>
              <li>The other party in a conversation will no longer be able to see your profile, but may retain visibility of previously exchanged messages during the 90-day transition period;</li>
              <li>Invite and Vibe interaction logs associated with your account will be anonymised or deleted within 90 days.</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="14. Profile Visibility and Discovery">
          <p>Understanding how your profile is visible to others is important on a social connection platform. This section explains Elyxer's profile visibility model.</p>
          <SubSection title="14.1 Default Visibility">
            <p>By default, your Elyxer profile — including your display name, photos, Profile Studio content (My Story, Interests, Narratives, Join Me For), age, and general location — is visible to all registered users on the Elyxer platform, subject to the following:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your profile is shown to users based on the Magic Search algorithm, which considers interests, preferences, and compatibility signals;</li>
              <li>Your precise location is never displayed — only a general area or approximate distance is shown to other users;</li>
              <li>Sensitive profile data such as sexual orientation and gender identity is displayed only to the extent you choose to include it on your profile.</li>
            </ul>
          </SubSection>
          <SubSection title="14.2 Moments">
            <p>Elyxer allows users to post Moments — short-form content visible to other users on the platform. Moments are subject to the same moderation standards as profile content. You may delete your Moments at any time through your profile settings. Moments posted by you are visible to all Elyxer users unless deleted.</p>
          </SubSection>
          <SubSection title="14.3 What You Should Know">
            <p>As Elyxer is a discovery-based social connection platform, please be aware of the following:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Other users may screenshot or save your profile content or Moments outside of the Elyxer platform. We strongly advise discretion when sharing personal information;</li>
              <li>Elyxer does not control how other users use information they see on your profile outside of the app;</li>
              <li>We recommend not sharing sensitive personal information such as your home address, workplace, or financial details through the platform.</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="15. Block, Report and Safety Controls">
          <p>Elyxer is committed to maintaining a safe and respectful community. We provide users with the following safety controls:</p>
          <SubSection title="15.1 Block">
            <ul className="list-disc pl-6 space-y-1">
              <li>You may block any other user at any time through their profile or within a chat conversation;</li>
              <li>When you block a user, they will no longer be able to view your profile, send you Invites, Vibes, or messages;</li>
              <li>Blocking is mutual in effect — you will also no longer see the blocked user's profile or content;</li>
              <li>Block actions are logged and retained by Elyxer for safety and platform integrity purposes.</li>
            </ul>
          </SubSection>
          <SubSection title="15.2 Report">
            <ul className="list-disc pl-6 space-y-1">
              <li>You may report any user profile, chat message, or Moment that you believe violates our Community Guidelines;</li>
              <li>Reports can be submitted through the relevant profile, message, or Moment using the in-app report function;</li>
              <li>All reports are reviewed by our trust and safety team, using a combination of automated tools and manual review;</li>
              <li>We will take appropriate action, which may include content removal, account suspension, or permanent termination of the reported user's account;</li>
              <li>The outcome of a report investigation will not be disclosed to the reporting user except in limited circumstances.</li>
            </ul>
          </SubSection>
          <SubSection title="15.3 Data Retained for Safety Investigations">
            <p>To ensure the integrity and safety of the Elyxer platform, we retain the following data even after an account is deleted, for as long as is legally required or necessary to resolve an active safety investigation:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Block and report logs including the nature of the report, content reported, and actions taken;</li>
              <li>Chat messages, Invite/Vibe interaction data, and Moment content relevant to a reported incident;</li>
              <li>Account and identity data of users who have been reported for serious violations (harassment, abuse, impersonation, etc.);</li>
              <li>This data is stored securely and accessible only to authorised trust and safety personnel and, where required by law, to law enforcement authorities.</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="16. Cookies and Tracking Technologies">
          <p>The Elyxer mobile application does not use browser cookies. However, we use similar tracking technologies including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Device identifiers and advertising IDs (for analytics and fraud prevention);</li>
            <li>Session tokens (for maintaining your login state);</li>
            <li>Firebase or equivalent SDKs for crash reporting and performance monitoring.</li>
          </ul>
          <p>For detailed information on tracking technologies used in our app, please refer to our Cookie and Tracking Policy available at [INSERT LINK].</p>
        </Section>

        <Section title="17. Paid Subscriptions">
          <p>Elyxer offers paid subscription plans that unlock premium features. By subscribing, you authorise us to process your payment through our third-party payment gateway. Auto-renewal terms, cancellation procedures, and refund eligibility are governed by our Refund and Cancellation Policy, available separately.</p>
          <p>Payment data is processed by PCI-DSS compliant payment gateway partners. We do not retain your full card details on our systems.</p>
        </Section>

        <Section title="18. Third-Party Links and Services">
          <p>Elyxer may contain links to third-party websites or integrate with third-party services (such as social sign-in providers). This Privacy Policy does not apply to third-party services. We encourage you to review the privacy policies of any third-party services you access through Elyxer.</p>
        </Section>

        <Section title="19. Changes to This Privacy Policy">
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We will update the Effective Date at the top of this policy;</li>
            <li>We will notify you via in-app notification and/or email at least 15 days before changes take effect;</li>
            <li>For changes involving sensitive personal data or a new purpose of processing, we will seek your fresh explicit consent.</li>
          </ul>
          <p>Your continued use of Elyxer after the effective date of the revised policy constitutes your acceptance of the changes.</p>
        </Section>

        <Section title="20. Contact Us">
          <p>For any questions, requests, or concerns regarding this Privacy Policy or the processing of your personal data, please contact us at:</p>
          <ul className="list-none space-y-1">
            <li><strong className="text-foreground">Email:</strong> support@elyxer.co</li>
            <li><strong className="text-foreground">Grievance Email:</strong> grievance@elyxer.co</li>
            <li><strong className="text-foreground">Postal Address:</strong> PROAPEX INNOVATIONS PRIVATE LIMITED, Unit 101, Oxford Towers, 139, HAL Old Airport Road, Kodihalli, Bengaluru, Karnataka - 560008, India</li>
          </ul>
        </Section>

        <p className="mt-12 pt-6 border-t border-border font-sans text-xs text-muted-foreground italic text-center">
          This Privacy Policy was drafted in compliance with the Digital Personal Data Protection Act, 2023 (India),
          the Information Technology Act, 2000, and the IT (Intermediary Guidelines and Digital Media Ethics Code)
          Rules, 2021.
        </p>
        <p className="mt-2 font-sans text-xs text-muted-foreground text-center">
          © 2024 PROAPEX INNOVATIONS PRIVATE LIMITED. All rights reserved.
        </p>
      </div>
    </article>
  </Layout>
);

export default PrivacyPolicy;
