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
import PricingSection from "@/components/pricing/pricing-section";

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
        pricingOptionsTilte="BEAT THE ODDS"
        pricingOptionsHeading="Shiny Doesn’t Mean Smart"
        pricingOptionsDescription="In a web full of pretty pixels and empty promises, real power lies in what’s under the hood. Go beyond the glitter—build for impact. "
      />
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
