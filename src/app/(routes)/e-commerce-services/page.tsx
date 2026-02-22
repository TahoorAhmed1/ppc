import {
  ecomerceServiceImage,
  girlWithPhone,
  heroSectionImage3,
  logoServiceImage,
  profileImage4,
} from "@/assets";
import Footer from "@/components/footer";
import PortfolioSection from "@/components/portfolio-section";
import WebDevelopmentSection from "@/components/web-development-services/web-development-section";
import HireDevelopersSection from "@/components/hire-developer/hire-developers-section";
import Link from "next/link";
import PricingSection from "@/components/pricing/pricing-section";
import ServicesHeroSection from "@/components/digital-marketing/services-hero-section";

export type FeatureItemType = {
  icon: "megaphone" | "chart";
  title: string;
  description: string;
};
export default function Page() {
  const ecommerceServices = [
    {
      number: "01",
      title: "Tailored E-Commerce Solutions",
      description:
        "We design custom e-commerce platforms that are built to scale, providing seamless user experiences and optimizing your sales funnel.",
    },
    {
      number: "02",
      title: "Mobile-First Design",
      description:
        "Our e-commerce websites are designed to work flawlessly across all devices, ensuring customers enjoy an optimal shopping experience, whether on mobile, tablet, or desktop.",
    },
    {
      number: "03",
      title: "Secure Payment Integration",
      description:
        "We integrate trusted payment gateways and security features, providing a smooth, secure transaction process for your customers.",
    },
    {
      number: "04",
      title: "Conversion Rate Optimization",
      description:
        "We implement strategies that focus on turning site visitors into loyal customers by improving site navigation, design, and checkout processes.",
    },
  ];

  const ecommerceFeatures: FeatureItemType[] = [
    {
      icon: "megaphone",
      title: "E-Commerce Experts",
      description:
        "Our team blends e-commerce developers, UX/UI designers, and digital marketing specialists to create fully integrated and optimized shopping experiences.",
    },
    {
      icon: "chart",
      title: "Cutting-Edge Technology",
      description:
        "We harness the latest technologies and platforms to deliver powerful, future-ready e-commerce solutions that grow with your business.",
    },
  ];

 const pricingOptions = [
  {
    id: 1,
    packageHeading: "E-Commerce Essential Package",
    packageDescription: "Perfect for startups & small stores",
    duration: 30,
    currentPrice: 599,
    originalPrice: 999,
    buttonTitle: "Buy Now",
    features: [
      "E-Commerce Website Design and Development",
      "Basic Design",
      "3 Banner Designs",
      "4 Stock Photos",
      "Hover Effects",
      "Up to 70 Products",
      "Up to 3 Categories",
      "Content/Inventory Management System",
      "Shopping Cart Integration",
      "Payment Module Integration",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
    ],
  },
  {
    id: 2,
    packageHeading: "E-Commerce Standard Package",
    packageDescription: "Best for growing businesses",
    duration: 30,
    currentPrice: 799,
    originalPrice: 1499,
    buttonTitle: "Buy Now",
    features: [
      "Everything in Essential Package",
      "Standard Design",
      "5 Banner Designs",
      "Stock Photos",
      "08 Revisions",
      "Hover Effects",
      "Up to 100 Products",
      "Up to 5 Categories",
      "Easy Product Search Bar",
      "Payment Module Integration (2)",
      "Direct Checkout",
      "Search Engine Submission",
      "Social Media Pages Integration",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
    ],
  },
  {
    id: 3,
    packageHeading: "E-Commerce Professional Package",
    packageDescription: "Most Popular for serious sellers",
    duration: 30,
    currentPrice: 1099,
    originalPrice: 2199,
    buttonTitle: "Buy Now",
    features: [
      "Everything in Standard Package",
      "Professional Custom Design",
      "10 Banner Designs",
      "12 Revisions",
      "Special Hover Effects",
      "Interactive Sliding Banners",
      "Up to 150 Products",
      "Up to 10 Categories",
      "Shipping Calculator Integration",
      "Wishlist",
      "Search Engine Submission",
      "Social Media Pages Integration",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
    ],
  },
  {
    id: 4,
    packageHeading: "E-Commerce Identity Kit",
    packageDescription: "Brand-focused premium solution",
    duration: 45,
    currentPrice: 1699,
    originalPrice: 3299,
    buttonTitle: "Buy Now",
    features: [
      "Custom WordPress Development",
      "Modern, Interactive & Unique Design",
      "12 Custom Banner Designs",
      "25 Revisions",
      "Up to 300 Products",
      "Up to 25 Categories",
      "Product Reviews & Ratings",
      "Mobile Responsive",
      "SEO Friendly Structure",
      "Tax & Shipping Calculator Integration",
      "Wishlist",
      "Bulk Import / Export",
      "Social Media Pages Integration",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
    ],
  },
  {
    id: 5,
    packageHeading: "E-Commerce Exclusive Package",
    packageDescription: "Enterprise-level eCommerce solution",
    duration: 60,
    currentPrice: 2799,
    originalPrice: 5499,
    buttonTitle: "Buy Now",
    features: [
      "Fully Customized Tailor-Made Design",
      "Unlimited Revisions",
      "Up to 700 Products",
      "Up to 70 Categories",
      "Advanced Product Filters",
      "Product Analytics & Reports",
      "Discount Coupons",
      "New Arrivals & Sale Showcases",
      "Live Chat Integration",
      "Blog & Sitemap",
      "SEO Optimized",
      "Bulk Import / Export",
      "Multiple Payment Gateways",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
    ],
  },
];
  const pageHeading = "E-commerce Services";
  //Hire
  const HireDevelopersSectionTitle = "Agile App Development";
  const HireDevelopersSectionHeading =
    "Innovative Designs to Captivate Your Audience";
  const HireDevelopersSectionDiscripton =
    "No matter the size of your brand, your customers will love when you launch an app that’s not only user-friendly but offers the desired reliability. So, you can count on us to understand your business needs after which we’ll come up with efficient solutions to design an app that garners instant results.";

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ServicesHeroSection heading={pageHeading} />

        <div className="">
          <WebDevelopmentSection
            services={ecommerceServices}
            image={ecomerceServiceImage.src}
            headingtitle="Unleash Your E-Commerce Potential"
            heading="Maximize Sales, Minimize Hassle "
          />
          {/* <PortfolioSection
            heading="Our Diverse Portfolio"
            title=""
            paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
            filters={["All", "E-commerce", "Business", "Real Estate"]}
            btnIcon=""
          /> */}
          <PricingSection
            pricingOptions={pricingOptions}
            pricingOptionsTilte="RIDE THE WAVE "
            pricingOptionsHeading="Success Isn’t Just a Trend "
            pricingOptionsDescription="In a market flooded with e-commerce platforms, the secret to lasting success lies in strategy and innovation. Build for growth, not just for the sale. "
          />
          <HireDevelopersSection
            features={ecommerceFeatures}
            image={logoServiceImage.src}
            HireDevelopersSectionTitle="What Makes Us "
            HireDevelopersSectionHeading="E-Commerce Pioneers "
            HireDevelopersSectionDiscripton="Building a successful e-commerce business requires more than just an attractive website. We create robust, scalable e-commerce platforms that optimize for both customer experience and long-term growth. "
          />
        </div>
       
      </div>
    </>
  );
}
