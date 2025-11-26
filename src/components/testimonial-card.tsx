import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Define the testimonial interface
interface Testimonial {
  id: number | string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-black text-white hover:scale-105 transition-all rounded-2xl border-none py-8 px-6 flex flex-col justify-between h-full shadow-lg hover:shadow-xl duration-300 relative">
      <CardContent className="p-0">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            {testimonial.avatar ? (
              <Image
                width={40}
                height={40}
                src={testimonial.avatar || "/placeholder.svg"}
                alt={`${testimonial.name}'s avatar`}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>
          <div>
            <p className="font-semibold text-white">{testimonial.name}</p>
            <p className="text-sm text-gray-300">{testimonial.role}</p>
          </div>
        </div>
        <p className="text-white text-base leading-relaxed">
          {testimonial.content}
        </p>
      </CardContent>
    </Card>
  );
}
