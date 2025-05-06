import { heroSectionImage3, profileImage4 } from "@/assets";
import Footer from "@/components/footer";
import PortfolioSection from "@/components/portfolio-section";
import WebDevelopmentSection from "@/components/web-development-services/web-development-section";
import HireDevelopersSection from "@/components/hire-developer";
import Link from "next/link";
import React from "react";

export default function Page() {
  const customServices = [
    {
      number: "01",
      title: "Custom Web Applications",
      description:
        "We build scalable, high-performance web applications tailored to your specific business needs using modern frameworks and technologies.",
    },
    {
      number: "02",
      title: "Responsive Website Design",
      description:
        "Our designs adapt seamlessly to all devices, ensuring your users have an optimal experience whether on desktop, tablet, or mobile.",
    },
    {
      number: "03",
      title: "API Development & Integration",
      description:
        "We create robust APIs and seamlessly integrate third-party services to extend your application's functionality and connectivity.",
    },
    {
      number: "04",
      title: "Performance Optimization",
      description:
        "We optimize your web applications for speed and efficiency, ensuring fast load times and smooth user experiences.",
    },
  ]
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
          <WebDevelopmentSection services={customServices} image={profileImage4.src} />
          <PortfolioSection
            heading="Our Diverse Portfolio"
            title=""
            paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
            filters={["All", "E-commerce", "Business", "Real Estate"]}
            btnIcon=""
          />
          <HireDevelopersSection />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>{" "}
    </>
  );
}
