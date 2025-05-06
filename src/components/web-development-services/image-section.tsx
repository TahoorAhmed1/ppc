import Image from "next/image"

interface ImageSectionProps {
  image?: string
}

export default function ImageSection({ image }: ImageSectionProps) {
  return (
    <div className="relative">
      <Image
        src={image || ""}
        alt="Web development workspace with purple blob design"
        width={600}
        height={600}
        className="w-full h-auto"
        priority
      />
    </div>
  )
}
