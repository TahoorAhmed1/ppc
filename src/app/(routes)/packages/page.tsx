"use client"

import ServicesHeroSection from "@/components/digital-marketing/services-hero-section"
import HireUsHeroSection from "@/components/packages/hire-us-hero-section"
import ContactForm from "@/components/packages/package-contact-form"
import AllPackagesSection from "@/components/pricing/all-packages-section"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function Page() {
  const [scrollOpacity, setScrollOpacity] = useState(1)

  // Handle scroll opacity effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const newOpacity = Math.max(1 - scrollY / 300, 0)
      setScrollOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages-section")
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <div className="relative">
        <ServicesHeroSection heading="PACKAGES" />

      
      </div>

      {/* Packages Section with scroll animation */}
      <motion.div
        id="packages-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <AllPackagesSection />
      </motion.div>

      {/* Hire Us Section with scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <HireUsHeroSection />
      </motion.div>

      {/* Contact Form with scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <ContactForm />
      </motion.div>
    </>
  )
}
