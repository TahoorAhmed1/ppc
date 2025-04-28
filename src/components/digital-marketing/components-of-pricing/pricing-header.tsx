export function PricingHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#5ce0c6] mb-4">Our Pricing</h1>
        <p className="text-lg">
          Compare Packages & Build Your
          <br />
          Ideal Website.
        </p>
      </div>
      <div className="flex items-center justify-end">
        <div className="text-right">
          <div className="mb-2">
            <span className="text-[#5ce0c6] text-2xl font-bold">Features You Need,</span>
          </div>
          <div>
            <span className="text-[#5ce0c6] text-2xl font-bold">Budget You Love.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
