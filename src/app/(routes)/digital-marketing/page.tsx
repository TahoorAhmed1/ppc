import ContactSection from '@/components/contact-section'
import DigitalMarketingHeroSection from '@/components/digital-marketing/digital-marketing-hero-section'
import DigitalMarketingServiceSection from '@/components/digital-marketing/digital-marketing-service-section'
import Pricing from '@/components/digital-marketing/pricing'
import SocialMediaMarketing from '@/components/digital-marketing/social-media-marketing'
import AnimatedFaqSection from '@/components/faq-section'
import AnimatedFaqSection2 from '@/components/faq-section-2'
import Footer from '@/components/footer'
import TestimonialsSection from '@/components/testimonials-section'
import React from 'react'

function page() {
    return (
        <>
            <DigitalMarketingHeroSection />
            <DigitalMarketingServiceSection />
            <Pricing />
            <SocialMediaMarketing/>
            <TestimonialsSection />
            <ContactSection />
            <AnimatedFaqSection2 />
            <Footer />
        </>
    )
}

export default page

