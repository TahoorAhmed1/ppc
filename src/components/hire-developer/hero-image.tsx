import Image from "next/image";

interface HeroImageProps {
  image?: string;
}

export default function HeroImage({ image }: HeroImageProps) {
  return (
    <div className="relative">
      <div className="relative w-full h-full">
        <Image
          src={
            image ||
            "/placeholder.svg?height=400&width=600&query=web%20developer%20team"
          }
          alt="Web developer working on code with purple design elements"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg "
          priority
        />
      </div>
    </div>
  );
}
