import PortfolioSection from "@/components/portfolio-section"
import WebDevelopmentSection from "@/components/web-development-services/web-development-section"

export default function Home() {
  // Custom services data to pass as props
  const customServices = [
    {
      number: "01",
      title: "Custom Web Applications",
      description:
        "We build scalable, high-performance web applications tailored to your specific business needs using modern frameworks and technologies.",
    },
    {
      number: "02",
      title: "Responsive Website Design",
      description:
        "Our designs adapt seamlessly to all devices, ensuring your users have an optimal experience whether on desktop, tablet, or mobile.",
    },
    {
      number: "03",
      title: "API Development & Integration",
      description:
        "We create robust APIs and seamlessly integrate third-party services to extend your application's functionality and connectivity.",
    },
    {
      number: "04",
      title: "Performance Optimization",
      description:
        "We optimize your web applications for speed and efficiency, ensuring fast load times and smooth user experiences.",
    },
  ]

  // Custom image URL to pass as prop
  const customImage = "/placeholder.svg?key=ts055"

  return (
    <main className="min-h-screen">
      <WebDevelopmentSection services={customServices} image={customImage} />
      <PortfolioSection
                  heading="Our Diverse Portfolio"
                  title=""
                  paragraph="Explore our portfolio showcasing cutting-edge websites across 350+ industries. Each project exemplifies our commitment to superior quality, innovation, and technical prowess."
                  filters={["All", "E-commerce", "Business", "Real Estate"]}
                  btnIcon=""
                />
    </main>
  )
}
