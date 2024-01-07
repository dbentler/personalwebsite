import React from "react";
import { Button } from "react-bootstrap";

interface ProjectsInformationProps {
    title: string;
    image: string;
    joke: string;
    github: string;
    about: string;
    readmore: string;
  }

  const ProjectsTemplate: React.FC<ProjectsInformationProps> = ({ title, image, joke, github, about, readmore }) => {
    
    return (
        <>
            <div className="center">
                <h4>
                    <span>{title}</span>
                </h4>
            </div>
            <div className="center">
                <img className="projects-img" src={image} alt=''/>
            </div>
            <div>
                <p>{joke}</p>
            </div>
            <div className='buttons-container'>
                <Button variant="dark" size='lg' href={github}>Source Code (Github Repository)</Button>
            </div>
            <p className="paragraph">
                {about}
            </p>
            <div className='center buttons-container'>
                <Button variant="success" size='lg' href={readmore}>Read More (Markdown, Github Repository)</Button>
            </div>
        </>
    )
  }

  export default ProjectsTemplate;