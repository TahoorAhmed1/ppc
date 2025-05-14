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
  const pricingOptions = [
    {
      id: 1,
      buttonTitle: "Get Started",
      packageHeading: "Basic Website Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 200,
      originalPrice: 400,
      features: [
        "1-Page Website",
        "Customized Design (basic)",
        "WordPress",
        "Contact Form",
        "1 Banner Design (basic)",
        "3 Revisions",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
      ],
    },
    {
      id: 2,

      packageHeading: "Standard Website Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 400,
      originalPrice: 800,
      buttonTitle: "Get Started",
      features: [
        "Up to 3-Page Website",
        "Customized Design (Standard)",
        "WordPress",
        "Mobile Responsive",
        "Hover Effects",
        "Stock Photos",
        "Contact Form",
        "6 Revisions",
        "Complete Design and Development",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
      ],
    },
    {
      id: 3,
      packageHeading: "Professional Website Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 750,
      originalPrice: 1500,
      buttonTitle: "Get Started",

      features: [
        "Up to 5-Page Website",
        "Customized Design (Professional)",
        "WordPress",
        "CMS (Content Management System)",
        "5 Banner Design (Professional)",
        "Sliding Banners",
        "Hover Effects",
        "Mobile Responsive",
        "Stock Photos",
        "Contact Form",
        "Search Engine Submission",
        "9 Revisions",
        "Complete Design and Development",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights",
      ],
    },

    {
      id: 4,
      packageHeading: "Website Identity Kit",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 1400,
      originalPrice: 2800,
      buttonTitle: "Get Started",

      features: [
        "Up to 7-Page Website (Unique)",
        "Custom WordPress Development",
        "Stock Images",
        "7 Banner Designs (Custom)",
        "Sliding Banners",
        "Hover Effects",
        "Content Management System",
        "Online Appointment/Booking/Scheduling Integration",
        "Search Engine Submission",
        "12 Revisions",
        "Complete Design and Development",
        "Interactive Hover Effects",
        "18 Revisions",
        "Content Management System (WordPress)",
        "Online Appointment/Booking/Scheduling Integration (Optional)",
        "Online Payment Integration (Optional)",
        "Custom Contact Form (Optional)",
        "Newsletter Sign up (Optional)",
        "Social Media Integration",
        "Search Bar",
        "Google Friendly Sitemap",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights",
      ],
    },
    {
      id: 5,
      packageHeading: "Exclusive Web Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 1750,
      originalPrice: 3500,
      buttonTitle: "Get Started",

      features: [
        "Up to 10-Page Website (Unique)",
        "Custom, Dynamic, and Interactive Design",
        "Custom WordPress Development",
        "Captivating Sliding Banners",
        "Stock Images",
        "10 Banner Design (Custom)",
        "Interactive Hover Effects",
        "15 Revisions",
        "Content Management System (WordPress)",
        "Online Appointment/Booking/Scheduling Integration",
        "Google Friendly Sitemap",
        "Search Engine Submission",
        "Complete Design and Development",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights",
      ],
    },
    {
      id: 6,
      packageHeading: "Professional Website Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 3200,
      originalPrice: 6400,
      buttonTitle: "Get Started",

      features: [
        "10–20 Page Website (Unique)",
        "Custom, Dynamic, and High-end Design",
        "Custom WordPress Development",
        "Attractive Sliding Banners",
        "Up to 20 Custom Banner Designs",
        "Stock Images",
        "Interactive Hover Effects",
        "18 Revisions",
        "Content Management System (WordPress)",
        "Online Appointment/Booking/Scheduling Integration (Optional)",
        "Online Payment Integration (Optional)",
        "Custom Contact Form (Optional)",
        "Newsletter Sign-up (Optional)",
        "Social Media Integration",
        "Search Bar",
        "Google Friendly Sitemap",
        "Search Engine Submission",
        "Complete Design and Development",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights",
      ],
    },
    {
      id: 7,
      buttonTitle: "Get Started",

      packageHeading: "Custom Website Package",
      packageDescription: "Cost Effective Package for your business",
      duration: null,
      currentPrice: null,
      originalPrice: null,
      features: ["Custom PHP Website", "Web Application", "Custom Web Portal"],
    },
  ];
  const pageHeading = "Writing & Publishing Services";

  //WebDevelopmentSection
  const headingtitle = "BOOK PUBLISHING";
  const heading = "We Help You Bring Your Book to Life";

  //Hire
  const HireDevelopersSectionTitle = "Why Choose Our";
  const HireDevelopersSectionHeading =
    "Innovative Designs to Captivate Your Audience";
  const HireDevelopersSectionDiscripton =
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
            pricingOptions={pricingOptions}
            pricingOptionsTilte=""
            pricingOptionsHeading=""
            pricingOptionsDescription=""
          />
          <HireDevelopersSection
            features={seoFeatures}
            HireDevelopersSectionDiscripton={HireDevelopersSectionDiscripton}
            image={girlWithPhone.src}
            HireDevelopersSectionHeading={HireDevelopersSectionHeading}
            HireDevelopersSectionTitle={HireDevelopersSectionTitle}
          />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
