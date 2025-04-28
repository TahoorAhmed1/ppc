import { Badge } from "@/components/ui/badge"

interface ServiceBadgesProps {
  services: string[]
}

export function ServiceBadges({ services }: ServiceBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6 text-white">
      {services.map((service, index) => (
        <Badge key={index} variant="outline" className="rounded-md py-2 px-4  bg-transparent text-white">
          {service}
        </Badge>
      ))}
    </div>
  )
}
