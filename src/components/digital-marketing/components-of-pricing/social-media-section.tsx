import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function SocialMediaMarketing() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="relative w-full lg:w-1/2 h-[500px] md:h-[600px] flex items-center justify-center">
          <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-br from-emerald-400 to-teal-500"></div>

          <div className="relative z-10">
            <Image
              src="/images/social-media-person.png"
              alt="Social media specialist with smartphone"
              width={500}
              height={600}
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute top-0 left-[15%] animate-float-slow">
            <Image src="/images/facebook-icon.png" alt="Facebook" width={80} height={80} />
          </div>
          <div className="absolute top-[10%] right-[15%] animate-float-slow-delay">
            <Image src="/images/instagram-icon.png" alt="Instagram" width={80} height={80} />
          </div>
          <div className="absolute bottom-[20%] left-[10%] animate-float">
            <Image src="/images/pinterest-icon.png" alt="Pinterest" width={80} height={80} />
          </div>
          <div className="absolute bottom-[10%] right-[15%] animate-float-delay">
            <Image src="/images/youtube-icon.png" alt="YouTube" width={80} height={80} />
          </div>
          <div className="absolute top-[5%] left-[5%] animate-float-slow">
            <Image src="/images/emoji-wow.png" alt="Wow emoji" width={60} height={60} />
          </div>
          <div className="absolute top-[40%] right-[5%] animate-float">
            <Image src="/images/emoji-heart.png" alt="Heart emoji" width={60} height={60} />
          </div>
          <div className="absolute bottom-[15%] right-[30%] animate-float-delay">
            <Image src="/images/emoji-love.png" alt="Love emoji" width={60} height={60} />
          </div>
          <div className="absolute bottom-[5%] left-[25%] animate-float-slow-delay">
            <Image src="/images/emoji-thumbsup.png" alt="Thumbs up emoji" width={60} height={60} />
          </div>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            number="01"
            title="Tailored Social Media Strategies"
            description="Li Europan lingues es membres del sam familie. Lor separat existentie es un"
          />
          <ServiceCard
            number="02"
            title="Engaging Content Creation"
            description="Li Europan lingues es membres del sam familie. Lor separat existentie es un"
          />
          <ServiceCard
            number="03"
            title="Expertise Across Platforms"
            description="Li Europan lingues es membres del sam familie. Lor separat existentie es un"
          />
          <ServiceCard
            number="04"
            title="Data-Driven Results"
            description="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth."
          />
        </div>
      </div>
    </div>
  )
}

interface ServiceCardProps {
  number: string
  title: string
  description: string
}

function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="text-xl font-medium text-emerald-500 mb-4">{number}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <div className="mt-auto">
        <ArrowRight className="text-emerald-500 h-5 w-5" />
      </div>
    </div>
  )
}
