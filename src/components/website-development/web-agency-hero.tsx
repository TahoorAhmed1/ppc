"use client";
import { shopifyIcon, wixIcon, webflowIcon, wordpressIcon } from "@/assets";

import { motion } from "framer-motion";
import AutoSliderHeading from "../auto-silder-heading";
import AutoSlider from "../auto-slider";

// Example platform data
const platforms = [
  { name: "Shopify", src: shopifyIcon.src },
  { name: "WordPress", src: wordpressIcon.src },
  { name: "Wix", src: wixIcon.src },
  { name: "Webflow", src: webflowIcon.src },
];

export default function InfiniteScroll() {
  return (
    <motion.main
      className="w-full bg-white  md:py-30 sm:py-10 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <AutoSliderHeading
          title="Versatile Development Expertise"
          subtitle="Build Results-Driven Website With The Leading Web Development Agency"
        />

        <AutoSlider platforms={platforms} />
      </div>
    </motion.main>
  );
}
