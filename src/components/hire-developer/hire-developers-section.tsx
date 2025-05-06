import FeatureItem from "./feature-item"
import HeroImage from "./hero-image"

// Define the feature item type
interface FeatureItemType {
  icon: "megaphone" | "chart"
  title: string
  description: string
}

interface HireDevelopersSectionProps {
  features: FeatureItemType[]
  image?: string
}

export default function HireDevelopersSection({ features, image }: HireDevelopersSectionProps) {
  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <span className="text-green-400 uppercase text-sm font-medium tracking-wider">HIRE WEB DEVELOPERS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                Who&apos;ll Become an Extension of Your Team
              </h2>
              <p className="text-gray-600 mt-4">
                Our web developers take a unique approach to web development, handling every project with precision and
                care. No matter how complex your website is, you can count on our highly qualified team to get the job
                done.
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
                <p className="text-gray-500 col-span-2 text-center py-8">No features available</p>
              )}
            </div>

            <button className="inline-block bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300">
              Book an appointment
            </button>
          </div>

          <HeroImage image={image} />
        </div>
      </div>
    </section>
  )
}
