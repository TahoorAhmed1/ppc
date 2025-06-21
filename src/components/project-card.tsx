import Image from "next/image";

const ProjectCard = ({
  title,
  link,
  img,
  animate = true,
}: {
  title: string;
  link?: string;
  img: string;
  animate?: boolean;
}) => {
  return (
    <div
      className={`w-full hover:scale-105 transition-all border-[1px] border-[#41B4A7] overflow-hidden relative rounded-lg group ${
        animate ? "h-96" : ""
      }`}
    >
      <Image
        className={`object-cover translate-y-0 ${
          animate
            ? "group-hover:-translate-y-[65%] transition-transform duration-[3000ms]"
            : "transition-all"
        }`}
        width={1000}
        height={600}
        src={img}
        alt={title}
      />
    </div>
  );
};

export default ProjectCard;
