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
  const seoServices = [
    {
      number: "01",
      title: "Keyword Research",
      description:
        "Laying a strong foundation for a sound SEO strategy begins with identifying the right keywords. We analyze search intent and strategically integrate high-impact terms into your content.",
    },
    {
      number: "02",
      title: "Content Creation",
      description:
        "Content is king, especially in SEO. Our highly qualified writers craft engaging, informative, and well-structured content that appeals to both humans and search engines.",
    },
    {
      number: "03",
      title: "Technical SEO",
      description:
        "From fast loading speeds to user-friendly navigation, we ensure your website is optimized for both bots and humans. We also address other technical aspects to enhance your site’s performance.",
    },
    {
      number: "04",
      title: "Backlink Building",
      description:
        "Earning links from relevant and credible websites signals trustworthiness to search engines. Backlink building is a key part of our strategy to boost your brand’s authority.",
    },
  ];

  const seoFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "SEO Specialists",
      description:
        "Though we’re SEO specialists, our team consists of experienced writers, developers, and link builders.",
    },
    {
      icon: "chart",
      title: "Advanced SEO Tools",
      description:
        "We have access to premium SEO tools that make optimizing your website and improving its performance a breeze.",
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
      id: 1,
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
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ServicesHeroSection heading={pageHeading} />

        <div>
          <WebDevelopmentSection
            services={seoServices}
            image={girlWithPhone.src}
            heading="Dominate the Search Engines"
            headingtitle="Professional SEO Services"
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
          />
          <HireDevelopersSection
            features={seoFeatures}
            hireHeadingDescription="Improving your company’s SEO without being penalized can be tricky. Fortunately, we’re here to guide you throughout the process. Our performance-based SEO services are designed to improve your keyword rankings, enhance organic traffic, and grow revenue."
            image={girlWithPhone.src}
            hireHeading="The Best SEO Company"
            hireHeadingTitle="What Makes Us"
          />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
