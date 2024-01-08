import { Button } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import ProjectsSection from "../components/Sections/ProjectsSection";

const Projects = () => {
    return (
        <div className="container center-text">
            <h2>
                <span><strong>Portfolio</strong></span>
            </h2>
            <p className="paragraph">
                Below is a list of personal projects I have completed over the years. You can click the "Read more" button underneath each project to be brought to
                a small little blog post in that project's Github repository.
                <br></br>
                <br></br>
                <i>Note: This does not diplay ALL of the projects I worked on or would like to highlight.</i>
            </p>
            <div className="buttons-container">
                <Button variant="dark" size='lg' href="https://github.com/dbentler">Github (All repositories)</Button>
            </div>
            <div className="container">
                <ProjectsSection/>
            </div>
        </div>
    )
}

export default Projects;