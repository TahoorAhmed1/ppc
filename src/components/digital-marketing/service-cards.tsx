import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  iconBgColor?: string
}

export default function ServiceCard({ icon, title, description, iconBgColor = "bg-[#E8F8F6]" }: ServiceCardProps) {
  return (
    <Card className="ml-10 border-8 max-w-100 border-[#eaf6fb] shadow-sm hover:shadow-md transition-shadow rounded-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Image src={icon} alt="" width={40} height={40} className={`w-10 h-10 rounded-full ${iconBgColor}`} />
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
