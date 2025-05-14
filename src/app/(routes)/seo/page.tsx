import {
  girlWithPhone,
  heroSectionImage3,
  logoServiceImage,
  profileImage4,
  seoServiceImage,
} from "@/assets";
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
  const pageHeading = "SEO Services";

  const pricingOptions = [
    {
      id: 1,
      packageHeading: "SEO Essential",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 250,
      originalPrice: 500,
      buttonTitle: "Buy Now",
      features: [
        "5 Keywords",
        "Off-page Optimization",
        "Link Building",
        "Social Bookmarking",
        "Guaranteed Ranking on Google",
        "Basic Analytical Report",
        "Dedicated Project Manager",
      ],
    },
    {
      id: 2,
      packageHeading: "SEO Standard",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 500,
      originalPrice: 1000,
      buttonTitle: "Buy Now",
      features: [
        "10 Keywords",
        "Off-page Optimization",
        "On-page Optimization",
        "Link Building",
        "Social Bookmarking",
        "Guaranteed Ranking on Google",
        "Comprehensive Analytical Report",
        "Dedicated Project Manager",
      ],
    },
    {
      id: 3,
      packageHeading: "SEO Classic",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 700,
      originalPrice: 1400,
      buttonTitle: "Buy Now",
      features: [
        "20 Keywords",
        "Off-page Optimization",
        "On-page Optimization",
        "Link Building",
        "Social Bookmarking",
        "Guaranteed Ranking on Google",
        "Comprehensive Analytical Report",
        "Dedicated Project Manager",
      ],
    },
    {
      id: 4,
      packageHeading: "SEO Exclusive",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 1300,
      originalPrice: 2600,
      buttonTitle: "Buy Now",
      features: [
        "30 Keywords",
        "Off-page Optimization",
        "On-page Optimization",
        "Technical SEO",
        "Website Audit",
        "Link Building",
        "Social Bookmarking",
        "Website Performance Enhancement",
        "Comprehensive Analytical Report",
        "Dedicated Project Manager",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ServicesHeroSection heading={pageHeading} />

        <div>
          <WebDevelopmentSection
            services={seoServices}
            image={seoServiceImage.src}
            headingtitle="Professional SEO Services"
            heading="Dominate the Search Engines"
          />
          {/* <PortfolioSection
            heading="Our Diverse Portfolio"
            title=""
            paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
            filters={["All", "E-commerce", "Business", "Real Estate"]}
            btnIcon=""
          /> */}
          <PricingSection
            pricingOptionsTilte="BEAT THE ALGORITHM "
            pricingOptionsHeading="Not All Rankings Are Created Equal "
            pricingOptionsDescription="In a sea of shortcuts and black-hat tricks, lasting visibility comes from strategy, not gimmicks. Rise with relevance—win where it matters. "
            pricingOptions={pricingOptions}
          />
          <HireDevelopersSection
            features={seoFeatures}
            image={logoServiceImage.src}
            HireDevelopersSectionTitle="What Makes Us "
            HireDevelopersSectionHeading="The Best SEO Company "
            HireDevelopersSectionDiscripton="Navigating SEO without risking penalties can be complex. That’s why we support you every step of the way. Our results-driven SEO approach boosts keyword rankings, drives organic traffic, and increases your bottom line. "
          />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
