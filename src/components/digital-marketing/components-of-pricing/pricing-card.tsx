"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StarRating } from "./star-rating";
import { ServiceBadges } from "./service-badges";
import { FeatureList } from "./feature-list";

interface PricingCardProps {
  title: string;
  rating: number;
  description: string;
  currentPrice: string;
  originalPrice: string;
  services: string[];
  features: Array<{
    title: string;
    description: string;
  }>;
  showSilverStartupPlus?: boolean;
}

export function PricingCard({
  title,
  rating,
  description,
  currentPrice,
  originalPrice,
  services,
  features,
  showSilverStartupPlus = false,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <Card className="bg-[#0e2330] border border-gray-700 rounded-lg overflow-hidden text-white relative">
        <motion.div
          className="absolute inset-0 opacity-0 bg-gradient-to-r from-[#5ce0c6]/10 to-black/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-lg"
          initial={{ borderColor: "rgba(92,224,198,0)" }}
          whileHover={{
            borderColor: [
              "rgba(92,224,198,0)",
              "rgba(92,224,198,0.3)",
              "rgba(101,207,95,0.3)",
              "rgba(92,224,198,0.3)",
            ],
            boxShadow: "0 0 15px rgba(92,224,198,0.3)",
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 relative z-1">
          <div className="p-6 border-r border-gray-700 lg:col-span-1 my-auto">
            <StarRating rating={rating} />
            <motion.h2
              className="text-2xl font-bold mb-6"
              whileHover={{
                color: "#5ce0c6",
                scale: 1.05,
                originX: 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h2>
            <div className="mb-6">
              <h3 className="text-[#5ce0c6] font-medium mb-2">Perfect For</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
            <div className="flex items-center gap-5">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r w-30 cursor-pointer from-black/80 to-black hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-3 py-2 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#5ce0c6] to-black opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Order Now</span>
                </Button>
              </motion.div>
              <motion.div
                className="flex items-baseline"
                whileHover={{
                  scale: 1.1,
                  color: "#5ce0c6",
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-3xl font-bold text-[#5ce0c6]">
                  {currentPrice}
                </span>
                <span className="ml-2 text-gray-400 line-through">
                  {originalPrice}
                </span>
              </motion.div>
            </div>
          </div>

          <div className="p-6 lg:col-span-2">
            <motion.h3
              className="font-medium mb-4"
              whileHover={{
                color: "#5ce0c6",
                x: 5,
              }}
              transition={{ duration: 0.2 }}
            >
              Included services
            </motion.h3>
            <ServiceBadges services={services} />
            <FeatureList
              features={features}
              showSilverStartupPlus={showSilverStartupPlus}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
