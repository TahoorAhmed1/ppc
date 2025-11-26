"use client";

import ServicesHeroSection from "@/components/digital-marketing/services-hero-section";
import HireUsHeroSection from "@/components/packages/hire-us-hero-section";
import ContactForm from "@/components/packages/package-contact-form";
import AllPackagesSection from "@/components/pricing/all-packages-section";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Page() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 300, 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative">
        <ServicesHeroSection heading="PACKAGES" />
      </div>

      <motion.div
        id="packages-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <AllPackagesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <HireUsHeroSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <ContactForm />
      </motion.div>
    </>
  );
}
