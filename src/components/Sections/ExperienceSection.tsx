import fakeDb from "../../api/fakeDb";
import ExperienceTemplate from "../ExperienceTemplate/ExperienceTemplate";

const ExperienceSection = () => {

    const experienceData = fakeDb['Experience'];

    return (
        <div className="container">
            <h2 className="center-text">
                <span>
                    <strong>Experience</strong>
                </span>
            </h2>
            {experienceData.map((experience, index) => (
                <ExperienceTemplate key={index}
                                    company={experience.company}
                                    location={experience.location}
                                    role={experience.role}
                                    dates={experience.dates}
                                    accomplishments={experience.accomplishments}
                />
            ))}
        </div>
    )

}

export default ExperienceSection;