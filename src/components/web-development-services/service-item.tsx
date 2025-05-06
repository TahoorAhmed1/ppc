interface ServiceItemProps {
  number: string
  title: string
  description: string
}

export default function ServiceItem({ number, title, description }: ServiceItemProps) {
  return (
    <div className="mb-8">
      <div className="text-green-400 font-medium mb-1">{number}.</div>
      <h3 className="text-gray-800 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
