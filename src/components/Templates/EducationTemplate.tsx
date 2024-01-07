import React from "react";

interface EducationInformationProps {
    name: string;
    location: string;
    completed: string;
    certificate: string;
  }

const EducationTemplate: React.FC<EducationInformationProps> = ({ name, location, completed, certificate }) => {
    return (
        <div className="container exposition">
            <span>
                <strong>{name}</strong> | {location}
            </span>
            <div>
                <strong>Completed: </strong> {completed} <br></br>
                <i>{certificate}</i>
            </div> 
        </div>
    )
}

export default EducationTemplate;