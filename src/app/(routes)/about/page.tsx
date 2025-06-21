"use client";

import ServicesHeroSection from "@/components/digital-marketing/services-hero-section";

const pageHeading = "About Us";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <ServicesHeroSection heading={pageHeading} />

      <div className="max-w-[1000px] mx-auto px-4 py-8 text-gray-800">
        <h2 className="text-3xl font-semibold  mb-6">
          Bringing Your Vision to Life, Digitally
        </h2>

        <p className="mb-5 text-lg leading-relaxed">
          At <span className="font-semibold">Creative Agency 360</span>, your
          success genuinely matters to us. We’re not here to deliver flashy
          designs with no follow-through. We create purposeful digital
          experiences that help you connect with your audience, grow your brand,
          and drive real results.
        </p>

        <p className="mb-5 text-lg leading-relaxed">
          We believe in delivering true brand value solutions that look great,
          function seamlessly, and make a lasting impact. Every project we take
          on is rooted in strategy, creativity, and a deep understanding of your
          goals.
        </p>

        <p className="mb-5 text-lg leading-relaxed">
          Whether you're launching something new or leveling up your current
          presence, we bring together design, development, and marketing to help
          you build something powerful. Our work is collaborative, focused, and
          tailored because your business isn’t one-size-fits-all, and your
          digital presence shouldn’t be either.
        </p>

        <p className="mb-5 text-lg leading-relaxed">
          At the end of the day, we’re here to make your brand stronger, your
          message clearer, and your results better.
        </p>

        <p className="mt-6 text-lg font-medium text-center">
          Let’s build something meaningful together.
        </p>
      </div>
    </div>
  );
}
