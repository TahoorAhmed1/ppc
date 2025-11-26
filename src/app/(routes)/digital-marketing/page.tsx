"use client";
import ContactSection from "@/components/contact-section";
import ScrollAnimationWrapper from "@/components/digital-marketing/components-of-pricing/scroll-animation-wrapper";
import ScrollDownIndicator from "@/components/digital-marketing/components-of-pricing/scroll-down-indicator";
import ScrollToTopButton from "@/components/digital-marketing/components-of-pricing/scroll-to-top-button";
import DigitalMarketingHeroSection from "@/components/digital-marketing/digital-marketing-hero-section";
import DigitalMarketingServiceSection from "@/components/digital-marketing/digital-marketing-service-section";
import Pricing from "@/components/digital-marketing/pricing";
import SocialMediaMarketing from "@/components/digital-marketing/social-media-marketing";
import AnimatedFaqSection2 from "@/components/faq-section-2";
import Footer from "@/components/footer";

import TestimonialsSection from "@/components/testimonials-section";
import { motion, useScroll } from "framer-motion";

function Page() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-black to-black z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <ScrollDownIndicator />

      <ScrollToTopButton />
      <DigitalMarketingHeroSection />

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
  );
}

export default Page;
