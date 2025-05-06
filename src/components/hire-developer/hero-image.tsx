import { heroSectionImage3 } from "@/assets"
import Image from "next/image"

export default function HeroImage() {
  return (
    <div className="relative">
      <div className="relative w-full h-full">
        <Image
          src={heroSectionImage3}
          alt="Web developer working on code with purple design elements"
          width={600}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  )
}
