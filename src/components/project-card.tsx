import Image from "next/image";


const ProjectCard = ({ title, link, img }: any) => {
    return (
            <div className="w-full h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group">
                <Image
                    className="object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s]"
                    width={100}
                    height={100}
                    src={img}
                    alt="Amazonclone"
                />
             
            </div>
    );
};

export default ProjectCard;