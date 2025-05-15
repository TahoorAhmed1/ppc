import { logoServiceImage, socilaMediaServiceImage } from "@/assets";
import WebDevelopmentSection from "@/components/web-development-services/web-development-section";
import HireDevelopersSection from "@/components/hire-developer/hire-developers-section";
import PricingSection from "@/components/pricing/pricing-section";
import ServicesHeroSection from "@/components/digital-marketing/services-hero-section";
import { socialMediaPackage } from "@/components/packages";

export type FeatureItemType = {
  icon: "megaphone" | "chart";
  title: string;
  description: string;
};
export default function Page() {
  const socialMediaServices = [
    {
      number: "01",
      title: "Custom Social Media Strategies",
      description:
        "We create tailored, data-driven social media strategies designed to grow your brand, engage your audience, and drive conversions.",
    },
    {
      number: "02",
      title: "Engaging Content Creation",
      description:
        "Our team crafts high-quality, platform-specific content that resonates with your audience and sparks meaningful interactions.",
    },
    {
      number: "03",
      title: "Targeted Ad Campaigns",
      description:
        "We design and manage targeted social media ad campaigns that increase reach, drive traffic, and boost sales.",
    },
    {
      number: "04",
      title: "Performance Tracking & Analytics",
      description:
        "We provide detailed performance reports and insights, helping you measure success and refine your social media strategies.",
    },
  ];

  const seoFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "Social Media Experts ",
      description:
        "Our team blends platform specialists, content creators, and ad managers to craft results-driven campaigns. ",
    },
    {
      icon: "chart",
      title: "Premium Marketing Tools",
      description:
        "We use top-tier tools to schedule, analyze, and optimize your content for maximum visibility and impact. ",
    },
  ];

  const pageHeading = "Social Media Marketing Services";

  return (
    <div className="min-h-screen flex flex-col">
      <ServicesHeroSection heading={pageHeading} />

      <>
        <WebDevelopmentSection
          services={socialMediaServices}
          image={socilaMediaServiceImage.src}
          headingtitle="Creating Lasting Connections"
          heading="That Amplify YourBrand’s Impact"
        />

        <PricingSection
          pricingOptions={socialMediaPackage}
          pricingOptionsTilte="BEAT THE NOISE"
          pricingOptionsHeading="Not Every Trend Is Worth the Hype "
          pricingOptionsDescription="In a scroll-happy world chasing likes and filters, real engagement comes from strategy, not spectacle. Cut through the clutter—make every post count. "
        />
        <HireDevelopersSection
          features={seoFeatures}
          image={logoServiceImage.src}
          HireDevelopersSectionTitle="What Makes Us "
          HireDevelopersSectionHeading="The Best Social Media Management Team "
          HireDevelopersSectionDiscripton="Building a real presence on social media takes more than just posting. That’s where we come in. Our strategy-driven services boost engagement, grow your audience, and turn followers into loyal customers. "
        />
      </>
    </div>
  );
}
