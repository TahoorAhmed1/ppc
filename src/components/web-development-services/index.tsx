import ImageSection from "./image-section"
import ServicesSection from "./services-section"

export default function WebDevelopmentSection() {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side with image and blob */}
          <ImageSection />

          {/* Right side with content */}
          <ServicesSection />
        </div>
      </div>
    </section>
  )
}
