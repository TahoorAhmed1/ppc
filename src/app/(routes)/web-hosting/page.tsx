import ServicesHeroSection from "@/components/digital-marketing/services-hero-section";
import React from "react";
import { VpsFeatures } from "@/components/web-hosting/vps-features/vps-features";

const pageHeading = "Web Hosting Services";

export default function page() {
  return (
    <>
      <ServicesHeroSection heading={pageHeading} />
      <VpsFeatures />
    </>
  );
}
