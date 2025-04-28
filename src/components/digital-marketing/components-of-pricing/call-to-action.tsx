import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <div className="flex justify-center mt-12 gap-4">
      <Button className="bg-gradient-to-r w-40 cursor-pointer from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-3 py-2">Contact Us</Button>
      <Button variant="outline" className="bg-gradient-to-r w-50 cursor-pointer from-[#65CF5F]/80 to-[#1F9BED] hover:opacity-90 text-white rounded-lg border-none text-sm md:text-base px-3 py-2">
        View Portfolio
      </Button>
    </div>
  )
}
