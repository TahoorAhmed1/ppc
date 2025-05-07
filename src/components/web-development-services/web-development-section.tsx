import ImageSection from "./image-section";
import ServicesSection from "./services-section";

// Define the service item type
interface ServiceItemType {
  number: string;
  title: string;
  description: string;
}

interface WebDevelopmentSectionProps {
  image?: string;
  headingtitle?: string;
  heading?: string;
  services: ServiceItemType[];
}

export default function WebDevelopmentSection({
  image = "/web-development-concept.png",
  services,
  headingtitle,
  heading,
}: WebDevelopmentSectionProps) {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ImageSection image={image} />
          <ServicesSection
            services={services}
            headingtitle={headingtitle || ""}
            heading={heading || ""}
          />
        </div>
      </div>
    </section>
  );
}
