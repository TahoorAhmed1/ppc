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
  const brandStrategyServices = [
    {
      number: "01",
      title: "Brand Strategy Development",
      description:
        "Your business is unique, and your brand identity should reflect that. We craft a tailored roadmap for your brand’s values and positioning to ensure it stands out in a competitive market.",
    },
    {
      number: "02",
      title: "Visual Identity Design",
      description:
        "Our team creates memorable logos and cohesive visual elements that encapsulate your brand’s core values, helping your business remain recognizable and impactful.",
    },
    {
      number: "03",
      title: "Brand Messaging and Voice",
      description:
        "From mission statements to marketing campaigns, we craft a consistent tone and messaging strategy that resonates deeply with your audience and establishes your authority.",
    },
    {
      number: "04",
      title: "Brand Guidelines Creation",
      description:
        "Consistency is key to a strong brand. We develop comprehensive guidelines, including font, typography, and color schemes, to maintain your brand’s identity across all platforms.",
    },
  ];

  const seoFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "Comprehensive Expertise",
      description:
        "Whether you’re a startup or an established business, we have the skills to support your unique branding needs.",
    },
    {
      icon: "chart",
      title: "Customer-Centric",
      description:
        "Your satisfaction is our priority, and our strategies are designed to align with your vision and goals.",
    },
  ];

  const pageHeading = "Branding Services";

  //WebDevelopmentSection
  const headingtitle = "Outshine Your Competitors";
  const heading = "With a Personal Branding Agency";

  //Hire
  const hireHeadingTitle = "Professional Branding Services";
  const hireHeading = "That Foster Long-Term Loyalty";
  const hireHeadingDescription =
    "At Marketairre, we believe in delivering more—more connections, more impact, and more results. With proven expertise as a trusted branding agency, we craft innovative strategies that elevate your brand to new heights. Unlock your company’s full potential with us.";

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ServicesHeroSection heading={pageHeading} />

        <div className="">
          <WebDevelopmentSection
            services={brandStrategyServices}
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
            pricingOptionsTilte=""
            pricingOptionsHeading=""
            pricingOptionsDescription=""
            pricingOptions={[]}
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
