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
  const emailMarketingServices = [
    {
      number: "01",
      title: "Email List Management",
      description:
        "We build, segment, and maintain email lists for our clients to ensure targeted messaging while paying close attention to data cleanliness and compliance with privacy regulations.",
    },
    {
      number: "02",
      title: "Campaign Design and Development",
      description:
        "Our responsibility as an email marketing specialist entails creating visually appealing email templates. We also place clear CTAs and compelling copy to drive engagement.",
    },
    {
      number: "03",
      title: "Automation and Personalization",
      description:
        "From welcome emails to abandoned cart reminders, we set up highly personalized automated email sequences, giving the recipients reasons to come back repeatedly.",
    },
    {
      number: "04",
      title: "Analytics and Reporting",
      description:
        "We track key metrics, including but not limited to open rates and click-through rates, to optimize your campaign. Our data-driven reports help you make important decisions to maximize ROI.",
    },
  ];

  const seoFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "Tailored Strategies",
      description:
        "We develop customized strategies after thoroughly understanding your brand, target audience, and goals.",
    },
    {
      icon: "chart",
      title: "Expert Engagement",
      description:
        "Our experts on social media follow a hands-on approach when managing your community.",
    },
  ];

  const pageHeading = "Email Marketing Services";

  //WebDevelopmentSection
  const headingtitle = "Engage. Convert. Grow.";
  const heading = "With the Best Email Marketing Services";

  //Hire
  const HireDevelopersSectionTitle = "Professional Email Marketing Services";
  const HireDevelopersSectionHeading = "That Deliver Fast Results";
  const HireDevelopersSectionDiscripton =
    "Time is of the essence, and we waste none. Our experts deploy targeted email advertising campaigns that engage your audience on the spot. Prioritizing speed without compromising quality, we make sure your messages reach the right people at the right time.";

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ServicesHeroSection heading={pageHeading} />

        <div className="">
          <WebDevelopmentSection
            services={emailMarketingServices}
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
