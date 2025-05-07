import { girlWithPhone, heroSectionImage3, profileImage4 } from "@/assets";
import Footer from "@/components/footer";
import PortfolioSection from "@/components/portfolio-section";
import WebDevelopmentSection from "@/components/web-development-services/web-development-section";
import HireDevelopersSection from "@/components/hire-developer/hire-developers-section";
import Link from "next/link";
import PricingSection from "@/components/pricing/pricing-section";

export type FeatureItemType = {
  icon: "megaphone" | "chart";
  title: string;
  description: string;
};
export default function Page() {
  const bookPublishingServices = [
    {
      number: "01",
      title: "Manuscript Development & Ghostwriting",
      description:
        "We work closely with you to develop compelling content that aligns with your vision and voice. Our expert ghostwriters craft engaging narratives across all genres, ensuring your story is told with authenticity and impact.",
    },
    {
      number: "02",
      title: "Professional Editing & Proofreading",
      description:
        "Our editors meticulously refine your manuscript, enhancing clarity, structure, and flow. We eliminate errors and polish your book to perfection, ensuring it meets the highest literary standards.",
    },
    {
      number: "03",
      title: "Formatting & Publishing Assistance",
      description:
        "We take care of book formatting, cover design, and all the technical aspects of publishing. Whether it’s traditional or self-publishing, we ensure your book is ready for print and digital distribution.",
    },
    {
      number: "04",
      title: "Book Marketing & Promotion",
      description:
        "Beyond publishing, we help you establish your presence in the literary world. From targeted promotions to strategic branding, we ensure your book reaches the right audience and gains the recognition it deserves.",
    },
  ];

  const seoFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "Proven Record of Success",
      description:
        "Our proven record of success speaks for itself, eliminating any doubt you may have.",
    },
    {
      icon: "chart",
      title: "Tailored Strategies",
      description:
        "Our team takes its time to understand your business goals and presents solutions accordingly.",
    },
  ];

  const pageHeading = "Writing & Publishing Services";

  //WebDevelopmentSection
  const headingtitle = "BOOK PUBLISHING";
  const heading = "We Help You Bring Your Book to Life";

  //Hire
  const hireHeadingTitle = "Why Choose Our";
  const hireHeading = "Innovative Designs to Captivate Your Audience";
  const hireHeadingDescription =
    "Finding a PPC advertising agency is easy. However, finding a pay-per-click advertising company that’s as invested in your success as you are will prove challenging. Marketairre checks that box and many more, including:";

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div
          className="text-white py-20 md:py-32 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroSectionImage3.src})`,
          }}
        >
          <div className="px-4 md:px-8 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {pageHeading}
            </h1>
            <div className="flex justify-center text-sm md:text-base flex-wrap gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2 hidden sm:inline">•</span>
              <span>{pageHeading}</span>
            </div>
          </div>
        </div>

        <div className="">
          <WebDevelopmentSection
            services={bookPublishingServices}
            image={girlWithPhone.src}
            heading={heading}
            headingtitle={headingtitle}
          />
          <PortfolioSection
            heading="Our Diverse Portfolio"
            title=""
            paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
            filters={["All", "E-commerce", "Business", "Real Estate"]}
            btnIcon=""
          />
          <PricingSection
            filter={[
              "Animation",
              "Branding",
              "Digital Marketing",
              "E-commerce",
              "Logo Design",
              "SEO",
              "SMM",
              "Web Design",
            ]}
          />
          <HireDevelopersSection
            features={seoFeatures}
            hireHeadingDescription={hireHeadingDescription}
            image={girlWithPhone.src}
            hireHeading={hireHeading}
            hireHeadingTitle={hireHeadingTitle}
          />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
