"use client";
import ContactSection from "@/components/contact-section";
import PricingPackage from "@/components/digital-marketing/pricing-package";
import FaqSection from "@/components/faq-section-2";
import PortfolioSection from "@/components/portfolio-section";
import Footer from "@/components/footer-2";
import DigitalMarketingHeroSection from "@/components/digital-marketing/digital-marketing-hero-section";
import TestimonialsSection from "@/components/testimonials-section";
import { AutoOpenImageModal } from "@/components/auto-open-image-modal";
import InfiniteScroll from "@/components/digital-marketing/web-agency-hero";
import ServicesCombo from "@/components/digital-marketing/services-combo";

export default function Home() {
  return (
    <main className="min-h-[100vh]">
      <DigitalMarketingHeroSection />
      <InfiniteScroll />
      <PortfolioSection
        heading="Our Diverse Portfolio"
        title=""
        paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our
                                                                      commitment to superior quality, innovation, and technical prowess."
        filters={["All", "E-commerce", "Business", "Real Estate"]}
        btnIcon=""
      />

      <PricingPackage />
      <ServicesCombo />
      <TestimonialsSection />
      <ContactSection />
      <FaqSection />
      <Footer />
      <AutoOpenImageModal alt="Promotional popup" />
    </main>
  );
}
