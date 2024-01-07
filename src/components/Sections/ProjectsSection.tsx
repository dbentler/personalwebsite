import fakeDb from "../../api/fakeDb";
import ProjectsTemplate from "../Templates/ProjectsTemplate";

const ProjectsSection = () => {
    const projectsData = fakeDb['Projects'];

    return (
        <div className="container">
            {projectsData.map((project, index) => (
                <ProjectsTemplate key={index}
                                  title={project.title}
                                  image={project.image}
                                  joke={project.joke}
                                  github={project.github}
                                  about={project.about}
                                  readmore={project.readmore}
                />
            ))}
        </div>
    )
}

export default ProjectsSection;