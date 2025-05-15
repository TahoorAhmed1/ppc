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
import PortfolioSection from "@/components/portfolio-section";
import WebDevelopmentSection from "@/components/web-development-services/web-development-section";
import HireDevelopersSection from "@/components/hire-developer/hire-developers-section";
import Link from "next/link";
import PricingSection from "@/components/pricing/pricing-section";
import { websitePackage } from "@/components/packages";
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
  
  const portfolioData = [
    { image: project1.src, category: "Real Estate" },
    { image: project2.src, category: "E-commerce" },
    { image: project3.src, category: "Real Estate" },
    { image: project4.src, category: "Business" },
    { image: project5.src, category: "Business" },
    { image: project6.src, category: "Business" },
    { image: project7.src, category: "Business" },
    { image: project9.src, category: "E-commerce" },
    { image: project10.src, category: "E-commerce" },
    { image: project11.src, category: "E-commerce" },
    { image: project12.src, category: "Business" },
    { image: project13.src, category: "E-commerce" },
    { image: project14.src, category: "E-commerce" },
    { image: project15.src, category: "E-commerce" },
    { image: project16.src, category: "Business" },
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
            filters={["All", "E-commerce", "Website Package", "Real Estate"]}
            portfolioData={portfolioData}
          />
          <PricingSection
            pricingOptionsTilte="BEAT THE ODDS "
            pricingOptionsHeading="Shiny Doesn’t Mean Smart "
            pricingOptionsDescription="In a web full of pretty pixels and empty promises, real power lies in what’s under the hood. Go beyond the glitter—build for impact. "
            pricingOptions={websitePackage}
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
