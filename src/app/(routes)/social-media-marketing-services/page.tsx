import { girlWithPhone, heroSectionImage3, profileImage4 } from "@/assets";
import Footer from "@/components/footer";
import PortfolioSection from "@/components/portfolio-section";
import WebDevelopmentSection from "@/components/web-development-services/web-development-section";
import HireDevelopersSection from "@/components/hire-developer/hire-developers-section";
import Link from "next/link";

export type FeatureItemType = {
  icon: "megaphone" | "chart";
  title: string;
  description: string;
};
export default function Page() {
  const socialMediaServices = [
    {
      number: "01",
      title: "Social Media Strategy Development",
      description:
        "Understanding your business goals is the first step, followed by developing a social media strategy. We identify the target audience and the best social media platform during this process.",
    },
    {
      number: "02",
      title: "Content Creation",
      description:
        "Each social media platform has a different audience, so we write high-quality, engaging content tailored for each channel. This includes posts, videos, graphics, and captions.",
    },
    {
      number: "03",
      title: "Community Management",
      description:
        "To foster strong connections with your audience, we actively manage your online community by responding to comments and addressing concerns; doing so creates a positive perception of your brand.",
    },
    {
      number: "04",
      title: "Paid Campaigns",
      description:
        "Running highly targeted advertising campaigns tailored for specific demographics is essential to amplify your reach and ensure your budget delivers maximum returns.",
    },
  ];

  const seoFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "Tailored Strategies",
      description:
        "We develop customized strategies after thoroughly understanding your brand, target audience, and goals.",
    },
    {
      icon: "chart",
      title: "Expert Engagement",
      description:
        "Our experts on social media follow a hands-on approach when managing your community.",
    },
  ];

  const pageHeading = "Social Media Marketing Services";

  //WebDevelopmentSection
  const headingtitle = "Creating Lasting Connections";
  const heading = "That Amplify YourBrand’s Impact";

  //Hire
  const hireHeadingTitle = "Why Choose Our";
  const hireHeading = "Social Media Management Services";
  const hireHeadingDescription =
    "Working with Marketairre is a breeze, which makes hiring our SMM services worth it. But our friendly rapport is not the only reason you should consider hiring us; we take our work very seriously and only stop until we’ve produced the desired results.";

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
              {pageHeading}
            </h1>
            <div className="flex justify-center text-sm md:text-base flex-wrap gap-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2 hidden sm:inline">•</span>
              <span>{pageHeading}</span>
            </div>
          </div>
        </div>

        <div className="">
          <WebDevelopmentSection
            services={socialMediaServices}
            image={girlWithPhone.src}
            heading={heading}
            headingtitle={headingtitle}
          />
          <PortfolioSection
            heading="Our Diverse Portfolio"
            title=""
            paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
            filters={["All", "E-commerce", "Business", "Real Estate"]}
            btnIcon=""
          />
          <HireDevelopersSection
            features={seoFeatures}
            hireHeadingDescription={hireHeadingDescription}
            image={girlWithPhone.src}
            hireHeading={hireHeading}
            hireHeadingTitle={hireHeadingTitle}
          />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
