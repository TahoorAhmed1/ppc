import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { BarChart2, LineChart, Megaphone, PieChart } from 'lucide-react'
import ServiceCard from './service-card'
import {
    profileImage,
    coolEmoji,
    loveEmoji,
    loveEmoji2,
    wowEmoji,
    likeEmoji,
    laughEmoji,
    serviceRightImage,
    digitalserviceIcon1,
    digitalserviceIcon2,
    digitalserviceIcon3,
    digitalserviceIcon4,
} from '@/assets'

export default function DigitalMarketingServiceSection() {
    return (
        <main className="min-h-screen bg-white overflow-hidden">
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative  ">
                    {/* Left Column */}
                    <div className="space-y-8 relative">
                        <div className="absolute -left-2 top-150 z-10">
                            <Image
                                src={coolEmoji.src}
                                alt="Thumbs up"
                                width={80}
                                height={80}
                                className="w-16 h-16 md:w-20 md:h-20"
                            />
                        </div>

                        <div className="space-y-6 ">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#3CBFAE] leading-tight">
                                Take Your Social Media To The Next Level
                            </h1>

                            <p className="text-gray-700 text-lg max-w-xl">
                                At Creative Agency 360, we don't have a secret formula — just a proven approach to help you achieve your
                                goals in a simple, effective, and results-driven way.
                            </p>

                            <Button className="bg-[#4CD079] hover:bg-[#3bb063] text-white rounded-md px-8 py-6 text-lg font-medium">
                                Get In Touch
                            </Button>
                        </div>




                    </div>

                    {/* Right Column */}
                    <div className="relative">
                        <div className="h-full relative w-full overflow-hidden">



                            {/* Icons */}
                            <div className="absolute top-6 right-16 z-10">
                                <Image
                                    src={loveEmoji.src}
                                    alt="Love reaction"
                                    width={60}
                                    height={60}
                                    className="w-20 h-20 "
                                />
                            </div>

                            {/* Phone mockup */}
                            <div className="relative ">
                                <Image
                                    src={serviceRightImage.src}
                                    alt="Phone mockup with person holding megaphone"
                                    width={500}
                                    height={800}
                                    className="w-full h-auto max-w-[600px] mx-auto"
                                    priority
                                />

                                {/* Emoji reactions */}

                                <div className="absolute bottom-0 right-4 z-10">
                                    <Image
                                        src={laughEmoji.src}
                                        alt="Heart eyes emoji"
                                        width={60}
                                        height={60}
                                        className="w-12 h-12 md:w-16 md:h-16"
                                    />
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 absolute ml-5 -bottom-15 max-w-[850px] h-120">
                        <ServiceCard
                            icon={digitalserviceIcon1.src}
                            title="Holistic Social Media Strategies"
                            description="We design customized strategies that are uniquely aligned with your brand’s objectives and target audience, ensuring your message stands out.
"
                            iconBgColor="bg-[#E8F8F6]"
                        />

                        <ServiceCard
                            icon={digitalserviceIcon2.src}
                            title="Engaging Content Creation"
                            description="Our expert team crafts captivating content, optimized for each platform, that resonates with your followers and drives interaction."
                            iconBgColor="bg-[#E8F8F6]"
                        />

                        <ServiceCard
                            icon={digitalserviceIcon3.src}
                            title="Advertising and Campaign Management"
                            description="We use analytics to track performance, continuously optimizing your campaigns for measurable growth and success."
                            iconBgColor="bg-[#E8F8F6]"
                        />

                        <ServiceCard
                            icon={digitalserviceIcon4.src}
                            title="Expertise Across Platforms"
                            description="From Facebook to TikTok, our experience across all major social platforms ensures your business gets the best results, no matter the channel."
                            iconBgColor="bg-[#E8F8F6]"
                        />
                    </div>



                </div>
            </div>
        </main>
    )
}
