"use client";
import { useFormContact } from "@/store/form";
import { Button } from "../ui/button";
import FeatureItem from "./feature-item";
import HeroImage from "./hero-image";

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
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-4 mb-8">
              <p className="text-green-400 uppercase text-sm font-medium tracking-wider mb-4 ">
                {HireDevelopersSectionTitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800  mb-4">
                {HireDevelopersSectionHeading}
              </h2>
              <p className="text-gray-600  mb-8">
                {HireDevelopersSectionDiscripton}
              </p>
            </div>

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

            <Button
              onClick={() => setIsOpen(true)}
              className="inline-block bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg text-sm sm:text-base font-semibold transition-all duration-300"
            >
              Book an appointment
            </Button>
          </div>

          <HeroImage image={image} />
        </div>
      </div>
    </section>
  );
}
