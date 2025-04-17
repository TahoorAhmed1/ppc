import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FaqSection() {
  return (
    <section className="py-12 md:py-20 bg-[#f9f9f9]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* LEFT - FAQ */}
          <div className="space-y-6">
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium">
                  How do I sign up for the project?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
                  Signing up is easy! Simply contact us through our website, email, or phone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium">
                  What should I prepare before starting?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
                  Prepare your project goals, any existing materials, and your budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium">
                  Does my company need help with marketing advice?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
                  Yes, most companies benefit from strategic marketing advice to grow and reach target audiences.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* RIGHT - CTA */}
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="px-0">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text">
                How We Can Help You?
              </h2>
            </CardHeader>
            <CardContent className="px-0 space-y-6">
              <p className="text-[#1C2D44] text-base leading-relaxed">
                Follow our newsletter. We’ll regularly update you with our latest projects and availability.
              </p>

              <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md">
                <Input
                  placeholder="Enter Your Email"
                  className="rounded-lg px-4 py-2 w-full sm:w-auto flex-1"
                />
                <Button className="bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] hover:opacity-90 text-white rounded-md px-6 whitespace-nowrap">
                  Let’s Talk
                </Button>
              </form>

              <div className="pt-2">
                <Link
                  href="#"
                  className="inline-flex items-center bg-gradient-to-r from-[#65CF5F] to-[#1F9BED] text-transparent bg-clip-text font-semibold hover:underline"
                >
                  More FAQ <ArrowRight className="ml-1 h-4 w-4 text-[#1F9BED]" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
