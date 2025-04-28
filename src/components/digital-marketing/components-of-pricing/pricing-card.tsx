import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StarRating } from "./star-rating"
import { ServiceBadges } from "./service-badges"
import { FeatureList } from "./feature-list"

interface PricingCardProps {
  title: string
  rating: number
  description: string
  currentPrice: string
  originalPrice: string
  services: string[]
  features: Array<{
    title: string
    description: string
  }>
  showSilverStartupPlus?: boolean
}

export function PricingCard({
  title,
  rating,
  description,
  currentPrice,
  originalPrice,
  services,
  features,
  showSilverStartupPlus = false,
}: PricingCardProps) {
  return (
    <Card className="bg-[#0e2330] border border-gray-700 rounded-lg overflow-hidden text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="p-6 border-r border-gray-700 lg:col-span-1 my-auto">
          <StarRating rating={rating} />
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          <div className="mb-6">
            <h3 className="text-[#5ce0c6] font-medium mb-2">Perfect For</h3>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
          <div className="flex items-center gap-5">
            <Button className="bg-gradient-to-r w-30 cursor-pointer from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-3 py-2">Order Now</Button>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-[#5ce0c6]">{currentPrice}</span>
              <span className="ml-2 text-gray-400 line-through">{originalPrice}</span>
            </div>
          </div>

        </div>

        <div className="p-6 lg:col-span-2">
          <h3 className="font-medium mb-4">Included services</h3>
          <ServiceBadges services={services} />
          <FeatureList features={features} showSilverStartupPlus={showSilverStartupPlus} />
        </div>
      </div>
    </Card>
  )
}
