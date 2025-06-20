"use client";

import { motion } from "framer-motion";
import ContactSection from "@/components/contact-section";
import { ecomerceServiceImage, logoServiceImage } from "@/assets";
import WebDevelopmentSection from "@/components/web-development-services/web-development-section";
import HireDevelopersSection from "@/components/hire-developer/hire-developers-section";
import PricingSection from "@/components/pricing/pricing-section";
import ServicesHeroSection from "@/components/digital-marketing/services-hero-section";
import { ecommercePackage } from "@/components/packages/packages";

export type FeatureItemType = {
  icon: "megaphone" | "chart";
  title: string;
  description: string;
};
export default function Page() {
  const ecommerceServices = [
    {
      number: "01",
      title: "Tailored E-Commerce Solutions",
      description:
        "We design custom e-commerce platforms that are built to scale, providing seamless user experiences and optimizing your sales funnel.",
    },
    {
      number: "02",
      title: "Mobile-First Design",
      description:
        "Our e-commerce websites are designed to work flawlessly across all devices, ensuring customers enjoy an optimal shopping experience, whether on mobile, tablet, or desktop.",
    },
    {
      number: "03",
      title: "Secure Payment Integration",
      description:
        "We integrate trusted payment gateways and security features, providing a smooth, secure transaction process for your customers.",
    },
    {
      number: "04",
      title: "Conversion Rate Optimization",
      description:
        "We implement strategies that focus on turning site visitors into loyal customers by improving site navigation, design, and checkout processes.",
    },
  ];

  const ecommerceFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "E-Commerce Experts",
      description:
        "Our team blends e-commerce developers, UX/UI designers, and digital marketing specialists to create fully integrated and optimized shopping experiences.",
    },
    {
      icon: "chart",
      title: "Cutting-Edge Technology",
      description:
        "We harness the latest technologies and platforms to deliver powerful, future-ready e-commerce solutions that grow with your business.",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const pageHeading = "E-commerce Services";
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
            services={ecommerceServices}
            image={ecomerceServiceImage.src}
            headingtitle="Unleash Your E-Commerce Potential"
            heading="Maximize Sales, Minimize Hassle "
          />
          {/* <PortfolioSection
            heading="Our Diverse Portfolio"
            title=""
            paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
            filters={["All", "E-commerce", "Business", "Real Estate"]}
            btnIcon=""
          /> */}
          <PricingSection
            pricingOptions={ecommercePackage}
            pricingOptionsTilte="RIDE THE WAVE "
            pricingOptionsHeading="Success Isn’t Just a Trend "
            pricingOptionsDescription="In a market flooded with e-commerce platforms, the secret to lasting success lies in strategy and innovation. Build for growth, not just for the sale. "
          />
          <HireDevelopersSection
            features={ecommerceFeatures}
            image={logoServiceImage.src}
            HireDevelopersSectionTitle="What Makes Us "
            HireDevelopersSectionHeading="E-Commerce Pioneers "
            HireDevelopersSectionDiscripton="Building a successful e-commerce business requires more than just an attractive website. We create robust, scalable e-commerce platforms that optimize for both customer experience and long-term growth. "
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <ContactSection />
          </motion.div>
        </div>
      </div>
    </>
  );
}
