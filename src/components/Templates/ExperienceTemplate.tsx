import React from "react";

interface ExperienceTemplateProps {
    company: string;
    location: string;
    role: string;
    dates: string;
    accomplishments: any[];
}

const ExperienceTemplate: React.FC<ExperienceTemplateProps> = ({company, location, role, dates, accomplishments}) => {
    return (
        <div className="container exposition">
            <span>
                <strong>{company}</strong> | {location}
            </span>
            <div>
                <strong>{role}</strong> | {dates} <br></br>
            </div> 
            <div>
                <ul>
                    {accomplishments.map((accomplishment, index) => (
                        <li>{accomplishment}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
} 

export default ExperienceTemplate;