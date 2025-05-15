import { logoServiceImage, seoServiceImage } from "@/assets";
import WebDevelopmentSection from "@/components/web-development-services/web-development-section";
import HireDevelopersSection from "@/components/hire-developer/hire-developers-section";
import PricingSection from "@/components/pricing/pricing-section";
import ServicesHeroSection from "@/components/digital-marketing/services-hero-section";
import { seoPackage } from "@/components/packages/packages";
export type FeatureItemType = {
  icon: "megaphone" | "chart";
  title: string;
  description: string;
};
export default function Page() {
  const seoServices = [
    {
      number: "01",
      title: "Custom SEO Strategies",
      description:
        "We develop tailored SEO strategies designed to improve your search rankings, drive organic traffic, and increase conversions.",
    },
    {
      number: "02",
      title: "On-Page Optimization",
      description:
        "Our team optimizes your website’s content, structure, and metadata to ensure it ranks higher and provides a seamless user experience.",
    },
    {
      number: "03",
      title: "Link Building & Outreach",
      description:
        "We use proven techniques to build high-quality backlinks that enhance your site's authority and search visibility.",
    },
    {
      number: "04",
      title: "Performance Monitoring & Reporting",
      description:
        "We track and analyze key performance metrics to continually refine your SEO strategy and ensure long-term success.",
    },
  ];

  const seoFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "SEO Specialists",
      description:
        "We’re more than SEO experts—our team blends skilled writers, developers, and outreach professionals. ",
    },
    {
      icon: "chart",
      title: "Advanced SEO Tools",
      description:
        "With cutting-edge SEO platforms, we fine-tune your site to rank higher and perform at its best. ",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ServicesHeroSection heading="SEO Services" />

        <div>
          <WebDevelopmentSection
            services={seoServices}
            image={seoServiceImage.src}
            headingtitle="Professional SEO Services"
            heading="Dominate the Search Engines"
          />

          <PricingSection
            pricingOptionsTilte="BEAT THE ALGORITHM "
            pricingOptionsHeading="Not All Rankings Are Created Equal "
            pricingOptionsDescription="In a sea of shortcuts and black-hat tricks, lasting visibility comes from strategy, not gimmicks. Rise with relevance—win where it matters. "
            pricingOptions={seoPackage}
          />
          <HireDevelopersSection
            features={seoFeatures}
            image={logoServiceImage.src}
            HireDevelopersSectionTitle="What Makes Us "
            HireDevelopersSectionHeading="The Best SEO Company "
            HireDevelopersSectionDiscripton="Navigating SEO without risking penalties can be complex. That’s why we support you every step of the way. Our results-driven SEO approach boosts keyword rankings, drives organic traffic, and increases your bottom line. "
          />
        </div>
      </div>
    </>
  );
}
