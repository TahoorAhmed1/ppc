import ContactSection from "@/components/contact-section";
import PricingPackage from "@/components/website-development/pricing-package";
import FaqSection from "@/components/faq-section-2";
import PortfolioSection from "@/components/portfolio-section";
import Footer from "@/components/footer-2";
import TestimonialsSection from "@/components/testimonials-section";
import { AutoOpenImageModal } from "@/components/auto-open-image-modal";
import InfiniteScroll from "@/components/website-development/web-agency-hero";
import ServicesCombo from "@/components/website-development/services-combo";
import { Metadata } from "next";
import WebsiteDevelopmentHeroSection from "@/components/website-development/website-development-hero-section";


export const metadata: Metadata = {
  title: "Website Development | Creative Agency 360 ",
  description: "We Build your Digital Business",
};

export default function Home() {
  return (
    <main className="min-h-[100vh]">
      <WebsiteDevelopmentHeroSection />
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
