import { girlWithPhone, heroSectionImage3, profileImage4 } from "@/assets";
import Footer from "@/components/footer";
import PortfolioSection from "@/components/portfolio-section";
import WebDevelopmentSection from "@/components/web-development-services/web-development-section";
import HireDevelopersSection from "@/components/hire-developer/hire-developers-section";
import Link from "next/link";
import PricingSection from "@/components/pricing/pricing-section";

export type FeatureItemType = {
  icon: "megaphone" | "chart";
  title: string;
  description: string;
};
export default function Page() {
  const seoServices = [
    {
      number: "01",
      title: "Keyword Research",
      description:
        "Laying a strong foundation for a sound SEO strategy begins with identifying the right keywords. We analyze search intent and strategically integrate high-impact terms into your content.",
    },
    {
      number: "02",
      title: "Content Creation",
      description:
        "Content is king, especially in SEO. Our highly qualified writers craft engaging, informative, and well-structured content that appeals to both humans and search engines.",
    },
    {
      number: "03",
      title: "Technical SEO",
      description:
        "From fast loading speeds to user-friendly navigation, we ensure your website is optimized for both bots and humans. We also address other technical aspects to enhance your site’s performance.",
    },
    {
      number: "04",
      title: "Backlink Building",
      description:
        "Earning links from relevant and credible websites signals trustworthiness to search engines. Backlink building is a key part of our strategy to boost your brand’s authority.",
    },
  ];

  const seoFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "SEO Specialists",
      description:
        "Though we’re SEO specialists, our team consists of experienced writers, developers, and link builders.",
    },
    {
      icon: "chart",
      title: "Advanced SEO Tools",
      description:
        "We have access to premium SEO tools that make optimizing your website and improving its performance a breeze.",
    },
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div
          className="text-white py-20 md:py-32 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroSectionImage3.src})`,
          }}
        >
          <div className="px-4 md:px-8 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              SEO Services
            </h1>
            <div className="flex justify-center text-sm md:text-base flex-wrap gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2 hidden sm:inline">•</span>
              <span>SEO Services</span>
            </div>
          </div>
        </div>

        <div className="">
          <WebDevelopmentSection
            services={seoServices}
            image={girlWithPhone.src}
            heading="Dominate the Search Engines"
            headingtitle="Professional SEO Services"
          />
          <PortfolioSection
            heading="Our Diverse Portfolio"
            title=""
            paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
            filters={["All", "E-commerce", "Business", "Real Estate"]}
            btnIcon=""
          />
          <PricingSection
            filter={[
              "Animation",
              "Branding",
              "Digital Marketing",
              "E-commerce",
              "Logo Design",
              "SEO",
              "SMM",
              "Web Design",
            ]}
          />
          <HireDevelopersSection
            features={seoFeatures}
            hireHeadingDescription="Improving your company’s SEO without being penalized can be tricky. Fortunately, we’re here to guide you throughout the process. Our performance-based SEO services are designed to improve your keyword rankings, enhance organic traffic, and grow revenue."
            image={girlWithPhone.src}
            hireHeading="The Best SEO Company"
            hireHeadingTitle="What Makes Us"
          />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
