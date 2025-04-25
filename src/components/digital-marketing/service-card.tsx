import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ServiceCardProps {
  icon?: string
  title?: string
  description?: string
  iconBgColor?: string
}

export default function ServiceCard({ icon, title, description, iconBgColor = "bg-[#E8F8F6]" }: ServiceCardProps) {
  return (
    <Card className="border-8 border-[#eaf6f5]   shadow-lg transition-shadow rounded-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Image src={icon || ""} alt={title || "Service icon"} width={100} height={100} />
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl  text-gray-900">{title}</h3>
            <p className="text-sm text-gray-900 font-medium">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
