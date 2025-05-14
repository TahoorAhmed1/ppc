import { heroSectionImage3 } from "@/assets";
import ServicesHeroSection from "@/components/digital-marketing/services-hero-section";
import Footer from "@/components/footer-2";
import Link from "next/link";

const pageHeading = "Terms and Conditions";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col ">
      <ServicesHeroSection heading={pageHeading} />

      <div className="max-w-[1000px] mx-auto px-4 py-8">
        <p className="mb-4">
          Accessing the website confirms that you have agreed to our Terms and
          Conditions. The person accessing is referred to as &quot;You&quot; or
          &quot;Yours,&quot; and we use the words &quot;We,&quot;
          &quot;Ours,&quot; or &quot;Us&quot; to refer to ourselves.
        </p>

        <p className="mb-6">
          We also use the words like &quot;acceptance&quot; and
          &quot;consideration&quot; for your assistance. In addition, we conduct
          formal meetings to meet clients&apos; expectations regarding our
          services.
        </p>

        <p className="font-medium mb-6">
          Below are the terms you must accept before using our services:
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">1. Protection of Privacy</h2>
          <p className="mb-3">
            Protecting the privacy of our customers is most important. Only
            authorized members within our company access the data of customers
            when required. In addition, our technicians monitor our website
            regularly to ensure your data is protected.
          </p>
          <p className="mb-3">
            If an unknown source tries to invade your privacy, we will
            immediately act against it. Please visit our{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            page to learn more about protecting your personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">2. Confidential Data</h2>
          <p className="mb-3">
            Creative Creative Agency 360 follows the &apos;Under the Data
            Protection Act.&apos; Your information will be confidential when
            passed on to third parties. It will only be accessible by the
            authorities for legal proceedings.
          </p>
          <p className="mb-3">
            You can request us to provide a copy of your records. According to
            the agreed contract, you must keep the copy of their records safe as
            it will benefit both parties.
          </p>
          <p className="mb-3">
            Your personal information or e-mail will be safe and will not be
            shared with third parties. You will only receive e-mails regarding
            the services you agreed to.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">3. Limitations</h2>
          <p className="mb-3">
            The information provided on our website is cut out from all the
            warranties that affiliate any third party. It also includes any
            omission that may interfere with the website. We will not be held
            responsible for the damages from your end while using the website.
          </p>
          <p className="mb-3">
            The damage can be in the form of business loss, computer
            malfunction, or a technical glitch. The limitations mentioned above
            are applicable by law. Therefore, your lawful rights will not get
            affected by it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">4. Cancellation</h2>
          <p className="mb-3">
            Creative Creative Agency 360 offers 2 days to cancel your
            subscription. We will accept your cancellation by e-mail, message,
            call, or in person. Both parties have the right to cancel the
            agreement for any reason.
          </p>
          <p className="mb-3">
            We will not provide a refund for the services that you cancel right
            after signing up for them. If you have additional questions about
            our refund policy, please contact our representatives.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">5. Accessibility</h2>
          <p className="mb-3">
            Creative Creative Agency 360 offers a wide range of services that
            are accessible to everyone. You can use our website for particular
            downloads, programs, or texts. Republication of any feature of our
            website is strictly prohibited.
          </p>
          <p className="mb-3">
            We admit that its services might get interrupted because of some
            errors. However, you can rest assured that our technical team is
            doing their best to resolve them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">6. Use of Log Files</h2>
          <p className="mb-3">
            We use log files and IP addresses that regularly check for website
            upgrades. Log files are also used to keep your movement in check and
            collect demographic data.
          </p>
          <p className="mb-3">
            IP addresses do not have any connection with the personal data of
            clients. The IP addresses in the log files of Creative Creative
            Agency 360 access to web servers, URLs, and system administration.
          </p>
          <p className="mb-3">
            We restrict this information to those only authorized members can
            access it. Without your consent, we will not access your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">7. Function of Cookies</h2>
          <p className="mb-3">
            Creative Creative Agency 360 uses cookies to collect users&apos;
            detail on every visit. The cookies enhance functionality and offer
            easy website browsing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">8. Links</h2>
          <p className="mb-3">
            Creative Creative Agency 360 does not allow users to create links to
            their pages without prior consent. Doing so without approval can put
            you at risk. In content on our website, we have limitations in
            various areas on your web page.
          </p>
          <p className="mb-3">
            We encourage users to verify the security status of the links placed
            on our website. You must confirm the protection and trust of
            third-party content on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">9. Notice of Copyright</h2>
          <p className="mb-3">
            All the content of Creative Creative Agency 360 is protected
            according to Intellectual Property law, including copyright. You
            cannot own any material, content, and services of the website unless
            third parties acting on our behalf or authorized personnel access
            it.
          </p>
          <p className="mb-3">
            Copying the content from our website and rephrasing it to publish on
            other websites means breaching the agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">10. Trademarks</h2>
          <p className="mb-3">
            The content and services on the website are exclusive trademarks of
            Creative Creative Agency 360. The services of other companies on our
            website show that they are the trademarks of their respective
            owners, such as social media icons.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">
            11. Rights of Third Parties
          </h2>
          <p className="mb-3">
            If you agree with our Terms and Conditions, it confirms that you
            cannot take legal action for any damage you incur. You agree not to
            hold us, our representatives, our partners, our agents, and our
            employees responsible for the damages you face, financial or
            otherwise.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">12. General Conditions</h2>
          <p className="mb-3">
            After you have accepted our Terms and Conditions, we can take legal
            action against you if you violated a part of or the whole Terms and
            Conditions. We are not liable to tell you the reason behind doing
            so.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">13. Newsletter</h2>
          <p className="mb-3">
            Creative Creative Agency 360 uses newsletters to send e-mails and
            keep your ID safe from third parties. We also provide unsubscribe
            instructions for those who do not want newsletter subscriptions.
          </p>
          <p className="mb-3">
            If you feel comfortable opting out of our newsletter distribution
            list, confirm it by sending an e-mail to us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">14. Submissions of Users</h2>
          <p className="mb-3">
            We have already mentioned that you are responsible for your
            communication and posting. According to our Terms and Conditions,
            you must avoid:
          </p>
          <ul className="list-disc pl-8 mb-3 space-y-2">
            <li>Posting copied content on your website.</li>
            <li>Posting articles that expose the secret of trades.</li>
            <li>Posting material that discloses others&apos; privacy.</li>
            <li>
              Posting harmful, derogatory, negative, threatening, or otherwise
              objectionable content.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">
            15. Changes in Terms and Conditions
          </h2>
          <p className="mb-3">
            Creative Creative Agency 360 has all the rights to change or upgrade
            its Terms and Conditions when needed. Your continued use of our
            service confirms that you have read and accepted the changes.
          </p>
          <p className="mb-3">
            The Terms and Conditions are used to build a level of understanding
            between us and our clients. Accessing our website means that you
            have read and accepted the agreement of the disclaimer notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">16. Contact Us</h2>
          <p className="mb-3">
            After reading our Terms and Conditions, if you have any questions,
            e-mail us at{" "}
            <a href="mailto:support@creativeagency360.com">
              support@creativeagency360.com.
            </a>
          </p>
        </section>
      </div>
      
    </div>
  );
}
