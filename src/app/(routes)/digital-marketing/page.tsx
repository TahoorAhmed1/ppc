import { portfolio1, portfolio2, portfolio3, website1, website2, website3, website4, website5, website6 } from "@/assets";
import ContactSection from "@/components/contact-section";
import CtaSection from "@/components/cta-section";
import HeroSection from "@/components/digital-marketing/digital-marketing-hero-section";
import PricingPackage from "@/components/digital-marketing/pricing-package";
import FaqSection from "@/components/faq-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";
import { InfiniteScroll } from "@/components/digital-marketing/web-agency-hero";
import DigitalMarketingHeroSection from "@/components/digital-marketing/digital-marketing-hero-section";


const portfolioItems = [
    { id: 1, image: website1.src, },
    { id: 2, image: website2.src, },
    { id: 3, image: website3.src, },
    { id: 4, image: website4.src, },
    { id: 5, image: website5.src, },
    { id: 6, image: website6.src, },

]
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
            "Finance and Banking",
            "Education and E-Learning",
            "Hospitality and Food Service",
            "Entertainment and Media",
            "Real Estate",
            "Professional Services",
            "Travel and Hospitality",
          ]}
          btnIcon=""
          items={portfolioItems}
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
