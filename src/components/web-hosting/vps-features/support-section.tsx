import { supportSectionImage } from "@/assets";
import Image from "next/image";

export function SupportSection() {
  return (
    <div className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED]  text-white py-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 items-center relative">
          {/* Left Side: Image + Hex Background */}
          <div className="relative">
            <HexagonBackground />
            <div className="relative z-10 w-100 h-100 ml-30">
              <Image
                src={supportSectionImage.src}
                width={320}
                height={320}
                alt="Support team member"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full  ">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg ">
              Around-The-Clock VPS Support
            </h2>
            <p className="text-lg leading-relaxed drop-shadow-sm">
              You are never alone! At Creative Agency, we provide 24/7/365
              expert support for our VPS services via live chat, ticket, and
              phone support. Contact our support team at any time of the day and
              resolve any issue you might have instantly!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HexagonBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
      <div className="absolute left-30 top-12 ">
        <Hexagon size="lg" />
      </div>
      <div className="absolute left-60 -top-8">
        <Hexagon size="md" />
      </div>
      <div className="absolute left-88 top-16">
        <Hexagon size="lg" />
      </div>
    </div>
  );
}

function Hexagon({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  return (
    <div
      className={`${sizeClasses[size]} bg-[#FFF2B2] transform rotate-45  rounded-full`}
    />
  );
}
