import { heroSectionImage2 } from "@/assets"
import Image from "next/image"

export default function ImageSection() {
  return (
    <div className="relative">
      <Image
        src={heroSectionImage2}
        alt="Web development workspace with purple blob design"
        width={600}
        height={600}
        className="w-full h-auto"
        priority
      />
    </div>
  )
}
