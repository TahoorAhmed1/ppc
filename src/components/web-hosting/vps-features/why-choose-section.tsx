import { Check } from "lucide-react";

export function WhyChooseSection() {
  return (
    <div className="bg-gray-50 py-16 p-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column with heading */}
          <div className="md:col-span-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
              <span className="bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] text-transparent bg-clip-text">
                Why Choose <br /> Creative Agency <br /> As Your Provider?
              </span>
            </h2>
            <p className="text-gray-600">
              Over the years, we have accumulated extensive creative knowledge that we have used to create a design
              service that no competitor can match.
            </p>
          </div>

          {/* Right column with features */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Professional Design",
                  description:
                    "We have used our 13-year creative experience to create the best design services that can meet the requirements of any client, regardless of the size of their business.",
                },
                {
                  title: "Unlimited Growth and Protection",
                  description:
                    "Leverage our powerful website and SEO tools through the creative platform and build the website you've always dreamed of. Additionally, we have partnered up with Cloudflare to provide you with advanced security features, quick access to a CDN, and CodeGuard, the best website backup service on the market.",
                },
                {
                  title: "A Home for Developers",
                  description:
                    "At Creative Agency, we fully support PHP 5, MySQL 5, Perl, CGI, SSH, SSL, HTML5 and JavaScript, providing a safe haven for all developers!",
                },
                {
                  title: "Eco-Friendly Design",
                  description:
                    "Our long-term sponsorship and partnership with The Woodland Trust mean that each design service we offer is completely carbon-neutral.",
                },
              ].map((feature, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center">
                    <Check className="text-green-400 mr-2" />
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
