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
    <Card className="border-8 border-[#eaf6f5] p-2 h-auto w-full max-w-110 shadow-lg transition-shadow rounded-xl overflow-hidden">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className={`flex-shrink-0 ${iconBgColor} rounded-xl p-2`}>
            <Image
              src={icon || ""}
              alt={title || "Service icon"}
              width={100}
              height={100}
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-md sm:text-lg md:text-xl text-gray-900">{title}</h3>
            <p className="text-sm  text-gray-900 font-medium">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
