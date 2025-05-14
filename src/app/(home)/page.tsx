"use client";

import { motion } from "framer-motion";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ExperienceSection from "@/components/experience-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  waterMarkLogo,
} from "@/assets";
import HeroSection from "@/components/hero-section";
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from "@/components/pricing/pricing-section";
import {
  ecommercePackage,
  logoPackage,
  websitePackage,
  socialMediaPackage,
  mobileAppPackage,
  seoPackage,
} from "@/components/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

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

const filterVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const allPricingData = {
  websitePackages: websitePackage,
  ecommercePackages: ecommercePackage,
  logoPackages: logoPackage,
  seoPackages: seoPackage,
  socialMediaPackages: socialMediaPackage,
};

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

const filter = [
  "Website Package",
  "E-commerce Package",
  "logo Package",
  "SEO Package",
  "Social Media Package",
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Website Package");
  type PricingOption =
    | typeof websitePackage[number]
    | typeof ecommercePackage[number]
    | typeof logoPackage[number]
    | typeof seoPackage[number]
    | typeof socialMediaPackage[number];

  const [filteredPricingOptions, setFilteredPricingOptions] = useState<PricingOption[]>(
    allPricingData.websitePackages
  );

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);

    const filterMap: Record<string, keyof typeof allPricingData> = {
      "Website Package": "websitePackages",
      "E-commerce Package": "ecommercePackages",
      "logo Package": "logoPackages",
      "SEO Package": "seoPackages",
      "Social Media Package": "socialMediaPackages",
    };

    const dataKey = filterMap[filter];
    if (dataKey && allPricingData[dataKey]) {
      setFilteredPricingOptions(allPricingData[dataKey]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <AboutSection />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ExperienceSection />
      </motion.div>

      {/* Filter Buttons */}
      <div>
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          variants={containerVariants}
        >
          {filter.map((filterItem, index) => (
            <motion.div
              key={filterItem}
              custom={index}
              variants={filterVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium border-gray-200 flex data-center gap-2",
                  activeFilter === filterItem
                    ? "bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-white border-none"
                    : "bg-white text-gray-700 hover:bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:text-white"
                )}
                onClick={() => handleFilterClick(filterItem)}
              >
                {filterItem}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pricing Section */}
      <PricingSection
        pricingOptions={filteredPricingOptions}
        pricingOptionsTilte="BEAT THE ODDS"
        pricingOptionsHeading="Shiny Doesn’t Mean Smart"
        pricingOptionsDescription="In a web full of pretty pixels and empty promises, real power lies in what’s under the hood. Go beyond the glitter—build for impact. "
      />

      <PortfolioSection
        heading="OUR PORTFOLIO"
        title="HERE IS"
        paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
        backgroundImage={waterMarkLogo.src}
        filters={["All", "E-commerce", "Website Package", "Real Estate"]}
        portfolioData={portfolioData}
      />

      <TestimonialsSection />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ContactSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <FaqSection />
      </motion.div>

      <Footer />
    </div>
  );
}
