import fakeDb from "../../api/fakeDb";
import EducationTemplate from "../EducationTemplate/EducationTemplate";

const EducationSection = () => {

    const educationData = fakeDb['Education'];

    return (
        <div className="container">
            <h2 className="center-text">
                <span>
                    <strong>Education</strong>
                </span>
            </h2>
            {educationData.map((education, index) => (
                <EducationTemplate key={index} 
                                   name={education.name} 
                                   location={education.location} 
                                   completed={education.completed} 
                                   certificate={education.certificate}/>
            ))}
        </div>
    )
}

export default EducationSection;