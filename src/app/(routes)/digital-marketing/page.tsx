import ContactSection from '@/components/contact-section'
import DigitalMarketingHeroSection from '@/components/digital-marketing/digital-marketing-hero-section'
import DigitalMarketingServiceSection from '@/components/digital-marketing/digital-marketing-service-section'
import Pricing from '@/components/digital-marketing/pricing'
import SocialMediaMarketing from '@/components/digital-marketing/social-media-marketing'
import AnimatedFaqSection from '@/components/faq-section'
import TestimonialsSection from '@/components/testimonials-section'
import React from 'react'
import { Footer } from 'react-day-picker'

function page() {
    return (
        <>
            <DigitalMarketingHeroSection />
            <DigitalMarketingServiceSection />
            <Pricing />
            <SocialMediaMarketing/>
            <TestimonialsSection />
            <ContactSection />
            <AnimatedFaqSection />
            <Footer />
        </>
    )
}

export default page

