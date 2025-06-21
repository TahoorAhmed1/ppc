import Image from "next/image"
import { Star } from "lucide-react"

export default function AwardsComponent() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Winning Hearts, Minds,
              <br />
              And Awards
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Globally recognized for our passion and expertise in creative web design models, Web Design Glory crushes
              digital design with user-friendly sites, earning top B2B awards across the U.S.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Image
              src="/placeholder.svg?height=300&width=250"
              alt="Golden Trophy Award"
              width={250}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* BBB Accredited */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-5 h-5 fill-green-500 text-green-500 mr-1" />
              <span className="text-xl font-bold">4.7</span>
            </div>
            <div className="mb-4">
              <div className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold inline-block">
                BBB ACCREDITED BUSINESS
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Proud to be a BBB Accredited business, demonstrating trust and commitment to excellence.
            </p>
          </div>

          {/* Clutch */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-5 h-5 fill-green-500 text-green-500 mr-1" />
              <span className="text-xl font-bold">4.9</span>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold">Clutch</h3>
            </div>
            <p className="text-gray-300 text-sm">Ranked as one of the top web design agencies on Clutch for 2025.</p>
          </div>

          {/* DesignRush */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-5 h-5 fill-green-500 text-green-500 mr-1" />
              <span className="text-xl font-bold">5.0</span>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">DESIGNRUSH</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Listed among the top web design and development companies on DesignRush for 2025, showcasing our industry
              leadership.
            </p>
          </div>

          {/* Fourth Award */}
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-5 h-5 fill-green-500 text-green-500 mr-1" />
              <span className="text-xl font-bold">5.0</span>
            </div>
            <div className="mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Featured among top-rated web design agencies with exceptional client satisfaction ratings.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
