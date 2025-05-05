import Link from "next/link";
import ServiceItem from "./service-item";

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Front-End Development",
      description:
        "Utilizing the latest technologies, we craft visually stunning and user-friendly experiences. Our expertise includes React, Angular, and others, ensuring your website is at the forefront of design and functionality.",
    },
    {
      number: "02",
      title: "Back-End Development",
      description:
        "We enhance your website's performance by managing complex databases, application logic, and server operations. Our team employs Node.js and Python, selecting the best fit for your project's specific needs.",
    },
    {
      number: "03",
      title: "Database Management",
      description:
        "We prioritize the security of your website through meticulously designed and maintained databases. Our solutions include SQL and NoSQL options, employing best practices to ensure data protection.",
    },
    {
      number: "04",
      title: "DevOps and Hosting",
      description:
        "Our experts manage your website's deployment, scaling, and maintenance through industry-leading platforms, including AWS, Azure, and Google Cloud.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 max-w-7xl mx-auto">
      <div className="mb-10 ">
        <span className="text-gray-500 uppercase text-sm tracking-wider block">
          A WEB DEVELOPMENT AGENCY
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-2 leading-tight">
          That Delivers Purpose-Built Solutions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceItem
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      <div className="mt-12 ">
        <Link
          href="#contact"
          className="inline-block bg-gradient-to-r from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300"
        >
          LET&apos;S CONNECT
        </Link>
      </div>
    </section>
  );
}
