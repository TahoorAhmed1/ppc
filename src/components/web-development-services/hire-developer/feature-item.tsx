import { Megaphone, BarChart3 } from "lucide-react";

interface FeatureItemProps {
  icon: "megaphone" | "chart";
  title: string;
  description: string;
}

export default function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div>
      <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-green-100  border border-green-300 ">
        {icon === "megaphone" ? (
          <Megaphone className="w-8 h-8 text-green-400 " />
        ) : (
          <BarChart3 className="w-8 h-8 text-green-400 " />
        )}
      </div>
      <h3 className="text-gray-800 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
