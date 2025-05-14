import { girlWithPhone, heroSectionImage3, profileImage4 } from "@/assets";
import Footer from "@/components/footer";
import PortfolioSection from "@/components/portfolio-section";
import WebDevelopmentSection from "@/components/web-development-services/web-development-section";
import HireDevelopersSection from "@/components/hire-developer/hire-developers-section";
import Link from "next/link";
import PricingSection from "@/components/pricing/pricing-section";
import ServicesHeroSection from "@/components/digital-marketing/services-hero-section";

export type FeatureItemType = {
  icon: "megaphone" | "chart";
  title: string;
  description: string;
};
export default function Page() {
  const ppcServices = [
    {
      number: "01",
      title: "Keyword Research and Selection",
      description:
        "We begin by identifying the most relevant and profitable keywords for your business. This involves gaining a deeper understanding of your target audience and their search behavior.",
    },
    {
      number: "02",
      title: "Ad Creation and Copywriting",
      description:
        "Next, we craft compelling ad copy that doesn’t only attract attention but aligns with your brand’s overall message. We tailor ads for various formats, including text, display, and video.",
    },
    {
      number: "03",
      title: "Campaign Setup and Configuration",
      description:
        "Campaign configuration means structuring the campaign, such as setting up ad groups and choosing targeting options. We also set bidding strategies during this phase.",
    },
    {
      number: "04",
      title: "Landing Page Optimization",
      description:
        "A key part of our PPC campaign management services is ensuring the landing page where visitors land is optimized for conversions. Here, optimizing means improving user experience or loading speed.",
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

  const pageHeading = "PPC Management Services";

  //WebDevelopmentSection
  const heading = "Unleash the Power of Targeted Advertising";
  const headingtitle = "We Help You";

  //Hire
  const HireDevelopersSectionTitle = "Why Choose Our";
  const HireDevelopersSectionHeading = "PPC Advertising Agency";
  const HireDevelopersSectionDiscripton =
    "Finding a PPC advertising agency is easy. However, finding a pay-per-click advertising company that’s as invested in your success as you are will prove challenging. Marketairre checks that box and many more, including:";

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ServicesHeroSection heading={pageHeading} />

        <>
          <WebDevelopmentSection
            services={ppcServices}
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
            pricingOptionsTilte=""
            pricingOptionsHeading=""
            pricingOptionsDescription=""
            pricingOptions={[]}
          />
          <HireDevelopersSection
            features={seoFeatures}
            HireDevelopersSectionDiscripton={HireDevelopersSectionDiscripton}
            image={girlWithPhone.src}
            HireDevelopersSectionHeading={HireDevelopersSectionHeading}
            HireDevelopersSectionTitle={HireDevelopersSectionTitle}
          />
        </>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
