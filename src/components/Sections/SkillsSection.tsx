import React from "react";
import SkillSubsectionGenerator from "../skill-subsection-generator/skill-subsection-generator";

function SkillsSection(){

    return (
        <div className='container center-text'>
            <h2>
                <span>
                    <strong>Skills</strong>
                </span>
            </h2>
            <div className='justify-content-center'>
            <SkillSubsectionGenerator subsectionName='Languages'/>
            </div>
        </div>
    )
}

export default SkillsSection;