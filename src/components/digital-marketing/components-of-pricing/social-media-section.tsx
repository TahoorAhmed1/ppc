import Image from "next/image"
import { ServiceCard } from "./service-card"
import { SocialMediaIcon } from "./social-media-icon"
import { servicesData } from "@/data/services-data"

export function SocialMediaSection() {
  return (
    <section className="py-16 px-4 md:py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side with image and social icons */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-[#4cd3a5] w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full mx-auto relative">
                <Image
                  src="/images/social-media-person.png"
                  alt="Social Media Expert"
                  width={400}
                  height={500}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                />
              </div>
            </div>

            {/* Social Media Icons */}
            <SocialMediaIcon src="/images/emoji-wow.png" alt="Wow Emoji" className="top-0 left-16" />
            <SocialMediaIcon src="/images/facebook-icon.png" alt="Facebook" className="top-[20%] left-0" />
            <SocialMediaIcon src="/images/instagram-icon.png" alt="Instagram" className="top-[30%] right-[5%]" />
            <SocialMediaIcon src="/images/pinterest-icon.png" alt="Pinterest" className="top-[60%] left-[5%]" />
            <SocialMediaIcon src="/images/emoji-love.png" alt="Love Emoji" className="top-[10%] right-[15%]" />
            <SocialMediaIcon
              src="/images/emoji-heart-eyes.png"
              alt="Heart Eyes Emoji"
              className="bottom-[30%] right-[10%]"
            />
            <SocialMediaIcon src="/images/youtube-icon.png" alt="YouTube" className="bottom-[15%] right-[20%]" />
            <SocialMediaIcon src="/images/thumbs-up.png" alt="Thumbs Up" className="bottom-[5%] left-[10%]" />
          </div>

          {/* Right side with service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                number={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
