import { CheckIcon } from "lucide-react"

interface Feature {
  title: string
  description: string
}

interface FeatureListProps {
  features: Feature[]
  showSilverStartupPlus?: boolean
}

export function FeatureList({ features, showSilverStartupPlus = false }: FeatureListProps) {
  return (
    <>
      <h3 className="font-medium mb-4">
        {showSilverStartupPlus ? "Features: ( Everything in Silver Startup, plus )" : "Features"}
      </h3>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-2">
            <div className="text-[#5ce0c6] "><CheckIcon /></div>
            <div>
              <span className="font-medium">{feature.title}</span> {feature.description}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
