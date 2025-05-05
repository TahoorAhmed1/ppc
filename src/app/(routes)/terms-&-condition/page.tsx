import { heroSectionImage3 } from "@/assets";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <div
        className="text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSectionImage3.src})` }}
      >
        <div className="px-4 md:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Terms and Conditions
          </h1>
          <div className="flex justify-center text-sm sm:text-base flex-wrap gap-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2 hidden sm:inline">•</span>
            <span>Terms and Conditions</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl w-full mx-auto px-4 md:px-6 py-10">
        {/* Paste your full <p> and <section> blocks here exactly as they are */}
        <p className="mb-4">
          Accessing the website confirms that you have agreed to our Terms and
          Conditions. The person accessing is referred to as &quot;You&quot; or
          &quot;Yours,&quot; and we use the words &quot;We,&quot;
          &quot;Ours,&quot; or &quot;Us&quot; to refer to ourselves.
        </p>

        <p className="mb-6">
          We also use the words like &quot;acceptance&quot; and
          &quot;consideration&quot; for your assistance...
        </p>

        <p className="font-medium mb-6">
          Below are the terms you must accept before using our services:
        </p>

        {/* All your <section> elements go here unchanged */}
        {/* Example of one responsive section (already styled well) */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">1. Protection of Privacy</h2>
          <p className="mb-3">
            Protecting the privacy of our customers is most important...
          </p>
          <p className="mb-3">
            If an unknown source tries to invade your privacy...
          </p>
        </section>

        {/* ...Repeat for all other sections... */}

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">16. Contact Us</h2>
          <p className="mb-3">
            After reading our Terms and Conditions, if you have any questions,
            e-mail us at{" "}
            <a
              href="mailto:support@creativeagency360.com"
              className="text-blue-600 hover:underline"
            >
              support@creativeagency360.com
            </a>
            .
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
