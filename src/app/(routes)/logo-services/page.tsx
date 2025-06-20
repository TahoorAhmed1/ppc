"use client";

import { motion } from "framer-motion";
import {
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
import PortfolioSection from "@/components/portfolio-section";
import WebDevelopmentSection from "@/components/web-development-services/web-development-section";
import HireDevelopersSection from "@/components/hire-developer/hire-developers-section";
import PricingSection from "@/components/pricing/pricing-section";
import ServicesHeroSection from "@/components/digital-marketing/services-hero-section";
import { logoPackage } from "@/components/packages/packages";
import ContactSection from "@/components/contact-section";
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

  const pageHeading = "Logo Services";

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ServicesHeroSection heading={pageHeading} />

        <div>
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
            pricingOptions={logoPackage}
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
