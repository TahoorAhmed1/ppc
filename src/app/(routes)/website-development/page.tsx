"use client";
import { motion } from "framer-motion";
import PageTransition from "@/components/website-development/page-transition";
import WebsiteDevelopmentHeroSection from "@/components/website-development/website-development-hero-section";
import InfiniteScroll from "@/components/website-development/web-agency-hero";
import PricingPackage from "@/components/website-development/pricing-package";
import ServicesCombo from "@/components/website-development/services-combo";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section-2";


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
} from "@/assets";
import { AutoOpenImageModal } from "@/components/auto-open-image-modal";


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

// ✅ Framer Motion animation variants
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

export default function page() {
  return (
    <PageTransition>
      <main className="min-h-[100vh]">
        <WebsiteDevelopmentHeroSection />
        <InfiniteScroll />
        <PortfolioSection
          heading="Our Diverse Portfolio"
          title=""
          paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
          filters={["All", "E-commerce", "Business", "Real Estate"]}
          btnIcon=""
          portfolioData={portfolioData}
        />
        <PricingPackage />
        <ServicesCombo />
        <TestimonialsSection />

        {/* ✅ Scroll-animated Contact Section with anchor support */}
        <div id="contact">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <ContactSection />
          </motion.div>
        </div>

        <FaqSection />
        <AutoOpenImageModal alt="Promotional popup" />
      </main>
    </PageTransition>
  );
}
