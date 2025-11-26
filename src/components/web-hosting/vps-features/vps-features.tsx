import { FeatureCard } from "./feature-card";
import { GuaranteeSection } from "./guarantee-section";

export function VpsFeatures() {
  return (
    <div className=" mx-auto px-8 py-12 max-w-7xl ">
      <h1 className="text-3xl font-bold text-center mb-12">
        What Makes Our Nexuz Global Excellent?
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Global  Network"
          description="Our creative team is distributed across Tier-1 cities worldwide, which gives us access to diverse cultural perspectives and the latest design trends."
        />

        <FeatureCard
          title="Dual Project Managers"
          description="Each client is assigned two dedicated project managers for free, ensuring continuous communication and seamless project delivery."
        />

        <FeatureCard
          title="Premium Design at Affordable Prices"
          description="Our creative professionals deliver exceptional design work powered by industry-leading tools and techniques, offering superior quality at budget-friendly prices you won't find elsewhere."
        />

        <FeatureCard
          title="Powerful Design and Development Combination"
          description="You can control every aspect of your project with our comprehensive dashboard and manage your content through our intuitive CMS platform."
        />

        <FeatureCard
          title="Highly-Scalable Service Packages"
          description="Choose the package that provides the creative resources and performance you need, and easily upgrade your package as your business grows."
        />

        <FeatureCard
          title="100% Satisfaction Guarantee"
          description="Our experienced designers, developers, and choice of premium tools enable us to provide each client with a 100% satisfaction guarantee."
        />
      </div>

      <GuaranteeSection />
    </div>
  );
}
