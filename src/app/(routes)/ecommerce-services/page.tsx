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
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 649,
      originalPrice: 1000,
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
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 849,
      originalPrice: 1600,
      buttonTitle: "Buy Now",
      features: [
        "E-Commerce Website Design and Development",
        "Standard Design",
        "5 Banner Designs",
        "Stock Photos",
        "08 Revisions",
        "Hover Effects",
        "Up to 100 Products",
        "Up to 5 Categories",
        "Content/Inventory Management System",
        "Shopping Cart Integration",
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
      packageDescription: "Cost Effective Package for your business",
      duration: 30,
      currentPrice: 1179,
      originalPrice: 2600,
      buttonTitle: "Buy Now",
      features: [
        "E-commerce Website Design and Development",
        "Professional Design",
        "10 Banner Designs",
        "Stock Photos",
        "12 Revisions",
        "Special Hover Effects",
        "Interactive Sliding Banners",
        "Up to 100 Products",
        "Up to 10 Categories",
        "Content/Inventory Management System",
        "Easy Product Search Bar",
        "Shopping Cart Integration",
        "Direct Checkout",
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
      packageDescription: "Cost Effective Package for your business",
      duration: 45,
      currentPrice: 1999,
      originalPrice: 4400,
      buttonTitle: "Buy Now",
      features: [
        "E-commerce Website Design and Development",
        "Custom WordPress Development",
        "Modern, Interactive, and Unique Design",
        "12 Custom Banner Designs",
        "Interactive Sliding Banners",
        "Special Hover Effects",
        "Stock Photos",
        "25 Revisions",
        "Up to 450 Products",
        "Up to 30 Categories",
        "Product Review and Ratings",
        "Content/Inventory Management System",
        "Mobile Responsive",
        "Easy Product Search Bar",
        "Shopping Cart Integration",
        "Direct Checkout",
        "Sign-up Checkout",
        "Tax Calculator Integration",
        "Shipping Calculator Integration",
        "Wishlist",
        "Bulk Import/Export Order",
        "Search Engine Submission",
        "SEO Friendly",
        "Social Media Pages Integration",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
      ],
    },
    {
      id: 5,
      packageHeading: "E-Commerce Exclusive Package",
      packageDescription: "Cost Effective Package for your business",
      duration: 60,
      currentPrice: 3200,
      originalPrice: 6400,
      buttonTitle: "Buy Now",
      features: [
        "E-Commerce Website Design and Development",
        "Customized Tailor-Made Design",
        "Professional, Modern, and Unique Design",
        "User-friendly Navigation",
        "20 Banner Designs",
        "Sliding Banner",
        "20 Stock Photos",
        "Unlimited Revisions",
        "Special Hover Effects",
        "Content/Inventory Management System",
        "Mobile Responsive",
        "Up to 700 Products",
        "Up to 70 Categories",
        "Product Reviews & Ratings",
        "Product Summary Reports (Out of stock / Most Sold / Lowest sale etc) By Date",
        "Multiple Filtration Options",
        "Product View with Multiple Views",
        "Product Detail with Similar Product Range",
        "Discounted Products Showcase",
        "New Arrival Products Showcase",
        "Discount Coupons",
        "Easy Product Search Bar",
        "Payment Module Integration",
        "Direct Checkout",
        "Sign-up Checkout",
        "Tax Calculator Integration",
        "Shipping Calculator Integration",
        "Wishlist",
        "Import/Export Order",
        "Bulk Import/Export Order Information",
        "Live Chat Integration",
        "Social Media Pages Integration",
        "Blog Page",
        "Sitemap",
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
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
