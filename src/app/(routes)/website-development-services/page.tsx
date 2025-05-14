import {
  heroSectionImage3,
  logoServiceImage,
  websiteDevelopmentServiceImage,
  project1,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project9,
} from "@/assets";
import Footer from "@/components/footer";
import PortfolioSection from "@/components/portfolio-section";
import WebDevelopmentSection from "@/components/web-development-services/web-development-section";
import HireDevelopersSection from "@/components/hire-developer/hire-developers-section";
import Link from "next/link";
import PricingSection from "@/components/pricing/pricing-section";

export default function Page() {
  const customServices = [
    {
      number: "01",
      title: "Custom Web Applications",
      description:
        "We develop robust, scalable web applications customized to meet your business goals using the latest tools and technologies.",
    },
    {
      number: "02",
      title: "Responsive Website Design",
      description:
        "Our websites automatically adjust to all screen sizes, providing an exceptional user experience on mobile, tablet, or desktop.",
    },
    {
      number: "03",
      title: "API Development & Integration",
      description:
        "We build secure APIs and integrate external services to expand your platform’s features and enhance communication.",
    },
    {
      number: "04",
      title: "Performance Optimization",
      description:
        "We enhance your web application's speed and reliability, ensuring quick page loads and a frictionless browsing experience. ",
    },
  ];

  type FeatureItemType = {
    icon: "megaphone" | "chart";
    title: string;
    description: string;
  };

  const developerFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "Web Development Experts ",
      description:
        "Our team includes seasoned designers, developers, and UX strategists working in perfect sync.",
    },
    {
      icon: "chart",
      title: "Cutting-Edge Technologies ",
      description:
        "We leverage modern frameworks and tools to craft fast, secure, and future-ready web solutions. ",
    },
  ];
  const pricingOptions = [
    {
      id: 1,
      buttonTitle: "Get Started",
      packageHeading: "Basic Website Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 200,
      originalPrice: 400,
      features: [
        "1-Page Website",
        "Customized Design (basic)",
        "WordPress",
        "Contact Form",
        "1 Banner Design (basic)",
        "3 Revisions",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
      ],
    },
    {
      id: 2,

      packageHeading: "Standard Website Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 400,
      originalPrice: 800,
      buttonTitle: "Get Started",
      features: [
        "Up to 3-Page Website",
        "Customized Design (Standard)",
        "WordPress",
        "Mobile Responsive",
        "Hover Effects",
        "Stock Photos",
        "Contact Form",
        "6 Revisions",
        "Complete Design and Development",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
      ],
    },
    {
      id: 3,
      packageHeading: "Professional Website Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 750,
      originalPrice: 1500,
      buttonTitle: "Get Started",

      features: [
        "Up to 5-Page Website",
        "Customized Design (Professional)",
        "WordPress",
        "CMS (Content Management System)",
        "5 Banner Design (Professional)",
        "Sliding Banners",
        "Hover Effects",
        "Mobile Responsive",
        "Stock Photos",
        "Contact Form",
        "Search Engine Submission",
        "9 Revisions",
        "Complete Design and Development",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights",
      ],
    },

    {
      id: 4,
      packageHeading: "Website Identity Kit",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 1400,
      originalPrice: 2800,
      buttonTitle: "Get Started",

      features: [
        "Up to 7-Page Website (Unique)",
        "Custom WordPress Development",
        "Stock Images",
        "7 Banner Designs (Custom)",
        "Sliding Banners",
        "Hover Effects",
        "Content Management System",
        "Online Appointment/Booking/Scheduling Integration",
        "Search Engine Submission",
        "12 Revisions",
        "Complete Design and Development",
        "Interactive Hover Effects",
        "18 Revisions",
        "Content Management System (WordPress)",
        "Online Appointment/Booking/Scheduling Integration (Optional)",
        "Online Payment Integration (Optional)",
        "Custom Contact Form (Optional)",
        "Newsletter Sign up (Optional)",
        "Social Media Integration",
        "Search Bar",
        "Google Friendly Sitemap",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights",
      ],
    },
    {
      id: 5,
      packageHeading: "Exclusive Web Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 1750,
      originalPrice: 3500,
      buttonTitle: "Get Started",

      features: [
        "Up to 10-Page Website (Unique)",
        "Custom, Dynamic, and Interactive Design",
        "Custom WordPress Development",
        "Captivating Sliding Banners",
        "Stock Images",
        "10 Banner Design (Custom)",
        "Interactive Hover Effects",
        "15 Revisions",
        "Content Management System (WordPress)",
        "Online Appointment/Booking/Scheduling Integration",
        "Google Friendly Sitemap",
        "Search Engine Submission",
        "Complete Design and Development",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights",
      ],
    },
    {
      id: 6,
      packageHeading: "Professional Website Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 3200,
      originalPrice: 6400,
      buttonTitle: "Get Started",

      features: [
        "10–20 Page Website (Unique)",
        "Custom, Dynamic, and High-end Design",
        "Custom WordPress Development",
        "Attractive Sliding Banners",
        "Up to 20 Custom Banner Designs",
        "Stock Images",
        "Interactive Hover Effects",
        "18 Revisions",
        "Content Management System (WordPress)",
        "Online Appointment/Booking/Scheduling Integration (Optional)",
        "Online Payment Integration (Optional)",
        "Custom Contact Form (Optional)",
        "Newsletter Sign-up (Optional)",
        "Social Media Integration",
        "Search Bar",
        "Google Friendly Sitemap",
        "Search Engine Submission",
        "Complete Design and Development",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights",
      ],
    },
    {
      id: 7,
      buttonTitle: "Get Started",

      packageHeading: "Custom Website Package",
      packageDescription: "Cost Effective Package for your business",
      duration: null,
      currentPrice: null,
      originalPrice: null,
      features: ["Custom PHP Website", "Web Application", "Custom Web Portal"],
    },
  ];
  const portfolioData = [
    { img: project1.src, category: "Real Estate" },
    { img: project2.src, category: "E-commerce" },
    { img: project3.src, category: "Real Estate" },
    { img: project4.src, category: "Business" },
    { img: project5.src, category: "Business" },
    { img: project6.src, category: "Business" },
    { img: project7.src, category: "Business" },
    { img: project9.src, category: "E-commerce" },
    { img: project10.src, category: "E-commerce" },
    { img: project11.src, category: "E-commerce" },
    { img: project12.src, category: "Business" },
    { img: project13.src, category: "E-commerce" },
    { img: project14.src, category: "E-commerce" },
    { img: project15.src, category: "E-commerce" },
    { img: project16.src, category: "Business" },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div
          className="text-white py-20 md:py-32 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroSectionImage3.src})`,
          }}
        >
          <div className="px-4 md:px-8 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Website Development Services
            </h1>
            <div className="flex justify-center text-sm md:text-base flex-wrap gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2 hidden sm:inline">•</span>
              <span>Website Development Services</span>
            </div>
          </div>
        </div>

        <div className="">
          <WebDevelopmentSection
            heading=" Website Development Services "
            headingtitle="Professional Website Development Services"
            services={customServices}
            image={websiteDevelopmentServiceImage.src}
          />
          <PortfolioSection
            heading="Our Diverse Portfolio"
            title=""
            paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
            filters={["All", "E-commerce", "Business", "Real Estate"]}
            portfolioData={portfolioData}
          />
          <PricingSection
            pricingOptionsTilte="BEAT THE ODDS "
            pricingOptionsHeading="Shiny Doesn’t Mean Smart "
            pricingOptionsDescription="In a web full of pretty pixels and empty promises, real power lies in what’s under the hood. Go beyond the glitter—build for impact. "
            pricingOptions={pricingOptions}
          />
          <HireDevelopersSection
            HireDevelopersSectionTitle="What Makes Us "
            HireDevelopersSectionHeading="Pioneers in Website Development "
            HireDevelopersSectionDiscripton="Creating a high-performing website takes more than good design. We build scalable, optimized sites that blend usability with speed—helping you engage users, strengthen your brand, and drive results."
            features={developerFeatures}
            image={logoServiceImage.src}
          />
        </div>
      </div>
    </>
  );
}
