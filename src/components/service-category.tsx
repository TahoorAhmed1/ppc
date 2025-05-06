import type { ReactNode } from "react";
import Image from "next/image";

interface ServiceCategoryProps {
  icon?: string; // Path to image
  title: string;
  subtitle: string;
}

export default function ServiceCategory({ title, subtitle, icon }: ServiceCategoryProps) {
  return (
    <div className="flex items-center justify-start w-full max-w-[150px] px-2 py-1 bg-gray-600/40 rounded-full shadow-sm">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white -ml-1 mr-2 ">
        {icon && <Image src={icon} alt="Travel Logo" width={24} height={24} />}
      </div>

      <div className="text-white leading-none">
        <h2 className="text-[10px] font-semibold tracking-wide">{title}</h2>
        <p className="text-[8px] text-center tracking-[2px] mt-1">{subtitle}</p>
      </div>
    </div>
  );
}
