import ContactSection from "@/components/contact-section";
import CtaSection from "@/components/cta-section";
import PricingPackage from "@/components/digital-marketing/pricing-package";
import FaqSection from "@/components/faq-section-2";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer-2";
import DigitalMarketingHeroSection from "@/components/digital-marketing/digital-marketing-hero-section";
import InfiniteScroll from "@/components/digital-marketing/web-agency-hero";

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
        filters={[
          "All",
          "E-commerce",
          "Business",
          "Hospitality and Food Service",
          "Real Estate",
        ]}
        btnIcon=""
      />

      <PricingPackage />
      <TestimonialsSection />
      <ContactSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
