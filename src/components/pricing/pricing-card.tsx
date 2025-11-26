"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useFormContact } from "@/store/form";
import { useState } from "react";
import { BookingModal } from "../website-development/booking-modal";
import { Check } from "lucide-react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="pricing-card border border-black rounded-lg overflow-hidden flex flex-col w-full h-full p-3 sm:p-4 md:p-5 shadow-sm"
        initial={{
          y: 0,
          boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
        }}
        whileHover={{
          y: -8,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="p-4 sm:p-5 md:p-6 text-center">
          <motion.h3
            className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-black/80 to-black text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {packageHeading}
          </motion.h3>
          <motion.h3
            className="text-xs sm:text-sm font-semibold text-gray-800 mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {packageDescription}
          </motion.h3>
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
          >
            {originalPrice && (
              <span className="text-base sm:text-lg text-gray-500 line-through">
                ${originalPrice?.toFixed(2)}
              </span>
            )}
            {currentPrice && (
              <motion.span
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-black"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                ${currentPrice?.toFixed(2)}
              </motion.span>
            )}
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              onClick={() => {
                setIsModalOpen(true);
              }}
              className="w-full bg-gradient-to-r cursor-pointer from-black/80 to-black hover:from-black/80 hover:to-black text-white font-medium py-2 sm:py-3 rounded transition-all duration-300 ease-in-out text-sm sm:text-base"
            >
              {buttonTitle}
            </Button>
          </motion.div>
        </div>
        <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
          <ul
            className="max-h-48 overflow-y-auto pr-2 space-y-1 sm:space-y-2 
                       [&::-webkit-scrollbar]:w-2
                       [&::-webkit-scrollbar-track]:bg-transparent
                       [&::-webkit-scrollbar-track]:rounded-full
                       [&::-webkit-scrollbar-thumb]:rounded-full
                       [&::-webkit-scrollbar-thumb]:bg-black
                       [&::-webkit-scrollbar-button]:hidden
                       scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent"
          >
            {features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                className="flex items-start pb-2 border-b border-gray-400 last:border-b-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 + featureIndex * 0.03 }}
              >
                <motion.span
                  className="text-black mr-2 flex-shrink-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 2,
                    delay: featureIndex * 0.2,
                  }}
                >
                  <Check />
                </motion.span>
                <span className="text-xs sm:text-sm text-black">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {isModalOpen && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          packageId={index}
          packageName={packageHeading}
          packagePrice={originalPrice}
        />
      )}
    </>
  );
}
