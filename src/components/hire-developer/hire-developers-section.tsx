"use client";

import { useFormContact } from "@/store/form";
import { Button } from "../ui/button";
import FeatureItem from "./feature-item";
import HeroImage from "./hero-image";
import { motion } from "framer-motion";

// Define the feature item type
interface FeatureItemType {
  icon: "megaphone" | "chart";
  title: string;
  description: string;
}

interface HireDevelopersSectionProps {
  features: FeatureItemType[];
  image?: string;
  HireDevelopersSectionTitle?: string;
  HireDevelopersSectionHeading?: string;
  HireDevelopersSectionDiscripton?: string;
}

export default function HireDevelopersSection({
  features,
  image,
  HireDevelopersSectionTitle,
  HireDevelopersSectionHeading,
  HireDevelopersSectionDiscripton,
}: HireDevelopersSectionProps) {
  const { setIsOpen, isOpen }: any = useFormContact();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants}>
            <motion.div className="space-y-4 mb-8" variants={containerVariants}>
              <motion.p
                className="text-white uppercase text-sm font-medium tracking-wider mb-4"
                variants={itemVariants}
              >
                {HireDevelopersSectionTitle}
              </motion.p>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                variants={itemVariants}
              >
                {HireDevelopersSectionHeading}
              </motion.h2>
              <motion.p className="text-gray-600 mb-8" variants={itemVariants}>
                {HireDevelopersSectionDiscripton}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {features.length > 0 ? (
                features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))
              ) : (
                <p className="text-gray-500 col-span-2 text-center py-8">
                  No features available
                </p>
              )}
            </div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setIsOpen(true)}
                className="inline-block bg-gradient-to-r from-black/80 to-black hover:opacity-90 text-white rounded-lg text-sm sm:text-base font-semibold transition-all duration-300"
              >
                Book an appointment
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="overflow-hidden">
            <HeroImage image={image} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
