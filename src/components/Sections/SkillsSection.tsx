import SkillSubsectionGenerator from "../SkillSubsectionGenerator/SkillSubsectionGenerator";

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
            <SkillSubsectionGenerator subsectionName='Software'/>
            <SkillSubsectionGenerator subsectionName='Frameworks'/>
            </div>
        </div>
    )
}

export default SkillsSection;