"use client"
import ContactSection from "@/components/contact-section"
import FollowCursor from "@/components/digital-marketing/components-of-pricing/follow-cursor"
import ScrollAnimationWrapper from "@/components/digital-marketing/components-of-pricing/scroll-animation-wrapper"
import ScrollDownIndicator from "@/components/digital-marketing/components-of-pricing/scroll-down-indicator"
import ScrollToTopButton from "@/components/digital-marketing/components-of-pricing/scroll-to-top-button"
import DigitalMarketingHeroSection from "@/components/digital-marketing/digital-marketing-hero-section"
import DigitalMarketingServiceSection from "@/components/digital-marketing/digital-marketing-service-section"
import Pricing from "@/components/digital-marketing/pricing"
import SocialMediaMarketing from "@/components/digital-marketing/social-media-marketing"
import AnimatedFaqSection2 from "@/components/faq-section-2"
import Footer from "@/components/footer"

import TestimonialsSection from "@/components/testimonials-section"
import { motion, useScroll } from "framer-motion"

function Page() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      {/* Updated cursor with exactly 4 dots and increased size */}
      <FollowCursor
        dotCount={4} // Reduced from 15 to exactly 4 dots
        maxSize={10} // Decreased from 16 to 10
        minSize={3} // Decreased from 6 to 3
        baseSpeed={8} // Kept the same
        colorful={true}
        cursorStyle="dot" // Changed to dot style
        cursorSize={14} // Decreased from 20 to 14
        customColors={[
          "#3CBFAE", // Teal
          "#65CF5F", // Green
          "#1F9BED", // Blue
          "#5ce0c6", // Light teal
        ]}
      />

      {/* Progress bar that shows scroll position */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Advanced scroll down indicator */}
      <ScrollDownIndicator />

      {/* Scroll to top button */}
      <ScrollToTopButton />

      {/* Hero section doesn't need scroll animation as it's the first thing visible */}
      <DigitalMarketingHeroSection />

      {/* Apply scroll animations to each section with ID for scroll targeting */}
      <div id="service-section">
        <ScrollAnimationWrapper animation="fade-up">
          <DigitalMarketingServiceSection />
        </ScrollAnimationWrapper>
      </div>

      <ScrollAnimationWrapper animation="fade-in" delay={0.2}>
        <Pricing />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="slide-left" delay={0.1}>
        <SocialMediaMarketing />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="zoom-in">
        <TestimonialsSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="slide-right" delay={0.1}>
        <ContactSection />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-up" delay={0.2}>
        <AnimatedFaqSection2 />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper animation="fade-in">
        <Footer />
      </ScrollAnimationWrapper>
    </>
  )
}

export default Page
