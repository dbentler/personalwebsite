import Footer from "../components/Footer/Footer";
import ProjectsSection from "../components/Sections/ProjectsSection";

const Projects = () => {
    return (
        <div className="container center-text">
            <h1>
                <span>Projects</span>
            </h1>
            <p className="paragraph">
                Below is a list of personal projects I have completed over the years. You can click the "Read more" button underneath each project to be brought to
                a small little blog post in that project's Github repository.
                <br></br>
                <br></br>
                <i>Note: This page does not diplay ALL of the projects I worked on or would like to highlight.</i>
            </p>
            <div className="container">
                <ProjectsSection/>
            </div>
            <Footer/>
        </div>
    )
}

export default Projects;