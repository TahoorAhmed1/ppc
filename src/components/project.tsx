<<<<<<< HEAD
=======

// import { project1,
//     project2,
//     project3,
//     project4,
//     project5,
//     project6,
//     project7,
//     project8,
//     project9,
//     project10,
//     project11,
//     project12,
//     project13,
//     project14,
//     project15,
//     project16, } from "@/assets";
>>>>>>> cd11406d3ab73a6e363847b485776eee9e220dfb
import ProjectCard from "./project-card";

<<<<<<< HEAD
const Projects = ({ items }: any) => {
  return (
    <div className="wrapper px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {items?.map((project: any, index: any) => (
          <ProjectCard
            key={index}
            img={project.img}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
=======
// const data = [
//     project1,
//       project2,
//       project3,
//       project4,
//       project5,
//       project6,
//       project7,
//       project8,
//       project9,
//       project10,
//       project11,
//       project12,
//       project13,
//       project14,
//       project15,
//       project16,
// ]


const Projects = () => {
    return (
        <div className="wrapper px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                {/* {data?.map((project, index) => {
                    return (
                        <ProjectCard img={project} key={index} />
                    )
                })} */}
            </div>
        </div>
    );
>>>>>>> cd11406d3ab73a6e363847b485776eee9e220dfb
};

export default Projects;
