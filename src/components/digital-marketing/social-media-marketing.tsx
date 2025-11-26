import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { socialMediaMarketingImage } from "@/assets";

export default function SocialMediaMarketing() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-30 overflow-hidden flex items-center justify-center ">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="">
          <Image
            src={socialMediaMarketingImage.src}
            alt=""
            width={1000}
            height={1000}
            className="w-120"
          />
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            number="01"
            title="Cross-Platform Consistency"
            description="Maintain a consistent brand voice across all social media platforms.
"
          />
          <ServiceCard
            number="02"
            title="Trend-Driven Content Creation"
            description="Leveraging current trends to keep your content fresh and relevant."
          />
          <ServiceCard
            number="03"
            title="Community Building & Interaction"
            description="Foster authentic relationships with followers to build a loyal community."
          />
          <ServiceCard
            number="04"
            title="Social Media Ads Expertise"
            description="Expertly crafted ads to increase reach, engagement, and conversions."
          />
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <div className="bg-gradient-to-r from-black/80 to-black hover:from-black/80 hover:to-black transition-all duration-300 hover:scale-105 rounded-xl p-[5px]">
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
        <div className="text-xl text-end font-medium text-emerald-500 mb-4 ">
          {number}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <div className="mt-auto">
          <ArrowRight className="text-emerald-500 h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
