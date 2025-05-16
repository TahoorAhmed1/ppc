import type { Metadata } from "next";
import PageTransition from "@/components/website-development/page-transition";
import WebsiteDevelopmentHeroSection from "@/components/website-development/website-development-hero-section";
import InfiniteScroll from "@/components/website-development/web-agency-hero";
import PricingPackage from "@/components/website-development/pricing-package";
import ServicesCombo from "@/components/website-development/services-combo";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section-2";
import { AutoOpenImageModal } from "@/components/auto-open-image-modal";

export const metadata: Metadata = {
  title: "Website Development | Creative Agency 360",
  description: "We Build your Digital Business",
};

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-[100vh]">
        <WebsiteDevelopmentHeroSection />
        <InfiniteScroll />
        <PortfolioSection heading="Our Diverse Portfolio"
          title=""
          paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
          filters={["All", "E-commerce", "Business", "Real Estate"]}
          btnIcon="" />
        <PricingPackage />
        <ServicesCombo />
        <TestimonialsSection />
        <ContactSection />
        <FaqSection />
        <AutoOpenImageModal alt="Promotional popup" />
      </main>
    </PageTransition>
  );
}
