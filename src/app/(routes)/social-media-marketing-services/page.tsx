import { girlWithPhone, heroSectionImage3, logoServiceImage, profileImage4, socilaMediaServiceImage } from "@/assets";
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

  const pricingOptions = [
    {
      id: 1,
      packageHeading: "Social Media Presence",
      packageDescription: "Cost Effective Package for your business",
      duration: 7,
      currentPrice: 125,
      originalPrice: 250,
      buttonTitle: "Buy Now",
      features: [
        "Social Business Account Creation (Any 3)",
        "Cover Photo Design",
        "Profile Picture Design",
        "Welcome Post Design",
      ],
    },
    {
      id: 2,
      packageHeading: "Essential Monthly Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 400,
      originalPrice: 800,
      buttonTitle: "Buy Now",
      features: [
        "2 Posts Per Week on Instagram and Facebook",
        "Content Generation",
        "Post Design",
        "Business Page Optimization",
        "Social Media Calendar",
        "Monthly Progress Report",
        "Paid Boosting (Additional Charges according to the budget)",
      ],
    },
    {
      id: 3,
      packageHeading: "Classic Monthly Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 800,
      originalPrice: 1600,
      buttonTitle: "Buy Now",
      features: [
        "5 Posts Per Week on Facebook, Instagram, and Twitter",
        "Business Page Optimization",
        "Content Generation",
        "Post Design",
        "Social Media Calendar",
        "Spam Monitoring",
        "Comment Moderation",
        "Reputation Management",
        "Monthly Progress Report",
        "Paid Boosting (Additional Charges according to the budget)",
      ],
    },
    {
      id: 4,
      packageHeading: "Advanced Monthly Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 1200,
      originalPrice: 2400,
      buttonTitle: "Buy Now",
      features: [
        "6 Posts Per Week on Instagram, Facebook, Twitter, and Pinterest",
        "45-Second Video Animation",
        "Content Generation",
        "Social Account Setup",
        "Business Page Optimization",
        "Banner and Profile Picture Design",
        "Social Media Calendar",
        "Social Media Strategy",
        "Facebook Likes Campaign",
        "Comment Moderation",
        "Spam Monitoring",
        "Reputation Management",
        "Paid Boosting (Additional Charges according to the budget)",
      ],
    },
    {
      id: 5,
      packageHeading: "Exclusive Monthly Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 3000,
      originalPrice: 6000,
      buttonTitle: "Buy Now",
      features: [
        "30 Posts Per Month on Instagram, Facebook, Twitter, Pinterest, and LinkedIn",
        "4 x 20-Second Video Animations",
        "Custom Post Design",
        "Content Generation",
        "5 Boosted Posts",
        "Social Account Setup",
        "Business Page Optimization",
        "Banner and Profile Picture Design",
        "Social Media Calendar",
        "Social Media Strategy",
        "Social Media Audit",
        "Brand Analysis",
        "Facebook Likes Campaign",
        "Comment Moderation",
        "Spam Monitoring",
        "Reputation Management",
        "Daily Monitoring of Boosted Posts",
        "Monthly Progress Report",
        "Paid Boosting (Additional Charges according to the budget)",
      ],
    },
  ];

  const pageHeading = "Social Media Marketing Services";

  //WebDevelopmentSection
  const headingtitle = "Creating Lasting Connections";
  const heading = "That Amplify YourBrand’s Impact";

  //Hire
  const hireHeadingTitle = "Why Choose Our";
  const hireHeading = "Social Media Management Services";
  const hireHeadingDescription =
    "Working with Marketairre is a breeze, which makes hiring our SMM services worth it. But our friendly rapport is not the only reason you should consider hiring us; we take our work very seriously and only stop until we’ve produced the desired results.";

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ServicesHeroSection heading={pageHeading} />

        <div className="">
          <WebDevelopmentSection
            services={socialMediaServices}
            image={socilaMediaServiceImage.src}
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
            pricingOptions={pricingOptions}
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
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
