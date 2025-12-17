"use client";

import { motion } from "framer-motion";

export default function StatsBar() {
  return (
    <div className="flex   max-w-3xl border border-black mx-auto items-center justify-between rounded-[1.6vw] bg-gradient-to-r from-black via-slate-200 to-slate-100 p-[1.6vw]">
      {[
        { value: "300M+", label: "Global Impressions\nAcross Platforms" },
        { value: "1,250+", label: "Fresh Content\nCreated Daily" },
        { value: "85%", label: "Millennial Audience\nEngagement" },
        { value: "99%", label: "Client Retention\n& Satisfaction" },
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="flex flex-col items-center text-center px-[0.8vw]"
        >
          <span
            style={{
              fontSize: "clamp(13px, 2vw, 22px)",
              fontWeight: "bold",
              lineHeight: "1.2",
            }}
          >
            {stat.value}
          </span>
          <span
            style={{
              fontSize: "clamp(8px, 1vw, 11px)",
              color: "#4B5563",
              whiteSpace: "pre-line",
              lineHeight: "1.3",
              marginTop: "0.4vw",
            }}
          >
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
