import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  number: string
  title: string
  description: string
}

export function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <Card className="border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="text-[#4cd3a5] text-xl font-medium mb-4">{number}</div>
        <h3 className="text-2xl font-bold text-[#1e293b] mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="text-[#4cd3a5]">
          <ArrowRight className="h-5 w-5" />
        </div>
      </CardContent>
    </Card>
  )
}
