import Layout from "@/components/Layout";
import { LegalTable } from "@/components/legal/LegalPrimitives";
import { LegalDocHero, LegalContents, DocSection, P, UL, OL, LI, A, H3 } from "@/components/legal/LegalDoc";

const contents = [{"id": "section-1", "title": "1. THE APPLICATION"}, {"id": "section-2", "title": "2. SCOPE OF LICENCE"}, {"id": "section-3", "title": "3. TECHNICAL REQUIREMENTS"}, {"id": "section-4", "title": "4. MAINTENANCE AND SUPPORT"}, {"id": "section-5", "title": "5. USE OF DATA"}, {"id": "section-6", "title": "6. CONTRIBUTION LICENCE"}, {"id": "section-7", "title": "7. LIABILITY"}, {"id": "section-8", "title": "8. WARRANTY"}, {"id": "section-9", "title": "9. PRODUCT CLAIMS"}, {"id": "section-10", "title": "10. CONTACT INFORMATION"}, {"id": "section-11", "title": "11. TERMINATION"}, {"id": "section-12", "title": "12. THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY"}, {"id": "section-13", "title": "13. INTELLECTUAL PROPERTY RIGHTS"}, {"id": "section-14", "title": "14. APPLICABLE LAW"}, {"id": "section-15", "title": "15. MISCELLANEOUS"}];

