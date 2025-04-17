import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CtaSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
            Let’s Work Together
          </h2>

          <p className="max-w-2xl text-[#1C2D44] text-base sm:text-lg">
            Have a project in mind? Let's make it happen! Contact us today and let's discuss how we can help you achieve your goals.
          </p>

          <form className="mt-4 flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl">
            <Input
              placeholder="Enter your email"
              className="rounded-lg px-4 py-3 w-full sm:flex-1 text-[#1C2D44]"
              required
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] hover:opacity-90 text-white rounded-lg px-6 py-3 w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
