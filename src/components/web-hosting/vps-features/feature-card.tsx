import type { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  description: ReactNode
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
