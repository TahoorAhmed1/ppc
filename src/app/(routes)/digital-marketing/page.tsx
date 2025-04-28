import DigitalMarketingHeroSection from '@/components/digital-marketing/digital-marketing-hero-section'
import DigitalMarketingServiceSection from '@/components/digital-marketing/digital-marketing-service-section'
import Pricing from '@/components/digital-marketing/pricing'
import React from 'react'

function page() {
    return (
        <>
            <DigitalMarketingHeroSection />
            <DigitalMarketingServiceSection />
            <Pricing />
        </>
    )
}

export default page

