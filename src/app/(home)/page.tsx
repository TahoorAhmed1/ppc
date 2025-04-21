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
  favicon,
  portfolio1,
  portfolio2,
  portfolio3,
  waterMarkLogo,
} from "@/assets";
import HeroSection from "@/components/hero-section";
import TestimonialsSection from "@/components/testimonials-section";

const portfolioItems = [
  {
    id: 1,
    image: portfolio1.src,
    category: "Web Design",
    title: "AirCalling Landing Page Design",
  },
  {
    id: 2,
    image: portfolio2.src,
    category: "UI/UX",
    title: "Business Landing Page Design",
  },
  {
    id: 3,
    image: portfolio3.src,
    category: "Web Design",
    title: "Ecom Web Page Design",
  },
  {
    id: 1,
    image: portfolio1.src,
    category: "Web Design",
    title: "AirCalling Landing Page Design",
  },
  {
    id: 2,
    image: portfolio2.src,
    category: "UI/UX",
    title: "Business Landing Page Design",
  },
  {
    id: 3,
    image: portfolio3.src,
    category: "Web Design",
    title: "Ecom Web Page Design",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>

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
        filters={["All", "E-commerce", "Business", "Real Estate"]}
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
