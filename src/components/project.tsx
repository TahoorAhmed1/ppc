
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
import ProjectCard from "./project-card";
const ProjectCardData: { img: string, title: string, link: string }[] = []

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
};

export default Projects;