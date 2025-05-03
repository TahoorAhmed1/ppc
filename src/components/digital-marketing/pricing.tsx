"use client"

import { motion } from "framer-motion"
import { CallToAction } from "./components-of-pricing/call-to-action"
import { EmojiDecorations } from "./components-of-pricing/emoji-decorations"
import { PricingCard } from "./components-of-pricing/pricing-card"
import { PricingHeader } from "./components-of-pricing/pricing-header"

export default function Pricing() {
  const pricingData = [
    {
      id: "silver",
      title: "Silver Startup",
      rating: 2,
      description: "Budding entrepreneurs ready to ignite the online presence.",
      currentPrice: "$399",
      originalPrice: "$499",
      services: ["Web Design", "Secure Contact Form", "Easy Updates", "Free Consultation"],
      features: [
        {
          title: "Mobile-First Design with Responsive Frameworks:",
          description:
            "Flawless user experience across all devices (phones, tablets, desktops) built with Bootstrap or similar frameworks.",
        },
        {
          title: "Professionally Curated Stock Photo Integration:",
          description: "High-resolution, royalty-free images to enhance visual appeal and brand storytelling.",
        },
        {
          title: "Secure Contact Form with CAPTCHA Integration:",
          description: "Streamline customer inquiries while preventing spam with advanced security measures.",
        },
      ],
      showSilverStartupPlus: false,
    },
    {
      id: "gold",
      title: "Gold business",
      rating: 3,
      description: "Ambitious businesses poised for growth and audience expansion",
      currentPrice: "$799",
      originalPrice: "$999",
      services: ["Social Integration", "Graphic Design", "Website Analytics", "Content Updates", "Free Consultation"],
      features: [
        {
          title: "Up to 5 Unique Website Pages with Custom HTML/CSS:",
          description: "Showcase your services, story, and team with unique design elements.",
        },
        {
          title: "Custom Design with Brand Identity Integration:",
          description: "Brand-specific fonts, color palettes, animations, and graphics for a cohesive online presence.",
        },
        {
          title: "Advanced SEO Optimization Strategy:",
          description:
            "In-depth competitor analysis, strategic keyword targeting, and link-building strategies for sustainable growth in search rankings.",
        },
      ],
      showSilverStartupPlus: true,
    },
    {
      id: "platinum",
      title: "Platinum Corporate",
      rating: 4,
      description: "Ambitious businesses poised for growth and audience expansion",
      currentPrice: "$1499",
      originalPrice: "$1899",
      services: ["Social Integration", "Graphic Design", "Website Analytics", "Content Updates", "Free Consultation"],
      features: [
        {
          title: "Up to 5 Unique Website Pages with Custom HTML/CSS:",
          description: "Showcase your services, story, and team with unique design elements.",
        },
        {
          title: "Custom Design with Brand Identity Integration:",
          description: "Brand-specific fonts, color palettes, animations, and graphics for a cohesive online presence.",
        },
        {
          title: "Advanced SEO Optimization Strategy:",
          description:
            "In-depth competitor analysis, strategic keyword targeting, and link-building strategies for sustainable growth in search rankings.",
        },
      ],
      showSilverStartupPlus: true,
    },
    {
      id: "enterprise",
      title: "Enterprise Apps Web",
      rating: 5,
      description: "Ambitious businesses poised for growth and audience expansion",
      currentPrice: "$2499",
      originalPrice: "$3199",
      services: ["Social Integration", "Graphic Design", "Website Analytics", "Content Updates", "Free Consultation"],
      features: [
        {
          title: "Up to 5 Unique Website Pages with Custom HTML/CSS:",
          description: "Showcase your services, story, and team with unique design elements.",
        },
        {
          title: "Custom Design with Brand Identity Integration:",
          description: "Brand-specific fonts, color palettes, animations, and graphics for a cohesive online presence.",
        },
        {
          title: "Advanced SEO Optimization Strategy:",
          description:
            "In-depth competitor analysis, strategic keyword targeting, and link-building strategies for sustainable growth in search rankings.",
        },
      ],
      showSilverStartupPlus: true,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen text-white py-12 px-4 md:px-8 lg:px-12 relative overflow-hidden"
      style={{
        background: "linear-gradient(94deg,rgba(9, 32, 33, 1) 0%, rgba(28, 45, 68, 1) 100%)",
      }}
    >
      <EmojiDecorations />

      <div className="max-w-7xl mx-auto">
        <PricingHeader />

        <div className="space-y-8">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <PricingCard
                title={plan.title}
                rating={plan.rating}
                description={plan.description}
                currentPrice={plan.currentPrice}
                originalPrice={plan.originalPrice}
                services={plan.services}
                features={plan.features}
                showSilverStartupPlus={plan.showSilverStartupPlus}
              />
            </motion.div>
          ))}
        </div>

        <CallToAction />
      </div>
    </motion.div>
  )
}
