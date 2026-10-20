import Layout from "@/components/Layout";
import {
  Section,
  SubSection,
  LegalTable,
  Callout,
  LegalHero,
  LegalFooterNote,
} from "@/components/legal/LegalPrimitives";

const CookiePolicy = () => (
  <Layout>
    <LegalHero
      eyebrow="Legal · Cookies & Tracking"
      title="Cookie & Tracking Policy"
      subtitle="How Elyxer uses device identifiers, SDKs, and local storage — and how you can control them."
    />

    <article className="pb-20 md:pb-32">
      <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
        <Callout title="About This Policy">
          Elyxer is a mobile application and does not use traditional browser cookies. However, like all modern mobile
          apps, we use similar tracking technologies including device identifiers, SDKs, and local storage. This policy
          explains exactly what we use, why we use it, and how you can control it. This policy should be read together
          with our Privacy Policy available at www.elyxer.co/privacy.
        </Callout>

        <Section title="1. What Are Cookies and Tracking Technologies?">
          <p>
            Cookies are small data files placed on your device by websites and apps. Since Elyxer is a mobile
            application rather than a website, we do not use traditional browser cookies. However, we use equivalent
            mobile tracking technologies that serve similar purposes:
          </p>
          <LegalTable
            headers={["Technology", "What It Is", "How Elyxer Uses It", "Can You Opt Out?"]}
            rows={[
              ["Device Identifiers", "A unique ID assigned to your device by the operating system (IDFA on iOS, GAID on Android)", "Analytics, fraud prevention, and session management", "Yes — via iOS / Android device settings"],
              ["Session Tokens", "A temporary token generated when you log in to keep you signed in", "Maintains your login state securely across the app", "No — essential for app function"],
              ["Local Storage", "Small data files stored on your device by the app", "Stores your preferences, settings, and temporary session data locally", "Clearing app cache removes this"],
              ["Firebase SDK", "Google Firebase analytics and crash reporting service", "App performance monitoring, crash reports, and usage analytics", "Yes — via Privacy Settings in app"],
              ["Analytics SDKs", "Third-party analytics libraries embedded in the app", "Understanding how users interact with Elyxer to improve the experience", "Yes — via Privacy Settings in app"],
              ["Push Notification Tokens", "A unique token generated when you allow push notifications", "Delivering in-app notifications (Invites, Vibes, messages)", "Yes — disable notifications in device Settings"],
              ["Camera & Microphone Tokens", "OS-level permission tokens for camera and microphone access", "Profile photos, Selfie Badge, and Virtual Date Room sessions", "Yes — revoke in device Settings anytime"],
            ]}
          />
        </Section>

        <Section title="2. Categories of Tracking Technologies We Use">
          <SubSection title="2.1 Strictly Necessary">
            <p>
              These technologies are essential for the Elyxer app to function. Without them, you cannot log in, use the
              app, or access any features. They cannot be disabled.
            </p>
            <LegalTable
              headers={["Technology", "Purpose", "Provider", "Can Be Disabled?"]}
              rows={[
                ["Session Token", "Keeps you logged in to your account", "Elyxer (PROAPEX)", "No — essential"],
                ["Local App Storage", "Stores your preferences and settings on device", "Elyxer (PROAPEX)", "No — essential"],
                ["Device OS Identifier", "Security and fraud prevention during login", "Apple iOS / Google Android", "No — essential"],
              ]}
            />
          </SubSection>

          <SubSection title="2.2 Functional">
            <p>
              These technologies remember your choices and personalise your experience. Disabling them may affect how
              the app works for you but will not prevent basic access.
            </p>
            <LegalTable
              headers={["Technology", "Purpose", "Provider", "Can Be Disabled?"]}
              rows={[
                ["Push Notification Token", "Delivers Invites, Vibes, messages and alerts", "Apple APNs / Google FCM", "Yes — in device Settings"],
                ["Language & Preference Storage", "Remembers your app preferences and settings", "Elyxer (PROAPEX)", "Yes — clearing app cache"],
                ["Location Permission Token", "Enables proximity-based discovery features", "Apple iOS / Google Android", "Yes — in device Settings"],
              ]}
            />
          </SubSection>

          <SubSection title="2.3 Analytics and Performance">
            <p>
              These technologies help us understand how users interact with Elyxer so we can fix bugs, improve
              performance, and build better features. All analytics data is anonymised or pseudonymised — we do not
              sell it.
            </p>
            <LegalTable
              headers={["Technology", "Purpose", "Provider", "Can Be Disabled?"]}
              rows={[
                ["Firebase Analytics", "App usage patterns, feature engagement, session data", "Google Firebase", "Yes — via Privacy Settings"],
                ["Crash Reporting SDK", "Captures app crashes and errors so we can fix them", "Google Firebase / Crashlytics", "Yes — via Privacy Settings"],
                ["Performance Monitoring", "Monitors app load times and response speeds", "Google Firebase", "Yes — via Privacy Settings"],
              ]}
            />
          </SubSection>

          <SubSection title="2.4 Safety and Security">
            <p>
              These technologies are used to protect users, prevent fraud, and enforce our Community Guidelines. They
              cannot be disabled as they are integral to platform safety.
            </p>
            <LegalTable
              headers={["Technology", "Purpose", "Provider", "Can Be Disabled?"]}
              rows={[
                ["Content Moderation SDK", "AI scanning of photos, bios and Moments for policy violations", "Elyxer AI / Third-party moderation tool", "No — safety essential"],
                ["Fraud Detection Signals", "Detects fake accounts, bots and suspicious activity", "Elyxer (PROAPEX)", "No — safety essential"],
                ["Device Fingerprinting (limited)", "Identifies devices previously banned from the platform", "Elyxer (PROAPEX)", "No — safety essential"],
              ]}
            />
          </SubSection>
        </Section>

        <Section title="3. Third-Party SDKs and Services">
          <p>
            Elyxer integrates third-party software development kits (SDKs) that may collect data as part of their
            operation. Each third-party provider has their own privacy policy governing their data practices:
          </p>
          <LegalTable
            headers={["Provider", "Purpose in Elyxer", "Their Privacy Policy"]}
            rows={[
              ["Google Firebase", "Analytics, crash reporting, push notifications (FCM)", "policies.google.com/privacy"],
              ["Apple APNs", "Push notifications on iOS devices", "apple.com/privacy"],
              ["Amazon Web Services", "Cloud infrastructure — stores all Elyxer data", "aws.amazon.com/privacy"],
              ["[INSERT PAYMENT GATEWAY]", "Payment processing for subscriptions", "[INSERT PRIVACY POLICY URL]"],
            ]}
          />
        </Section>

        <Section title="4. Device Permissions We Request">
          <p>
            Elyxer requests the following device permissions. Each permission is requested only when you use the
            relevant feature — we never request permissions in advance or without a clear purpose:
          </p>
          <LegalTable
            headers={["Permission", "Why We Need It", "When Requested", "How to Revoke"]}
            rows={[
              ["Camera", "Taking profile photos, Selfie Badge capture, Virtual Date Room video", "When you tap the camera feature for the first time", "Device Settings > Elyxer > Camera"],
              ["Microphone", "Audio during Virtual Date Room sessions only", "When you first enter a Virtual Date Room", "Device Settings > Elyxer > Microphone"],
              ["Location (GPS)", "Proximity-based discovery — only approximate distance is shown to other users, never your exact location", "During onboarding location module", "Device Settings > Elyxer > Location"],
              ["Photo Library", "Selecting photos from your device for your profile", "When you first upload a photo from library", "Device Settings > Elyxer > Photos"],
              ["Notifications", "Sending alerts for new Invites, Vibes, messages and account updates", "After account creation — optional", "Device Settings > Notifications > Elyxer"],
            ]}
          />
        </Section>

        <Section title="5. Your Controls and Opt-Out Options">
          <p>Elyxer gives you meaningful control over tracking and permissions. Here is how you can manage each:</p>

          <SubSection title="5.1 In-App Privacy Controls">
            <ul className="list-disc pl-6 space-y-1">
              <li>Go to Account Settings &gt; Privacy Controls to manage your consent preferences;</li>
              <li>Toggle Analytics Tracking on or off — this disables Firebase Analytics and performance monitoring;</li>
              <li>Toggle Magic Search AI processing on or off;</li>
              <li>Manage your individual sensitive data consents (gender identity, sexual orientation, etc.);</li>
              <li>Manage notification preferences — choose which types of notifications you receive.</li>
            </ul>
          </SubSection>

          <SubSection title="5.2 Device-Level Controls (iOS)">
            <ul className="list-disc pl-6 space-y-1">
              <li>Go to Settings &gt; Privacy &amp; Security &gt; Tracking to disable cross-app tracking (IDFA);</li>
              <li>Go to Settings &gt; [Elyxer] to revoke individual permissions (Camera, Location, Notifications, Photos, Microphone);</li>
              <li>Go to Settings &gt; Privacy &amp; Security &gt; Location Services &gt; Elyxer to control location access precisely.</li>
            </ul>
          </SubSection>

          <SubSection title="5.3 Device-Level Controls (Android)">
            <ul className="list-disc pl-6 space-y-1">
              <li>Go to Settings &gt; Privacy &gt; Ads and opt out of ads personalisation (GAID);</li>
              <li>Go to Settings &gt; Apps &gt; Elyxer &gt; Permissions to revoke individual permissions;</li>
              <li>Go to Settings &gt; Apps &gt; Elyxer &gt; Notifications to control notification delivery.</li>
            </ul>
          </SubSection>

          <SubSection title="5.4 Clearing Local Storage">
            <ul className="list-disc pl-6 space-y-1">
              <li>On iOS: Delete and reinstall the Elyxer app to clear all locally stored data;</li>
              <li>On Android: Go to Settings &gt; Apps &gt; Elyxer &gt; Storage &gt; Clear Cache to remove locally stored data;</li>
              <li>Note: Clearing local storage does not delete your account or server-side data. To delete all your data, use Account Settings &gt; Delete Account.</li>
            </ul>
          </SubSection>

          <Callout title="Important — Opting Out of Analytics">
            Opting out of analytics tracking does not affect your ability to use Elyxer. You will continue to have full
            access to all features. We use analytics data to improve the app — opting out simply means your usage data
            will not be included in our analysis. We never sell analytics data to third parties.
          </Callout>
        </Section>

        <Section title="6. What We Do Not Do">
          <p>Elyxer commits to the following:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We do not use advertising trackers or serve targeted advertisements within the app;</li>
            <li>We do not sell your tracking data or device identifiers to any third party;</li>
            <li>We do not use cross-app tracking to follow you outside the Elyxer app;</li>
            <li>We do not use your location data to serve location-based advertising;</li>
            <li>We do not use fingerprinting beyond fraud prevention and banned user detection;</li>
            <li>We do not track your activity on other apps or websites;</li>
            <li>We do not share analytics data with third parties in a form that identifies you personally.</li>
          </ul>
          <p>
            Analytics and usage data collected within Elyxer is used exclusively to improve app performance and to
            power in-app features such as Magic Search. This data is never shared with or sold to external advertising
            networks, data brokers, or any third party for commercial purposes.
          </p>
        </Section>

        <Section title="7. App Store Privacy Nutrition Labels">
          <p>
            In compliance with Apple App Store and Google Play Store requirements, Elyxer maintains accurate privacy
            nutrition labels and data safety disclosures within our app store listings. These disclosures reflect the
            data types described in this policy and are updated whenever our data practices change.
          </p>
          <SubSection title="7.1 Apple Privacy Nutrition Label">
            <p>
              Our Apple App Store listing includes a complete Privacy Nutrition Label disclosing all data collected by
              Elyxer and whether it is linked to your identity. This label is maintained in Apple's App Store Connect
              and reflects the categories described in this policy.
            </p>
          </SubSection>
          <SubSection title="7.2 Google Data Safety Section">
            <p>
              Our Google Play Store listing includes a complete Data Safety section disclosing all data types
              collected, their purposes, whether they are shared with third parties, and whether you can request
              deletion. This is maintained in Google Play Console and reflects the categories described in this policy.
            </p>
          </SubSection>
        </Section>

        <Section title="8. How Long We Retain Tracking Data">
          <p>
            Different types of tracking data are retained for different periods depending on their purpose. The
            following table sets out our retention periods for each tracking technology:
          </p>
          <LegalTable
            headers={["Tracking Technology", "Retention Period", "Notes"]}
            rows={[
              ["Session Tokens", "30 days of inactivity", "Automatically expire after 30 days without login"],
              ["Device Identifiers (IDFA / GAID)", "Life of account + 90 days", "Deleted with account; retained 90 days for fraud prevention"],
              ["Firebase Analytics Data", "14 months", "Google Firebase default retention period; anonymised after 14 months"],
              ["Crash Reports", "90 days", "Retained to identify and resolve recurring bugs"],
              ["Push Notification Tokens", "Life of account", "Deleted when account is deleted or notifications are disabled"],
              ["Local App Storage", "Until app is deleted or cache cleared", "Stored on device only; not on our servers"],
              ["Device Fingerprint (banned user detection)", "As long as legally required", "Retained to prevent banned users from creating new accounts"],
            ]}
          />
        </Section>

        <Section title="9. Do Not Track (DNT) Signals">
          <p>
            Some browsers and operating systems include a Do Not Track (DNT) feature that sends a signal to apps and
            websites requesting that your activity not be tracked. Elyxer does not currently respond to DNT signals
            from browsers or operating systems.
          </p>
          <p>
            However, you have meaningful control over tracking through the in-app Privacy Controls and device-level
            settings described in Section 5 of this policy. These controls give you direct, practical options to limit
            data collection — which is more effective than DNT signals, which are not universally recognised or
            enforced.
          </p>
        </Section>

        <Section title="10. Tracking and Children">
          <p>
            Elyxer is strictly an 18+ platform. We do not knowingly use tracking technologies to collect data from
            persons under the age of 18. If we discover that a user is under 18, their account will be suspended and
            all associated tracking data will be deleted in accordance with our Privacy Policy.
          </p>
        </Section>

        <Section title="11. Changes to This Policy">
          <p>
            We may update this Cookie &amp; Tracking Policy from time to time to reflect changes in our technology,
            data practices, or applicable law. When we make material changes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>We will update the effective date at the top of this policy;</li>
            <li>We will notify you via in-app notification and/or email at least 15 days before changes take effect;</li>
            <li>If changes involve new tracking technologies or expanded data collection, we will seek fresh consent where required by law.</li>
          </ul>
        </Section>

        <Section title="12. Contact Us">
          <p>If you have any questions about this Cookie &amp; Tracking Policy or how we use tracking technologies, please contact us:</p>
          <ul className="list-none space-y-1">
            <li><strong className="text-foreground">Email:</strong> support@elyxer.co</li>
            <li><strong className="text-foreground">Grievance Officer:</strong> grievance@elyxer.co</li>
            <li><strong className="text-foreground">Postal Address:</strong> PROAPEX INNOVATIONS PRIVATE LIMITED, Unit 101, Oxford Towers, 139, HAL Old Airport Road, Kodihalli, Bengaluru, Karnataka - 560008, India</li>
          </ul>
        </Section>

        <LegalFooterNote>
          This Cookie &amp; Tracking Policy was drafted in compliance with the Digital Personal Data Protection Act,
          2023 (India), the Information Technology Act, 2000, and applicable Apple App Store and Google Play Store
          requirements.
        </LegalFooterNote>
      </div>
    </article>
  </Layout>
);

export default CookiePolicy;
