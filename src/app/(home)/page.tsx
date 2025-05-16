"use client";
import { motion } from "framer-motion";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ExperienceSection from "@/components/experience-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section";
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
import AllPackagesSection from "@/components/pricing/all-packages-section";

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

export default function Home() {
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

      <PortfolioSection
        heading="OUR PORTFOLIO"
        title="HERE IS"
        paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
        backgroundImage={waterMarkLogo.src}
        filters={["All", "E-commerce", "Website Package", "Real Estate"]}
        portfolioData={portfolioData}
      />

      <AllPackagesSection />

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

    </div>
  );
}
