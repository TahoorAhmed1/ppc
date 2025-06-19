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
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
} from "@/assets";

export const metadata: Metadata = {
  title: "Website Development | Creative Agency 360",
  description: "We Build your Digital Business",
};
const portfolioData = [
  { image: project1.src, category: "Real Estate" },
  { image: project2.src, category: "E-commerce" },
  { image: project3.src, category: "Real Estate" },
  { image: project4.src, category: "Business" },
  { image: project5.src, category: "Business" },
  { image: project6.src, category: "Business" },
  { image: project7.src, category: "Business" },
  { image: project9.src, category: "E-commerce" },
  { image: project10.src, category: "E-commerce" },
  { image: project11.src, category: "E-commerce" },
  { image: project12.src, category: "Business" },
  { image: project13.src, category: "E-commerce" },
  { image: project14.src, category: "E-commerce" },
  { image: project15.src, category: "E-commerce" },
  { image: project16.src, category: "Business" },
];

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-[100vh]">
        <WebsiteDevelopmentHeroSection />
        <InfiniteScroll />
        <PortfolioSection
          heading="Our Diverse Portfolio"
          title=""
          paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
          filters={["All", "E-commerce", "Business", "Real Estate"]}
          btnIcon=""
          portfolioData={portfolioData}
        />
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
