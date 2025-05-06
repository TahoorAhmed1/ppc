import Link from "next/link"
import ServiceItem from "./service-item"

// Define the service item type
interface ServiceItemType {
  number: string
  title: string
  description: string
}

interface ServicesSectionProps {
  services: ServiceItemType[] // Making services required
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-12 max-w-7xl mx-auto">
      <div className="mb-10">
        <span className="text-gray-500 uppercase text-sm tracking-wider block">A WEB DEVELOPMENT AGENCY</span>
        <h2 className="text-4xl font-extrabold text-[#41B4A7] mb-3">That Delivers Purpose-Built Solutions</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceItem
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-2 text-center py-8">No services available</p>
        )}
      </div>

      <div className="mt-12">
        <Link
          href="#contact"
          className="inline-block bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300"
        >
          LET&apos;S CONNECT
        </Link>
      </div>
    </section>
  )
}
