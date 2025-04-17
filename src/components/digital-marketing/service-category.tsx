import Image from "next/image"

interface ServiceCategoryProps {
  icon?: string // Path to image
  title: string
  subtitle: string
}

export default function ServiceCategory({ title, subtitle, icon }: ServiceCategoryProps) {
  return (
    <div className="flex items-center justify-start w-full max-w-[120px] sm:max-w-[135px] md:max-w-[150px] px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-600/40 rounded-full shadow-sm">
      {/* Logo */}
      <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white -ml-0.5 sm:-ml-1 mr-1.5 sm:mr-2">
        {icon && (
          <Image
            src={icon || "/placeholder.svg"}
            alt={`${title} Logo`}
            width={24}
            height={24}
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain"
          />
        )}
      </div>

      {/* Text */}
      <div className="text-white leading-none">
        <h2 className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-wide">{title}</h2>
        <p className="text-[6px] sm:text-[7px] md:text-[8px] text-left tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] mt-0.5 sm:mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
