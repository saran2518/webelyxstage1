import Layout from "@/components/Layout";
import {
  Section,
  SubSection,
  LegalTable,
  Callout,
  LegalHero,
  LegalFooterNote,
} from "@/components/legal/LegalPrimitives";

const TermsOfService = () => (
  <Layout>
    <LegalHero
      eyebrow="Legal · Terms"
      title="Terms of Service"
      subtitle="The agreement between you and PROAPEX INNOVATIONS PRIVATE LIMITED governing your access to and use of the Elyxer application and related services."
    />

    <article className="pb-20 md:pb-32">
      <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
        <Callout title="Please Read Carefully">
          These Terms of Service constitute a legally binding agreement between you and PROAPEX INNOVATIONS PRIVATE
          LIMITED governing your access to and use of the Elyxer application and related services. By registering,
          accessing, or using Elyxer, you agree to be bound by these Terms. If you do not agree, please do not use our
          services.
        </Callout>

        <Section title="1. About Elyxer">
          <p>
            Elyxer is a social connection and dating application owned and operated by PROAPEX INNOVATIONS PRIVATE
            LIMITED, a company incorporated under the Companies Act, 2013 in India.
          </p>
          <ul className="list-none space-y-1">
            <li><strong className="text-foreground">Registered Name:</strong> PROAPEX INNOVATIONS PRIVATE LIMITED</li>
            <li><strong className="text-foreground">Application Name:</strong> Elyxer</li>
            <li><strong className="text-foreground">Registered Address:</strong> Unit 101, Oxford Towers, 139, HAL Old Airport Road, Kodihalli, Bengaluru, Karnataka - 560008, India</li>
            <li><strong className="text-foreground">Email:</strong> support@elyxer.co</li>
            <li><strong className="text-foreground">Website:</strong> www.elyxer.co</li>
          </ul>
        </Section>

        <Section title="2. Acceptance of Terms">
          <p className="italic">
            Summary: By using Elyxer, you agree to these Terms. You must be 18 or older. We'll notify you 15 days before
            making any major changes.
          </p>
          <p>By downloading, installing, registering, or using the Elyxer application, you confirm that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You are at least 18 years of age;</li>
            <li>You have read, understood, and agree to be bound by these Terms of Service;</li>
            <li>You agree to our Privacy Policy, which is incorporated into these Terms by reference;</li>
            <li>You have the legal capacity to enter into a binding agreement;</li>
            <li>You are not prohibited from using our services under applicable Indian law.</li>
          </ul>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of material changes via in-app
            notification and/or email at least 15 days before they take effect. Your continued use of Elyxer after the
            effective date constitutes your acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="3. Eligibility and Age Verification">
          <p className="italic">
            Summary: You must be 18+. We verify your age using your date of birth. We do not allow registered sex
            offenders on our platform.
          </p>
          <p>
            Elyxer is strictly intended for users who are 18 years of age or older. By using Elyxer, you represent and
            warrant that you meet this age requirement.
          </p>

          <SubSection title="3.1 Age Verification Process">
            <ul className="list-disc pl-6 space-y-1">
              <li>During registration, you are required to enter your date of birth. Our system automatically calculates your age;</li>
              <li>You are then shown your calculated age and asked to explicitly confirm it before proceeding;</li>
              <li>Accounts where the entered date of birth indicates the user is below 18 years of age are automatically placed on hold;</li>
              <li>A held account may only be reactivated upon providing valid government-issued proof of age to our support team;</li>
              <li>Providing false date of birth information to bypass age verification is a material breach of these Terms and may result in permanent account termination.</li>
            </ul>
          </SubSection>

          <SubSection title="3.2 Account Eligibility">
            <p>You are not eligible to use Elyxer if:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You are under 18 years of age;</li>
              <li>You have previously been suspended or permanently banned from Elyxer;</li>
              <li>You are a convicted sex offender or are currently required to register as a sex offender under any applicable law in India or any other jurisdiction;</li>
              <li>You have been convicted of any violent crime, crime of sexual abuse, or any offence involving minors;</li>
              <li>Your use of Elyxer would violate any applicable law or regulation.</li>
            </ul>
          </SubSection>

          <Callout title="Important — No Background Verification">
            ELYXER DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS OR IDENTITY VERIFICATION ON ITS USERS. By using Elyxer,
            you acknowledge and accept that other users may not be who they claim to be. We strongly encourage you to
            exercise caution, use your judgment, and follow our safety guidelines at all times — both online and when
            meeting anyone in person. Elyxer is not responsible for the conduct of any user on or off the platform.
          </Callout>
        </Section>

        <Section title="4. Account Registration and Security">
          <SubSection title="4.1 Account Creation">
            <p>
              To access Elyxer's features, you must create an account by providing accurate, current, and complete
              information including your mobile number, name, email address, and date of birth. You agree to keep this
              information up to date.
            </p>
          </SubSection>
          <SubSection title="4.2 Account Security">
            <ul className="list-disc pl-6 space-y-1">
              <li>You are solely responsible for maintaining the confidentiality of your account credentials;</li>
              <li>You are responsible for all activities that occur under your account;</li>
              <li>You must notify us immediately at support@elyxer.co if you suspect any unauthorised access to your account;</li>
              <li>You may not share your account with any other person or create accounts on behalf of others;</li>
              <li>You may not create more than one active account on Elyxer.</li>
            </ul>
          </SubSection>
          <SubSection title="4.3 Account Deactivation and Deletion">
            <p>
              You may choose to either deactivate (pause) or permanently delete your account at any time through Account
              Settings &gt; Privacy Controls or by contacting support@elyxer.co.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Deactivation:</strong> Your profile is hidden from other users but your data is retained. You may reactivate at any time;</li>
              <li><strong className="text-foreground">Permanent Deletion:</strong> Your account and associated data are permanently deleted within 90 days. This action is irreversible.</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="5. The Elyxer Platform and Features">
          <p>Elyxer provides a social connection and dating platform with the following core features:</p>

          <SubSection title="5.1 Profile Studio">
            <p>
              Upon onboarding, you provide descriptive information about yourself which our AI processes to generate
              structured profile components including My Story, Interests, Narratives, and Join Me For sections. You
              retain the right to review, edit, or delete any AI-generated content through your account settings.
            </p>
          </SubSection>
          <SubSection title="5.2 Magic Search">
            <p>
              Elyxer's Magic Search feature uses AI algorithms to identify and suggest users with similar interests and
              compatible traits. This is a discovery tool only and does not constitute any guarantee of compatibility,
              connection, or outcome.
            </p>
          </SubSection>
          <SubSection title="5.3 Invite, Vibe and Chat System">
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Invite:</strong> You may send an invite to another user expressing interest in connecting;</li>
              <li><strong className="text-foreground">Vibe:</strong> You may express a positive reaction to another user's profile or Moment;</li>
              <li><strong className="text-foreground">Vibe Back:</strong> When both users mutually Vibe each other, a text chat conversation is automatically unlocked;</li>
              <li><strong className="text-foreground">Chat:</strong> Text-based messaging is available between users who have mutually Vibed.</li>
            </ul>
            <p>
              You are solely responsible for the content of your messages. Elyxer reserves the right to review, access,
              and analyse messages and other communications — including through automated tools and human review — for
              safety, moderation, and policy compliance purposes. By using the chat feature, you consent to this review
              for the purposes stated.
            </p>
          </SubSection>
          <SubSection title="5.4 Virtual Date Rooms">
            <p>
              Virtual Date Rooms provide a dedicated in-app space for real-time interaction between connected users.
              Both participants must actively accept entry into a Virtual Date Room session before it begins,
              constituting mutual consent to participate. By using Virtual Date Rooms, you agree that:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You will only enter a session after both parties have mutually accepted — entry itself constitutes consent;</li>
              <li>Sessions are not recorded or stored by Elyxer;</li>
              <li>You will conduct yourself respectfully and in accordance with our Community Guidelines;</li>
              <li>You will not record, screenshot, or capture any content from Virtual Date Room sessions without the explicit prior consent of the other participant — doing so without consent is a serious violation of these Terms and may constitute a criminal offence under applicable law;</li>
              <li>Elyxer is not liable for the conduct of other users during Virtual Date Room sessions.</li>
            </ul>
          </SubSection>
          <SubSection title="5.5 Selfie Badge">
            <ul className="list-disc pl-6 space-y-1">
              <li>You may choose to take a real-time selfie using your device camera within the Elyxer app;</li>
              <li>Once uploaded, the selfie is displayed on your public profile alongside a Selfie Badge indicator visible to all other users;</li>
              <li>Earning a Selfie Badge is voluntary — you are not required to participate and your access to all other features is unaffected by your choice;</li>
              <li>You may remove your selfie at any time through your profile settings. Upon removal, the Selfie Badge is immediately and permanently removed from your profile;</li>
              <li>The Selfie Badge remains on your profile for as long as the selfie remains uploaded. If you delete the selfie, the badge is gone.</li>
            </ul>
            <Callout title="Selfie Badge — Important Disclaimer">
              The Selfie Badge indicates only that a user has uploaded a real-time selfie taken within the Elyxer app at
              a point in time. It does NOT constitute identity verification, background screening, or any guarantee
              that the user is who they claim to be. Elyxer makes no representations about the authenticity or identity
              of any user, including those who hold a Selfie Badge. You should exercise the same caution with all users
              regardless of badge status.
            </Callout>
          </SubSection>
          <SubSection title="5.6 Moments">
            <p>
              Elyxer allows you to post short-form content called Moments that are visible to all registered users on
              the platform. By posting a Moment, you confirm that the content complies with our Community Guidelines
              and that you have all necessary rights to the content posted.
            </p>
          </SubSection>
          <SubSection title="5.7 Free and Premium Features">
            <p>
              Elyxer operates on a freemium model. Core features are available to all registered users at no cost.
              Certain premium features are available exclusively to subscribers of our paid plans. The features
              available under each tier are described within the application and may be updated from time to time.
            </p>
          </SubSection>
        </Section>

        <Section title="6. User Content and Intellectual Property">
          <p className="italic">
            Summary: You own your photos, bio, and Moments. By posting them, you give us permission to display them on
            Elyxer. We own the app technology.
          </p>
          <SubSection title="6.1 Your Content — Ownership">
            <p>
              You retain full ownership of all content you create and upload to Elyxer, including your profile photos,
              bio, Moments, and messages (collectively, "Your Content"). Elyxer does not claim ownership of Your
              Content.
            </p>
          </SubSection>
          <SubSection title="6.2 License to Elyxer">
            <p>
              By uploading or posting Your Content on Elyxer, you grant PROAPEX INNOVATIONS PRIVATE LIMITED a
              non-exclusive, royalty-free, worldwide, sublicensable, and transferable license to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Display and distribute Your Content to other users of the Elyxer platform;</li>
              <li>Process Your Content using AI tools to generate Profile Studio components and power matching features;</li>
              <li>Use Your Content for safety moderation, content review, and policy enforcement;</li>
              <li>Store, reproduce, and adapt Your Content solely as necessary to provide and improve the Elyxer service.</li>
            </ul>
            <p>
              This license is granted for as long as Your Content remains on Elyxer and terminates when you delete Your
              Content or your account, subject to retention obligations described in our Privacy Policy.
            </p>
          </SubSection>
          <SubSection title="6.3 Your Representations">
            <p>By uploading Your Content, you represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You own or have the necessary rights and permissions to upload and license the content;</li>
              <li>Your Content does not infringe any third-party intellectual property rights;</li>
              <li>Your Content does not violate any applicable law or these Terms;</li>
              <li>You have obtained consent from any identifiable individuals appearing in your photos or content.</li>
            </ul>
          </SubSection>
          <SubSection title="6.4 Elyxer's Intellectual Property">
            <p>
              All intellectual property in the Elyxer application, including but not limited to the app design,
              software, algorithms, AI models, brand name, logo, and all technology underlying the platform, is the
              exclusive property of PROAPEX INNOVATIONS PRIVATE LIMITED. Nothing in these Terms grants you any right to
              use Elyxer's intellectual property except as expressly permitted herein.
            </p>
          </SubSection>
        </Section>

        <Section title="7. Prohibited Conduct">
          <p className="italic">
            Summary: Don't create fake profiles, harass others, send explicit content, scam users, or tamper with the
            platform. Violations may result in a permanent ban.
          </p>
          <SubSection title="7.1 Identity and Authenticity">
            <ul className="list-disc pl-6 space-y-1">
              <li>Create a fake or misleading profile or impersonate any person or entity;</li>
              <li>Upload photos that are not of yourself or that misrepresent your appearance;</li>
              <li>Provide false information including age, location, or identity;</li>
              <li>Create multiple accounts or access the platform through automated means.</li>
            </ul>
          </SubSection>
          <SubSection title="7.2 Harmful and Illegal Content">
            <ul className="list-disc pl-6 space-y-1">
              <li>Post, share, or transmit any content that is obscene, pornographic, sexually explicit, or offensive;</li>
              <li>Share or solicit nude or sexually explicit images;</li>
              <li>Post content that promotes, glorifies, or facilitates violence, self-harm, or illegal activities;</li>
              <li>Share content that is hateful, discriminatory, or harassing based on race, religion, gender, sexual orientation, disability, or any other protected characteristic;</li>
              <li>Post content that infringes any third-party copyright, trademark, or other intellectual property rights.</li>
            </ul>
          </SubSection>
          <SubSection title="7.3 Harassment and Abuse">
            <ul className="list-disc pl-6 space-y-1">
              <li>Harass, bully, intimidate, stalk, or threaten any user;</li>
              <li>Send unsolicited, repetitive, or unwanted messages to users;</li>
              <li>Use Elyxer to engage in any form of sexual harassment;</li>
              <li>Attempt to contact users who have blocked you through any means.</li>
            </ul>
          </SubSection>
          <SubSection title="7.4 Commercial and Fraudulent Activity">
            <ul className="list-disc pl-6 space-y-1">
              <li>Use Elyxer to solicit money from other users or engage in financial fraud;</li>
              <li>Promote, advertise, or solicit for any commercial product or service;</li>
              <li>Engage in any form of scamming, phishing, or deceptive practices;</li>
              <li>Solicit personal financial information from other users.</li>
            </ul>
          </SubSection>
          <SubSection title="7.5 Platform Integrity">
            <ul className="list-disc pl-6 space-y-1">
              <li>Attempt to reverse engineer, decompile, or tamper with Elyxer's software or systems;</li>
              <li>Introduce malware, viruses, or any harmful code into the platform;</li>
              <li>Use automated bots, scrapers, or other tools to access or extract data from Elyxer;</li>
              <li>Attempt to bypass any security or access control measures.</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="8. Community Guidelines and Enforcement">
          <SubSection title="8.1 Our Commitment">
            <p>
              Elyxer is committed to maintaining a safe, respectful, and inclusive community. All users are expected to
              treat each other with dignity and respect at all times.
            </p>
          </SubSection>
          <SubSection title="8.2 Content Moderation">
            <p>
              All profile photos, bios, and Moments posted on Elyxer are subject to moderation using a combination of
              automated AI scanning and manual review by our trust and safety team. Content found to violate our
              Community Guidelines may be removed without prior notice.
            </p>
          </SubSection>
          <SubSection title="8.3 Enforcement Actions">
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Warning:</strong> For minor or first-time violations, we may issue a formal warning to your registered email address;</li>
              <li><strong className="text-foreground">Temporary Suspension:</strong> Your account may be suspended for a defined period pending investigation or as a consequence of repeated or serious violations;</li>
              <li><strong className="text-foreground">Permanent Ban:</strong> Accounts found to have committed severe violations — including but not limited to sexual harassment, sharing of explicit content, fraud, impersonation, or illegal activity — will be permanently terminated with no option for reinstatement;</li>
              <li><strong className="text-foreground">Legal Action:</strong> For violations involving criminal activity or serious harm, we reserve the right to report the matter to law enforcement authorities and pursue legal remedies.</li>
            </ul>
            <p>
              All enforcement actions will be communicated to the affected user via their registered email address with
              a clear explanation of the reason for the action taken. Users may contact grievance@elyxer.co to appeal
              an enforcement decision.
            </p>
          </SubSection>
        </Section>

        <Section title="9. Subscriptions and Payments">
          <p className="italic">
            Summary: Elyxer is free with optional paid premium features. Subscriptions auto-renew unless cancelled.
            Refunds are only available for technical payment failures, not voluntary cancellations.
          </p>
          <SubSection title="9.1 Free and Premium Tiers">
            <p>
              Elyxer offers a freemium model. Core features are available free of charge. Premium features require a
              paid subscription. Details of what is included in each tier are available within the application.
            </p>
          </SubSection>
          <SubSection title="9.2 Subscription Billing">
            <ul className="list-disc pl-6 space-y-1">
              <li>Subscriptions are billed on a recurring basis (monthly or annually, as selected);</li>
              <li>Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date;</li>
              <li>Subscription fees are charged to your chosen payment method through our third-party payment gateway;</li>
              <li>You authorise Elyxer to charge your payment method for the applicable subscription fee on each renewal date;</li>
              <li>All prices are inclusive of applicable taxes unless otherwise stated.</li>
            </ul>
          </SubSection>
          <SubSection title="9.3 Cancellation">
            <ul className="list-disc pl-6 space-y-1">
              <li>You may cancel your subscription at any time through Account Settings &gt; Subscription or by contacting support@elyxer.co;</li>
              <li>Cancellation takes effect at the end of the current billing period;</li>
              <li>Upon cancellation, you will retain access to premium features until the end of your paid period;</li>
              <li>After the paid period ends, your account will revert to the free tier.</li>
            </ul>
          </SubSection>
          <SubSection title="9.4 Refund Policy">
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Technical payment failures:</strong> If a payment is processed but the corresponding premium service is not activated on your account due to a technical error on our part, you are entitled to a full refund. Please contact support@elyxer.co within 7 days;</li>
              <li><strong className="text-foreground">Voluntary cancellation:</strong> Cancellation of a subscription does not entitle you to a refund for any unused portion of your current billing period. Your premium access continues until the end of the paid period;</li>
              <li>All refund requests are reviewed on a case-by-case basis. Approved refunds will be processed to the original payment method within 7-10 business days;</li>
              <li>Elyxer reserves the right to refuse refund requests where there is evidence of abuse of the refund policy.</li>
            </ul>
          </SubSection>
          <SubSection title="9.5 App Store Subscriptions">
            <ul className="list-disc pl-6 space-y-1">
              <li>Your subscription is managed by Apple or Google respectively, not directly by Elyxer;</li>
              <li>Billing, renewal, and cancellation are handled according to Apple's or Google's terms and policies;</li>
              <li>To cancel an App Store subscription, you must do so through your Apple ID account settings or Google Play account — cancelling within Elyxer alone will not cancel an App Store subscription;</li>
              <li>Refund requests for App Store purchases must be directed to Apple or Google respectively — Elyxer does not process refunds for transactions made through app stores;</li>
              <li>Price changes to your subscription will be communicated in accordance with Apple's or Google's notification procedures.</li>
            </ul>
          </SubSection>
          <Callout title="Consumer Protection Notice">
            Your rights under the Consumer Protection Act, 2019 and Consumer Protection (E-Commerce) Rules, 2020 are
            not affected by these Terms. If you have a complaint regarding a transaction, you may contact our Grievance
            Officer or approach the appropriate consumer forum.
          </Callout>
        </Section>

        <Section title="10. Disclaimers and Limitation of Liability">
          <SubSection title="10.1 No Guarantee of Connections">
            <p>
              Elyxer is a platform that facilitates social connections and dating. We do not guarantee that use of the
              platform will result in any particular connection, relationship, or outcome. The success of any
              connection depends entirely on the users involved.
            </p>
          </SubSection>
          <SubSection title="10.2 User Conduct">
            <p>
              Elyxer is not responsible for the conduct, behaviour, or actions of any user, whether on or off the
              platform. You agree to exercise caution and use good judgment when interacting with other users,
              particularly when meeting in person.
            </p>
          </SubSection>
          <SubSection title="10.3 Platform Availability">
            <p>
              Elyxer is provided on an "as is" and "as available" basis. We do not warrant that the platform will be
              uninterrupted, error-free, or free of harmful components. We reserve the right to modify, suspend, or
              discontinue any part of the service at any time with reasonable notice.
            </p>
          </SubSection>
          <SubSection title="10.4 Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable Indian law, PROAPEX INNOVATIONS PRIVATE LIMITED shall not
              be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or
              relating to your use of Elyxer, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Loss of data or content;</li>
              <li>Personal injury or emotional distress resulting from interactions with other users;</li>
              <li>Unauthorised access to your account or personal data due to circumstances beyond our reasonable control;</li>
              <li>Any conduct or content of other users, whether online or offline.</li>
            </ul>
            <p>
              Our total liability to you for any claim arising under these Terms shall not exceed the total amount paid
              by you to Elyxer in the 3 months immediately preceding the event giving rise to the claim, or INR 5,000,
              whichever is greater.
            </p>
          </SubSection>
        </Section>

        <Section title="11. Safety Guidelines and Disclaimers">
          <p className="italic">
            Summary: We do not run background checks on users. Meeting anyone in person is at your own risk. Always take
            precautions and report anything suspicious immediately.
          </p>
          <Callout title="In-Person Meeting Liability Disclaimer">
            ELYXER EXPRESSLY DISCLAIMS ALL LIABILITY FOR ANY INJURY, HARM, LOSS, OR DAMAGE — WHETHER PHYSICAL,
            EMOTIONAL, FINANCIAL, OR OTHERWISE — THAT YOU MAY SUFFER AS A RESULT OF MEETING ANOTHER USER IN PERSON.
            YOUR DECISION TO MEET ANYONE FROM ELYXER IN PERSON IS ENTIRELY AT YOUR OWN RISK. ELYXER IS AN ONLINE
            PLATFORM ONLY AND HAS NO CONTROL OVER USER CONDUCT OUTSIDE THE APP.
          </Callout>
          <SubSection title="11.1 Online Safety">
            <ul className="list-disc pl-6 space-y-1">
              <li>Never share personal financial information, bank details, UPI IDs, or passwords with anyone on the platform;</li>
              <li>Be cautious about sharing your precise home address, workplace, or daily routine;</li>
              <li>Be alert to signs of romance scams — users asking for money, gifts, or financial assistance should be reported immediately;</li>
              <li>Trust your instincts — if something feels wrong, use our block and report features immediately;</li>
              <li>Report any suspicious behaviour, harassment, or threats to our team via the in-app report function or by emailing grievance@elyxer.co.</li>
            </ul>
          </SubSection>
          <SubSection title="11.2 In-Person Meeting Safety">
            <ul className="list-disc pl-6 space-y-1">
              <li>Always meet for the first time in a well-populated public place — never at a private residence or isolated location;</li>
              <li>Inform a trusted friend or family member of your plans, including the location and time of the meeting;</li>
              <li>Arrange your own transportation to and from the meeting — do not rely on the other person for transport;</li>
              <li>Do not leave your food or drinks unattended;</li>
              <li>If at any point you feel unsafe, leave immediately and contact emergency services if necessary.</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="12. Copyright Infringement and Takedown Procedure">
          <p className="italic">
            Summary: If someone posts content that infringes your copyright, email us at grievance@elyxer.co and we
            will remove it. Repeat infringers will be permanently banned.
          </p>
          <SubSection title="12.1 How to Submit a Takedown Request">
            <p>To submit a valid copyright takedown request, please send a written notice to grievance@elyxer.co containing all of the following:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your full name, address, telephone number, and email address;</li>
              <li>A description of the copyrighted work or intellectual property you claim has been infringed;</li>
              <li>A description of where the infringing content is located on Elyxer (e.g. profile URL, username, or screenshot);</li>
              <li>A statement that you have a good faith belief that the use of the content is not authorised by the copyright owner, its agent, or the law;</li>
              <li>A statement that the information in your notice is accurate and that you are the copyright owner or authorised to act on their behalf;</li>
              <li>Your electronic or physical signature.</li>
            </ul>
          </SubSection>
          <SubSection title="12.2 Our Response">
            <ul className="list-disc pl-6 space-y-1">
              <li>We will acknowledge valid takedown requests within 48 hours;</li>
              <li>Upon verification, we will remove or disable access to the infringing content promptly;</li>
              <li>We will notify the user who posted the content that it has been removed;</li>
              <li>Repeat infringers will have their accounts permanently terminated.</li>
            </ul>
          </SubSection>
          <SubSection title="12.3 Counter-Notification">
            <p>
              If you believe your content was removed in error, you may submit a counter-notification to
              grievance@elyxer.co with your full details, a description of the removed content, and a statement that
              you have a good faith belief the content was removed by mistake. We will review counter-notifications on
              a case-by-case basis.
            </p>
          </SubSection>
        </Section>

        <Section title="13. Third-Party Services">
          <p>
            Elyxer integrates with certain third-party services including payment processors, cloud infrastructure, and
            analytics providers. Your use of these third-party services is subject to their respective terms and
            privacy policies. Elyxer is not responsible for the practices or content of any third-party service.
          </p>
          <p>
            Elyxer may contain links to third-party websites. These links are provided for your convenience only and do
            not constitute an endorsement of the linked website or its contents.
          </p>
        </Section>

        <Section title="14. Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless PROAPEX INNOVATIONS PRIVATE LIMITED, its directors,
            officers, employees, and agents from and against any claims, liabilities, damages, losses, costs, or
            expenses (including reasonable legal fees) arising out of or in connection with:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your use of or access to Elyxer;</li>
            <li>Your violation of these Terms of Service;</li>
            <li>Your violation of any applicable law or regulation;</li>
            <li>Your Content or any content you post, share, or transmit on Elyxer;</li>
            <li>Your interaction with any other user on or off the platform.</li>
          </ul>
        </Section>

        <Section title="15. Grievance Redressal">
          <p>
            In accordance with the Information Technology Act, 2000 and IT (Intermediary Guidelines and Digital Media
            Ethics Code) Rules, 2021, we have appointed a Grievance Officer to address your concerns:
          </p>
          <Callout title="Grievance Officer">
            <ul className="list-none space-y-1">
              <li><strong className="text-foreground">Name:</strong> SARANKUMAR K</li>
              <li><strong className="text-foreground">Designation:</strong> Co-Founder &amp; Director</li>
              <li><strong className="text-foreground">Company:</strong> PROAPEX INNOVATIONS PRIVATE LIMITED</li>
              <li><strong className="text-foreground">Address:</strong> Unit 101, Oxford Towers, 139, HAL Old Airport Road, Kodihalli, Bengaluru, Karnataka - 560008, India</li>
              <li><strong className="text-foreground">Email:</strong> grievance@elyxer.co</li>
              <li><strong className="text-foreground">Acknowledgment:</strong> Within 24 hours of receipt</li>
              <li><strong className="text-foreground">Resolution:</strong> Within 48 hours of acknowledgment</li>
            </ul>
          </Callout>
        </Section>

        <Section title="16. Governing Law and Dispute Resolution">
          <p className="italic">
            Summary: Indian law applies. Any disputes go to Bengaluru courts. We encourage you to contact us first to
            resolve issues informally.
          </p>
          <SubSection title="16.1 Governing Law">
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India, without
              regard to its conflict of law provisions.
            </p>
          </SubSection>
          <SubSection title="16.2 Jurisdiction">
            <p>
              Any dispute, claim, or controversy arising out of or relating to these Terms, the breach thereof, or your
              use of Elyxer shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka,
              India. By agreeing to these Terms, you consent to the personal jurisdiction of such courts.
            </p>
          </SubSection>
          <SubSection title="16.3 Informal Resolution">
            <p>
              Before initiating any formal legal proceedings, we encourage you to contact us at support@elyxer.co to
              attempt to resolve the dispute informally. We will make reasonable efforts to resolve your concern within
              30 days of receipt.
            </p>
          </SubSection>
        </Section>

        <Section title="17. Termination">
          <p>
            Elyxer reserves the right to suspend or permanently terminate your account and access to the platform at
            any time, with or without notice, if:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You breach any provision of these Terms of Service;</li>
            <li>You violate our Community Guidelines;</li>
            <li>We are required to do so by applicable law or a court order;</li>
            <li>We discontinue the Elyxer service in whole or in part.</li>
          </ul>
          <p>
            Upon termination, your right to use Elyxer ceases immediately. Provisions of these Terms that by their
            nature should survive termination — including intellectual property, indemnification, disclaimers, and
            governing law — shall continue to apply.
          </p>
        </Section>

        <Section title="18. General Provisions">
          <SubSection title="18.1 Entire Agreement">
            <p>
              These Terms of Service, together with our Privacy Policy, Cookie Policy, and any other policies
              incorporated by reference, constitute the entire agreement between you and Elyxer with respect to your
              use of the platform.
            </p>
          </SubSection>
          <SubSection title="18.2 Severability">
            <p>
              If any provision of these Terms is found to be unenforceable or invalid under applicable law, that
              provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining
              provisions shall continue in full force and effect.
            </p>
          </SubSection>
          <SubSection title="18.3 Waiver">
            <p>
              Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right
              or provision. Any waiver must be in writing and signed by an authorised representative of PROAPEX
              INNOVATIONS PRIVATE LIMITED.
            </p>
          </SubSection>
          <SubSection title="18.4 Assignment">
            <p>
              You may not assign or transfer your rights or obligations under these Terms without our prior written
              consent. Elyxer may assign these Terms in connection with a merger, acquisition, or sale of all or
              substantially all of our assets, with notice to you.
            </p>
          </SubSection>
          <SubSection title="18.5 Language">
            <p>
              These Terms are drafted in English. In case of any conflict between an English version and any translated
              version, the English version shall prevail.
            </p>
          </SubSection>
        </Section>

        <Section title="19. Contact Us">
          <p>For any questions, concerns, or feedback regarding these Terms of Service, please contact us at:</p>
          <ul className="list-none space-y-1">
            <li><strong className="text-foreground">General Support:</strong> support@elyxer.co</li>
            <li><strong className="text-foreground">Grievance Officer:</strong> grievance@elyxer.co</li>
            <li><strong className="text-foreground">Postal Address:</strong> PROAPEX INNOVATIONS PRIVATE LIMITED, Unit 101, Oxford Towers, 139, HAL Old Airport Road, Kodihalli, Bengaluru, Karnataka - 560008, India</li>
          </ul>
        </Section>

        <LegalFooterNote>
          These Terms of Service are governed by the laws of India including the Information Technology Act, 2000,
          Consumer Protection Act, 2019, and the Digital Personal Data Protection Act, 2023.
        </LegalFooterNote>
      </div>
    </article>
  </Layout>
);

export default TermsOfService;
