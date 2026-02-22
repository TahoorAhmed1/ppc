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
  const appDevelopmentServices = [
    {
      number: "01",
      title: "iOS Apps",
      description:
        "Careful analysis, eye-catchy designs to maintaining responsiveness across all iOS devices – we offer the complete app development package.",
    },
    {
      number: "02",
      title: "Android Apps",
      description:
        "Almost half the population uses android devices for interactions. That’s why our android experts focus on developing safe and secure apps that reach the maximum of your target audience.",
    },
    {
      number: "03",
      title: "Cross-Platform Apps",
      description:
        "Whether you’re looking to increase your outreach or make your interface more user-friendly, our developers can create apps that best suit your users’ needs.",
    },
    {
      number: "04",
      title: "Hybrid Apps",
      description:
        "Invest in hybrid app development to save your valuable money and reach the maximum of your clients across multiple platforms at once.",
    },
  ];

  const seoFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "User-friendly",
      description:
        "Our apps are designed with the ease of your customers in mind.",
    },
    {
      icon: "chart",
      title: "Reliability",
      description:
        "Our apps lead the way to converting your users into loyal customers.",
    },
  ];

const pricingOptions = [
  {
    id: 1,
    packageHeading: "2D Animation",
    packageDescription: "30 seconds",
    duration: 30,
    currentPrice: 299.99,
    originalPrice: 499.99,
    features: [
      "2D Animation / White Board / Motion Graphics",
      "Custom Artwork, No Stolen Images",
      "Initial Script Writing",
      "Professional Voice-Over",
      "Background Music",
      "Smooth & Engaging Animations",
      "30 Seconds Video Duration (Extendable)",
      "100% Satisfaction Guarantee",
    ],
  },
  {
    id: 2,
    packageHeading: "2D Animation",
    packageDescription: "60 seconds",
    duration: 60,
    currentPrice: 549.99,
    originalPrice: 899.99,
    features: [
      "Everything in 30s Package",
      "More Detailed Animations",
      "Extended Storytelling",
      "60 Seconds Video Duration (Extendable)",
      "100% Satisfaction Guarantee",
    ],
  },
  {
    id: 3,
    packageHeading: "2D Animation",
    packageDescription: "90 seconds",
    duration: 90,
    currentPrice: 799.99,
    originalPrice: 1299.99,
    features: [
      "Everything in 60s Package",
      "Advanced Motion Graphics",
      "Enhanced Visual Flow",
      "90 Seconds Video Duration (Extendable)",
      "100% Satisfaction Guarantee",
    ],
  },
  {
    id: 4,
    packageHeading: "2D Animation",
    packageDescription: "120 seconds",
    duration: 120,
    currentPrice: 1049.99,
    originalPrice: 1799.99,
    features: [
      "Everything in 90s Package",
      "Premium Animations",
      "High Engagement Storytelling",
      "120 Seconds Video Duration (Extendable)",
      "Priority Support",
      "100% Satisfaction Guarantee",
    ],
  },
];

  const pageHeading = "App Development Services";

  //WebDevelopmentSection
  const headingtitle = "Your Business Needs";
  const heading = "A Powerful & Device-Friendly App";

  //Hire
  const HireDevelopersSectionTitle = "Agile App Development";
  const HireDevelopersSectionHeading =
    "Innovative Designs to Captivate Your Audience";
  const HireDevelopersSectionDiscripton =
    "No matter the size of your brand, your customers will love when you launch an app that’s not only user-friendly but offers the desired reliability. So, you can count on us to understand your business needs after which we’ll come up with efficient solutions to design an app that garners instant results.";

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ServicesHeroSection heading={pageHeading} />

        <div className="">
          <WebDevelopmentSection
            services={appDevelopmentServices}
            image={girlWithPhone.src}
            heading={heading}
            headingtitle={headingtitle}
          />
          {/* <PortfolioSection
            heading="Our Diverse Portfolio"
            title=""
            paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
            filters={["All", "E-commerce", "Business", "Real Estate"]}
            btnIcon=""
          /> */}
          <PricingSection
            pricingOptions={pricingOptions}
            pricingOptionsTilte="BEAT THE ODDS "
            pricingOptionsHeading=""
            pricingOptionsDescription=""
          />
          <HireDevelopersSection
            features={seoFeatures}
            image={girlWithPhone.src}
            HireDevelopersSectionTitle=""
            HireDevelopersSectionHeading=""
            HireDevelopersSectionDiscripton=""
          />
        </div>
        
      </div>
    </>
  );
}