const EndUserLicenceAgreement = () => (
  <Layout>
    <LegalDocHero eyebrow="Legal · Licence" title="End User Licence Agreement" updated="November 18, 2026" />
    <article className="pb-20 md:pb-32">
      <div className="container mx-auto px-5 sm:px-6 max-w-3xl">
        <div className="pt-10 md:pt-16 space-y-4 md:space-y-5 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
          <P>Elyxer (the “Licensed Application”) is licensed, not sold, to you (the “End-User”) by PROAPEX INNOVATIONS PRIVATE LIMITED, a company incorporated under the laws of India (the “Licensor”), for use solely in accordance with the terms and conditions of this End-User Licence Agreement (“EULA”).</P>
          <P>By downloading the Licensed Application from Apple's software distribution platform ('App Store') and Google's software distribution platform ('Play Store'), and any update thereto (as permitted by this Licence Agreement), You indicate that You agree to be bound by all of the terms and conditions of this Licence Agreement, and that You accept this Licence Agreement. App Store and Play Store are referred to in this Licence Agreement as '<strong>Services</strong>'.</P>
          <P>The parties of this Licence Agreement acknowledge that the Services are not a Party to this Licence Agreement and are not bound by any provisions or obligations with regard to the Licensed Application, such as warranty, liability, maintenance, and support thereof. Elyxer, not the Services, is solely responsible for the Licensed Application and the content thereof.</P>
          <P>This Licence Agreement may not provide for usage rules for the Licensed Application that are in conflict with the latest Apple Media Services Terms and Conditions and Google Play Terms of Service ('<strong>Usage Rules</strong>'). Elyxer acknowledges that it had the opportunity to review the Usage Rules and this Licence Agreement does not conflict with them.</P>
          <P>Elyxer when purchased or downloaded through the Services, is licensed to You for use only under the terms of this Licence Agreement. The Licensor reserves all rights not expressly granted to You. Elyxer is to be used on devices that operate with Apple's operating systems ('iOS') or Google's operating system ('Android').</P>
        </div>
        <LegalContents items={contents} />
        <DocSection id="section-1" title={"1. THE APPLICATION"}>
          <P>Elyxer (“Licensed Application”) is a mobile application designed to help adults discover and connect with other people, build meaningful connections, and communicate through profiles, messaging, and interactive features, and is customised for iOS and Android mobile devices ('Devices').</P>
        </DocSection>
        <DocSection id="section-2" title={"2. SCOPE OF LICENCE"}>
          <P>2.1 You are given a non-transferable, non-exclusive, non-sublicensable license to install and use the Licensed Application on any Devices that You (End-User) own or control and as permitted by the Usage Rules, with the exception that such Licensed Application may be accessed and used by other accounts associated with You (End-User, The Purchaser) via Family Sharing or volume purchasing.</P>
          <P>2.2 This license will also govern any updates of the Licensed Application provided by the Licensor that replaces, repair, and/or supplement the first Licensed Application unless a separate license is provided for such update, in which case the terms of that new license will govern.</P>
          <P>2.3 You may not share or make the Licensed Application available to third parties (unless to the degree allowed by the Usage Rules, and with Elyxer's prior written consent), sell, rent, lend, lease, or otherwise redistribute the Licensed Application.</P>
          <P>2.4 You may not reverse engineer, translate, disassemble, integrate, decompile, remove, modify, combine, create derivative works or updates of, adapt, or attempt to derive the source code of the Licensed Application, or any part thereof (except with Elyxer's prior written consent).</P>
          <P>2.5 You may not copy (excluding when expressly authorised by this license and the Usage Rules) or alter the Licensed Application or portions thereof. You may create and store copies only on devices that You own or control for backup keeping under the terms of this license, the Usage Rules, and any other terms and conditions that apply to the device or software used. You may not remove any intellectual property notices. You acknowledge that no unauthorised third parties may gain access to these copies at any time. If you sell your Devices to a third party, you must remove the Licensed Application from the Devices before doing so.</P>
          <P>2.6 Violations of the obligations mentioned above, as well as the attempt of such infringement, may be subject to prosecution and damages.</P>
          <P>2.7 Licensor reserves the right to modify the terms and conditions of licensing.</P>
          <P>2.8 Nothing in this license should be interpreted to restrict third-party terms. When using the Licensed Application, You must ensure that You comply with applicable third-party terms and conditions.</P>
          <P>2.9 Elyxer has zero tolerance for objectionable content and abusive users. You must not post objectionable content or abuse other users. We remove such content and suspend or ban users who post it, as described in the Terms of Service and Community Guidelines.</P>
        </DocSection>
        <DocSection id="section-3" title={"3. TECHNICAL REQUIREMENTS"}>
          <P>3.1 The licensor attempts to keep the Licensed Application updated so that it complies with modified/new versions of the firmware and new hardware. You are not granted right to claim such an update.</P>
          <P>3.2 You are responsible for confirming that your device runs a version of iOS or Android supported by the Licensed Application, as stated on its App Store or Play Store listing.</P>
          <P>3.3 Licensor reserves the right to modify the technical specifications as it sees appropriate at any time.</P>
        </DocSection>
        <DocSection id="section-4" title={"4. MAINTENANCE AND SUPPORT"}>
          <P>4.1 The Licensor is solely responsible for providing any maintenance and support services for this Licensed Application. You can reach the Licensor at <A href="mailto:support@elyxer.co">support@elyxer.co</A>.</P>
          <P>4.2 Elyxer and the End-User acknowledge that the Services have no obligation whatsoever to furnish any maintenance and support services with respect to the Licensed Application.</P>
          <H3>4.3 Beta / App Updates Disclaimer</H3>
          <P><strong>4.3.1 Beta Features</strong> From time to time, Elyxer may make certain features, functionalities, or components of the Licensed Application available as beta, early-access, preview, experimental, or test releases (“Beta Features”). Beta Features are made available for evaluation and feedback purposes only, may contain bugs or errors, and may be incomplete or unstable. You acknowledge and agree that:</P>
          <UL>
            <LI>Beta Features are provided “as is” and “as available”, without warranties of any kind;</LI>
            <LI>Elyxer may modify, suspend, or discontinue Beta Features at any time without notice;</LI>
            <LI>Use of Beta Features is entirely at your own risk, and Elyxer shall have no liability arising from or relating to your use of any Beta Features.</LI>
          </UL>
          <P><strong>4.3.2 App Updates</strong> The Licensed Application may periodically receive updates, patches, enhancements, or improvements, including security updates (“Updates”). These Updates may be automatically installed or may require manual installation, depending on your device settings. By using the Licensed Application, you consent to the receipt and installation of such Updates. Elyxer does not guarantee that any Update will: (a) be error-free or uninterrupted, (b) include all previously available features, (c) be compatible with all devices or operating systems, or (d) meet your expectations or specific use-case needs. Your continued use of the Licensed Application following an Update constitutes acceptance of the modified version and any changes included therein.</P>
        </DocSection>
        <DocSection id="section-5" title={"5. USE OF DATA"}>
          <P>You acknowledge and agree that Elyxer may collect and process technical, account, subscription, usage-related, diagnostic, and other personal data related to your use of the application in accordance with the Privacy Policy and applicable data protection laws. Elyxer may periodically collect and use technical information and related data, including but not limited to:</P>
          <UL>
            <LI>device type and model;</LI>
            <LI>operating system version;</LI>
            <LI>application version;</LI>
            <LI>crash reports and diagnostics;</LI>
            <LI>authentication identifiers;</LI>
            <LI>subscription and entitlement status;</LI>
            <LI>app usage and interaction data;</LI>
            <LI>device and technical identifiers.</LI>
          </UL>
          <P>This information may be used to:</P>
          <UL>
            <LI>facilitate software updates, maintenance, and improvements;</LI>
            <LI>provide account authentication and Premium functionality;</LI>
            <LI>monitor, secure, and support the operation of the application;</LI>
            <LI>diagnose crashes, bugs, and technical issues;</LI>
            <LI>improve Elyxer’s features, functionality, performance, and user experience.</LI>
          </UL>
          <P>Such information may be processed in identifiable or non-identifiable form as described in the Privacy Policy and depending on the features used, permissions granted, authentication methods, subscriptions, or user account functionality associated with the application.</P>
        </DocSection>
        <DocSection id="section-6" title={"6. CONTRIBUTION LICENCE"}>
          <P>Your content is licensed to Elyxer only as set out in the 'USER GENERATED CONTRIBUTIONS' section of the Terms of Service, which is limited to operating, securing and providing the Services. Elyxer will not use your photos, name or voice in advertising without your separate written consent.</P>
        </DocSection>
        <DocSection id="section-7" title={"7. LIABILITY"}>
          <P>7.1 The Licensor’s liability in connection with the Licensed Application is governed by the 'LIMITATIONS OF LIABILITY' section of the Terms of Service.</P>
          <P>7.2 The Licensor takes no accountability or responsibility for any damages caused due to a breach of duties according to Section 2 of this Licence Agreement. To avoid data loss, You are required to make use of backup functions of the Licensed Application to the extent allowed by applicable third-party terms and conditions of use. You are aware that in case of alterations or manipulations of the Licensed Application, You will not have access to the Licensed Application.</P>
        </DocSection>
        <DocSection id="section-8" title={"8. WARRANTY"}>
          <P>8.1 Licensor warrants that the Licensed Application is free of spyware, Trojan horses, viruses, or any other malware at the time of Your download. The Licensor warrants that the Licensed Application works as described in the user documentation.</P>
          <P>8.2 No warranty is provided for the Licensed Application that is not executable on the device, that has been unauthorisedly modified, handled inappropriately or culpably, combined or installed with inappropriate hardware or software, used with inappropriate accessories, regardless if by Yourself or by third parties, or if there are any other reasons outside of Elyxer's sphere of influence that affect the executability of the Licensed Application.</P>
          <P>8.3 You are required to inspect the Licensed Application immediately after installing it and notify Elyxer about issues discovered without delay by email provided in Contact Information. The defect report will be taken into consideration and further investigated if it has been emailed within a period of thirty (30) days after discovery.</P>
          <P>8.4 If we confirm that the Licensed Application is defective, Elyxer reserves a choice to remedy the situation either by means of solving the defect or substitute delivery.</P>
          <P>8.5 In the event of any failure of the Licensed Application to conform to any applicable warranty, You may notify the Services Store Operator and Your Licensed Application purchase price will be refunded to You. To the maximum extent permitted by applicable law, the Services Store Operator will have no other warranty obligation whatsoever with respect to the Licensed Application, and any other losses, claims, damages, liabilities, expenses, and costs attributable to any failure to adhere to any warranty.</P>
        </DocSection>
        <DocSection id="section-9" title={"9. PRODUCT CLAIMS"}>
          <P>Elyxer and the End-User acknowledge that Elyxer, and not the Services, is responsible for addressing any claims of the End-User or any third party relating to the Licensed Application or the End-User’s possession and/or use of that Licensed Application, including, but not limited to:</P>
          <OL>
            <LI>product liability claims;</LI>
            <LI>any claim that the Licensed Application fails to conform to any applicable legal or regulatory requirement; and</LI>
            <LI>claims arising under consumer protection, privacy or similar legislation.</LI>
          </OL>
        </DocSection>
        <DocSection id="section-10" title={"10. CONTACT INFORMATION"}>
          <P>For general inquiries, complaints, questions, or claims concerning the Licensed Application, please contact us at:</P>
          <P><strong>PROAPEX INNOVATIONS PRIVATE LIMITED</strong><br />U 101, Oxford Towers, 139/88 HAL Old Airport Road<br />H.A.L II Stage, Bangalore North<br />Bangalore, Karnataka 560008<br />India<br />Email: <A href="mailto:support@elyxer.co">support@elyxer.co</A></P>
        </DocSection>
        <DocSection id="section-11" title={"11. TERMINATION"}>
          <P>The license is valid until terminated by Elyxer or by You. Your rights under this license will terminate automatically and without notice from Elyxer if You fail to adhere to any term(s) of this license. Upon Licence termination, You shall stop all use of the Licensed Application, and destroy all copies, full or partial, of the Licensed Application.</P>
        </DocSection>
        <DocSection id="section-12" title={"12. THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY"}>
          <P>Elyxer represents and warrants that Elyxer will comply with applicable third-party terms of agreement when using a Licensed Application.</P>
          <P>In accordance with Section 9 of the 'Instructions for Minimum Terms of Developer's End-User Licence Agreement', both Apple and Google and their subsidiaries shall be third-party beneficiaries of this End User Licence Agreement and — upon Your acceptance of the terms and conditions of this Licence Agreement, both Apple and Google will have the right (and will be deemed to have accepted the right) to enforce this End User Licence Agreement against You as a third-party beneficiary thereof.</P>
        </DocSection>
        <DocSection id="section-13" title={"13. INTELLECTUAL PROPERTY RIGHTS"}>
          <P>Elyxer and the End-User acknowledge that, in the event of any third-party claim that the Licensed Application or the End-User's possession and use of that Licensed Application infringes on the third party's intellectual property rights, Elyxer, and not the Services, will be solely responsible for the investigation, defence, settlement, and discharge or any such intellectual property infringement claims.</P>
        </DocSection>
        <DocSection id="section-14" title={"14. APPLICABLE LAW"}>
          <P>This License Agreement shall be governed by the laws of India and, where applicable, the laws of the State of Karnataka. Subject to applicable law, the courts of competent jurisdiction in Bengaluru, Karnataka, India, shall have exclusive jurisdiction over any such dispute or claim.</P>
        </DocSection>
        <DocSection id="section-15" title={"15. MISCELLANEOUS"}>
          <P>15.1 If any of the terms of this agreement should be or become invalid, the validity of the remaining provisions shall not be affected. Invalid terms will be replaced by valid ones formulated in a way that will achieve the primary purpose.</P>
          <P>15.2 Collateral agreements, changes, and amendments are only valid if laid down in writing. The preceding clause can only be waived in writing.</P>
        </DocSection>
      </div>
    </article>
  </Layout>
);

export default EndUserLicenceAgreement;
