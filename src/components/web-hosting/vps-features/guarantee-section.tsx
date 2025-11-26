import type React from "react";
import { Shield, Lock, Activity } from "lucide-react";

export function GuaranteeSection() {
  return (
    <div className="bg-gradient-to-r from-black/80 to-black text-white p-8 rounded-lg relative mt-12 mb-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-shadow-2xs">
          We Believe In What We Offer!
        </h2>
        <p className="text-white mb-8 text-shadow-2xs">
          We are so confident that our Nexuz Global services will exceed your
          expectations that we offer a 45-day money-back guarantee!
        </p>
      </div>

      {/* Hexagon icons */}
      <div className="absolute -top-6 right-8  space-x-4 hidden md:flex">
        <HexagonIcon icon={<Shield className="h-6 w-6" />} />
        <HexagonIcon icon={<Lock className="h-6 w-6" />} />
        <HexagonIcon icon={<Activity className="h-6 w-6" />} />
      </div>
    </div>
  );
}

function HexagonIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="bg-black w-16 h-16 flex items-center justify-center transform rotate-45 rounded-lg m-2">
        <div className="transform -rotate-45 text-white ">{icon}</div>
      </div>
    </div>
  );
}
