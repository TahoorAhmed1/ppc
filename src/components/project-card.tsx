import Image from "next/image";

const ProjectCard = ({ title, link, img }: any) => {
  return (
    <div className="w-full h-96 border-[1px] border-[#41B4A7] overflow-hidden relative rounded-lg group">
      <Image
        className="object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s]"
        width={1000}
        height={1000}
        src={img}
        alt="Amazonclone"
      />
    </div>
  );
};

export default ProjectCard;
