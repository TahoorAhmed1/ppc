import Image from "next/image"

interface SocialMediaIconProps {
  src: string
  alt: string
  className?: string
}

export function SocialMediaIcon({ src, alt, className }: SocialMediaIconProps) {
  return (
    <div className={`absolute ${className}`}>
      <Image src={src || "/placeholder.svg"} alt={alt} width={60} height={60} className="w-12 h-12 md:w-14 md:h-14" />
    </div>
  )
}
