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
      packageHeading: "Startup Logo Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 1,
      currentPrice: 79,
      originalPrice: 79,
      buttonTitle: "Buy Now",
      features: [
        "3 Logo Design Concepts",
        "2 Dedicated Designers",
        "6 Revisions",
        "24 Hours Turnaround Time",
        "Final Files (JPEG, PNG, PDF)",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
      ],
    },
    {
      id: 2,
      packageHeading: "Silver Logo Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 1,
      currentPrice: 150,
      originalPrice: 150,
      buttonTitle: "Buy Now",
      features: [
        "5 Logo Design Concepts",
        "3 Dedicated Designers",
        "10 Revisions",
        "24 Hours Turnaround Time",
        "Final Files (JPEG, PNG, PDF, PSD)",
        "Dedicated Project Manager",
        "100% Unique Concepts",
        "100% Satisfaction Guarantee",
      ],
    },
    {
      id: 3,
      packageHeading: "Gold Logo Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 1,
      currentPrice: 250,
      originalPrice: 250,
      buttonTitle: "Buy Now",
      features: [
        "8 Logo Design Concepts",
        "Business Card Design",
        "3 Dedicated Designers",
        "Unlimited Revisions",
        "24-48 Hours Turnaround Time",
        "Final Files (AI, PSD, EPS, JPEG, PNG, PDF)",
        "Dedicated Project Manager",
        "100% Unique Concepts",
        "100% Approval Assurance",
        "100% Satisfaction Guarantee",
      ],
    },
    {
      id: 4,
      packageHeading: "Platinum Logo Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 3,
      currentPrice: 400,
      originalPrice: 400,
      buttonTitle: "Buy Now",
      features: [
        "10 Logo Design Concepts",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "4 Dedicated Designers",
        "9 Revisions (Additional Revision Per Change $30)",
        "48-72 Hours Turnaround Time",
        "Final Files (AI, PSD, EPS, JPEG, PNG, PDF, SVG)",
        "Dedicated Project Manager",
        "100% Unique Concepts",
        "100% Approval Assurance",
        "100% Satisfaction Guarantee",
      ],
    },
    {
      id: 5,
      packageHeading: "Ultimate Logo Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 3,
      currentPrice: 479,
      originalPrice: 479,
      buttonTitle: "Buy Now",
      features: [
        "12 Logo Design Concepts",
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "Flyer Design",
        "Free Icon Design",
        "8 Dedicated Designers",
        "Unlimited Revisions",
        "48-72 Hours Turnaround Time",
        "Final Files (AI, PSD, EPS, JPEG, PNG, PDF, SVG)",
        "Dedicated Project Manager",
        "100% Unique Concepts",
        "100% Approval Assurance",
        "100% Satisfaction Guarantee",
      ],
    },
    {
  id: 6,
  packageHeading: "Custom Logo Package",
  packageDescription: "Tailored solutions for your unique branding needs",
  duration: null,
  currentPrice: null,
  originalPrice: null,
  buttonTitle: "Get a Quote",
  features: [
    "Illustrative Logo Design",
    "Animated Logo Design",
    "2D Logo Design",
    "3D Logo Design",
    "Personalized Consultation",
    "Dedicated Project Manager",
    "100% Satisfaction Guarantee"
  ]
}

  ];

  const pageHeading = "Logo Services";

  //WebDevelopmentSection
  const headingtitle = "Your Business Needs";
  const heading = "A Powerful & Device-Friendly App";

  //Hire
  const hireHeadingTitle = "Agile App Development";
  const hireHeading = "Innovative Designs to Captivate Your Audience";
  const hireHeadingDescription =
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
