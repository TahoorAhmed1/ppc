"use client";

import { motion } from "framer-motion";

interface ServiceTagProps {
  name: string;
}

export function ServiceTag({ name }: ServiceTagProps) {
  // Custom color mapping based on service name
  const getTagColor = (service: string) => {
    switch (service) {
      case "Animation":
        return "bg-black text-white";
      case "Branding":
        return "bg-white text-black border border-black";
      case "Digital Marketing":
        return "bg-white text-black border border-black";
      case "Ecommerce":
        return "bg-white text-black border border-black";
      case "Logo Design":
        return "bg-white text-black border border-black";
      case "SEO":
        return "bg-white text-black border border-black";
      case "SMM":
        return "bg-white text-black border border-black";
      case "Web Design":
        return "bg-white text-black border border-black";
      default:
        return "bg-white text-black border border-black";
    }
  };

  return (
    <motion.div
      className={`service-tag px-4 py-2 rounded-full text-sm font-medium ${getTagColor(
        name
      )}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 4px 12px rgba(78, 204, 163, 0.15)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {name}
    </motion.div>
  );
}
