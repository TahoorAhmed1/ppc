"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useFormContact } from "@/store/form";

interface PricingCardProps {
  packageHeading: string;
  packageDescription: string;
  duration?: number;
  currentPrice?: number;
  originalPrice?: number;
  features: string[];
  index: number;
  buttonTitle?: string;
}

export function PricingCard({
  packageHeading,
  packageDescription,
  currentPrice,
  originalPrice,
  features,
  index,
  buttonTitle, 
}: PricingCardProps) {
  const { setIsOpen, isOpen }: any = useFormContact();

  return (
    <motion.div
      className="pricing-card border border-gray-200 rounded-lg overflow-hidden flex flex-col w-120 h-full p-5 shadow-sm"
      initial={{
        y: 0,
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
        borderColor: "#e5e7eb",
      }} // Tailwind's gray-200
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        borderColor: "#4ecca3",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <div className="p-6 text-center">
        <motion.h3
          className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {packageHeading}
        </motion.h3>
        <motion.h3
          className="text-sm font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          {packageDescription}
        </motion.h3>
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
        >
          {currentPrice && <motion.span
            className="text-5xl font-bold text-[#3db8c5]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            ${currentPrice?.toFixed(2)}
          </motion.span>}
          {originalPrice && <span className="text-lg text-gray-500 line-through">
            ${originalPrice?.toFixed(2)}
          </span>}
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button
            onClick={() => setIsOpen(true)}
            className="w-full bg-gradient-to-r cursor-pointer from-[#65CF5F]/80 to-[#209CEB] hover:from-[#209CEB]/80 hover:to-[#65CF5F] text-white font-medium py-3 rounded transition-all duration-300 ease-in-out"
          >
            {buttonTitle}
          </Button>
        </motion.div>
      </div>
      <div className="px-6 pb-6">
        <ul className="space-y-2">
          {features.map((feature, featureIndex) => (
            <motion.li
              key={featureIndex}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.05 + featureIndex * 0.03 }}
            >
              <motion.span
                className="text-[#4ecca3] mr-2 mt-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 2,
                  delay: featureIndex * 0.2,
                }}
              >
                •
              </motion.span>
              <span className="text-sm text-gray-700">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
