import ServicesHeroSection from "@/components/digital-marketing/services-hero-section";
import React from "react";
import { VpsFeatures } from "@/components/web-hosting/vps-features/vps-features";
import { WhyChooseSection } from "@/components/web-hosting/vps-features/why-choose-section";
import { SupportSection } from "@/components/web-hosting/vps-features/support-section";
import { TestimonialsSection } from "@/components/web-hosting/vps-features/web-hosting-testimonials-section";
import Footer from "@/components/footer";

const pageHeading = "Web Hosting Services";

export default function page() {
  return (
    <div>
      <ServicesHeroSection heading={pageHeading} />
      <VpsFeatures />
      <WhyChooseSection />
      <SupportSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
