import { coolEmoji, laughEmoji, loveEmoji, loveEmoji2, wowEmoji } from "@/assets"
import Image from "next/image"

export function EmojiDecorations() {
  return (
    <>
      <div className="hidden xl:block absolute top-[60px] left-200">
        <Image src={wowEmoji.src} alt="" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />
      </div>
      <div className="hidden xl:block absolute top-300 left-[200px]">
        <Image src={laughEmoji.src} alt="" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />
      </div>
      <div className="hidden xl:block absolute top-[400px] left-[20px]">
        <Image src={loveEmoji.src} alt="" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />
      </div>
      <div className="hidden xl:block absolute top-[200px] right-[60px]">
        <Image src={loveEmoji2.src} alt="" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />
      </div>
      <div className="hidden xl:block absolute bottom-[40px] left-[40px]">
        <Image src={coolEmoji.src} alt="" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />
      </div>
      <div className="hidden xl:block absolute bottom-[40px] right-[40px]">
        <Image src={wowEmoji.src} alt="" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />
      </div>
    </>
  )
}