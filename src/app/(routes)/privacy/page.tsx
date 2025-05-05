import { heroSectionImage3 } from "@/assets";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Background Image */}
      <div
        className="text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSectionImage3.src})` }}
      >
        <div className="px-4 md:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <div className="flex justify-center text-sm sm:text-base flex-wrap gap-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2 hidden sm:inline">•</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl w-full mx-auto px-4 md:px-6 py-10">
        {/* Each section stays the same, just with consistent styling */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Regulatory Compliance</h2>
          <p className="mb-3">
            The revised Rule implements the Telemarketing and Consumer Fraud and
            Abuse Prevention Act (TCFPA). It is crucially important that Creative Creative
            Agency 360 aligns with the TCR regulations.
          </p>
          <p className="mb-3">
            Creative Creative Agency 360 respects the privacy rights and data protection
            rights of its users and recognizes the importance of protecting the personal
            information we collect about you...
          </p>
        </section>

        {/* ...Paste all your other <section> blocks here exactly as they are... */}

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">Contact Us</h2>
          <p className="mb-3">
            If you have questions or need to reach us about this Privacy Policy, please
            email us at{" "}
            <a
              href="mailto:support@creativeagency360.com"
              className="text-blue-600 hover:underline"
            >
              support@creativeagency360.com
            </a>{" "}
            as provided on our Privacy Policy page.
          </p>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-4 border-t border-gray-200 text-center text-gray-600 text-sm relative z-10">
          © 2025 Creative Creative Agency 360, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}
