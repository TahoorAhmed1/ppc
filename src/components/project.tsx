import ProjectCard from "./project-card";


const Projects = ({ items, animate }: { items: any, animate?: any }) => {
  return (
    <div className="wrapper px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {items?.map((project: any, index: any) => (
          <ProjectCard
            key={index}
            title={project.title}
            img={project.image}
            animate={animate}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
