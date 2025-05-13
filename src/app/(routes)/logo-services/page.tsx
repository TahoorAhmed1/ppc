import {
  girlWithPhone,
  heroSectionImage3,
  logoServiceImage,
  portfolioLogo1,
  portfolioLogo10,
  portfolioLogo11,
  portfolioLogo2,
  portfolioLogo3,
  portfolioLogo4,
  portfolioLogo5,
  portfolioLogo6,
  portfolioLogo7,
  portfolioLogo8,
  portfolioLogo9,
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
  const logoDesignServices = [
    {
      number: "01",
      title: "Custom Logo Design",
      description:
        "We create unique, memorable logos tailored to reflect your brand’s identity and values, ensuring it stands out in your industry.",
    },
    {
      number: "02",
      title: "Versatile Design",
      description:
        "Our logos are designed with versatility in mind, ensuring they work seamlessly across all platforms, from digital to print.",
    },
    {
      number: "03",
      title: "Brand Identity Development",
      description:
        "We go beyond logo design, crafting a cohesive visual identity that communicates your brand story and resonates with your target audience.",
    },
    {
      number: "04",
      title: "Design Refinement & Perfection",
      description:
        "Our team works closely with you to refine and perfect every detail, ensuring your logo is polished and impactful.",
    },
  ];

  const logoDesignFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "Logo Design Experts",
      description:
        "Our team consists of talented designers and branding experts who collaborate to bring your brand to life through powerful visual storytelling.",
    },
    {
      icon: "chart",
      title: "Cutting-Edge Design Tools",
      description:
        "We use the latest design software and techniques to create logos that are versatile, scalable, and timeless.",
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
        "Stationery Design (Business card design, Letterhead Design, Envelope Design)",
        "7 Dedicated Designers",
        "Unlimited Revisions",
        "48-72 Hours Turn Around Time",
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
        "Stationery Design (Business card design, Letterhead Design, Envelope Design)",
        "Flyer Design",
        "Free Icon Design",
        "8 Dedicated Designers",
        "Unlimited Revisions",
        "48-72 Hours Turn Around Time",
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
      packageDescription: "Cost Effective Package for your business",
      duration: null,
      currentPrice: null,
      originalPrice: null,
      buttonTitle: "Get a quote",
      features: ["Illustrative Logo", "Animated Logo", "2D Logo", "3D Logo"],
    },
  ];

  const portfolioItems = [
    {
      image: portfolioLogo1.src,
      category: "",
    },
    {
      image: portfolioLogo2.src,
      category: "",
    },
    {
      image: portfolioLogo3.src,
      category: "",
    },
    {
      image: portfolioLogo4.src,
      category: "",
    },
    {
      image: portfolioLogo5.src,
      category: "",
    },
    {
      image: portfolioLogo6.src,
      category: "",
    },
    {
      image: portfolioLogo7.src,
      category: "",
    },
    {
      image: portfolioLogo8.src,
      category: "",
    },
    {
      image: portfolioLogo9.src,
      category: "",
    },
     {
      image: portfolioLogo10.src,
      category: "",
    },
     {
      image: portfolioLogo11.src,
      category: "",
    },
  ];

  const pageHeading = "Logo Services";

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ServicesHeroSection heading={pageHeading} />

        <div className="">
          <WebDevelopmentSection
            services={logoDesignServices}
            image={logoServiceImage.src}
            heading="Your Brand, Our Design "
            headingtitle="Professional Logo Design services  "
          />
          <PortfolioSection
            heading="Iconic Logo Designs"
            paragraph="Explore our logo design portfolio featuring iconic brand identities across 350+ industries. Each logo reflects our dedication to creativity, precision, and lasting visual impact."
            portfolioData={portfolioItems}
            animate={false}
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
            pricingOptions={pricingOptions}
            pricingOptionsTilte="BEAT THE ODDS "
            pricingOptionsHeading="Not Just a Pretty Picture "
            pricingOptionsDescription="A logo is more than just a visual—it's the face of your brand. In a world full of flashy designs, we create logos that tell your story and make a lasting impression. "
          />
          <HireDevelopersSection
            features={logoDesignFeatures}
            image={seoServiceImage.src}
            HireDevelopersSectionTitle="What Makes Us"
            HireDevelopersSectionHeading="Pioneers in Logo Design "
            HireDevelopersSectionDiscripton="Crafting a memorable logo takes more than just creativity. We design logos that are not only visually striking but also strategically aligned with your brand’s mission, values, and vision. "
          />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
