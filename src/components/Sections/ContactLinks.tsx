import { Button } from "react-bootstrap";
import Projects from "../../pages/Projects";

const ContactLinks = () => {

    return (
        <>
            <div className="center">
                <h2>
                    <span><strong>How To </strong><strong className="redText">Contact</strong><strong> Me</strong></span> <br></br>
                </h2>
            </div>
            <div className="center">
                <h4>Want to be social?</h4>
            </div>
            <div className="buttons-container">
                <Button variant="dark" size='lg' href="https://www.linkedin.com/in/dbentler/">LinkedIn</Button>
                <Button variant="dark" size='lg' href="https://github.com/dbentler">Github</Button>
            </div>
            <div className="center">
                <h4><strong><span>Direct Lines of Contact</span></strong></h4>
            </div>
            <div className="center">
                <h5><strong>Email: </strong> ny.dbentler@gmail.com</h5>
            </div>
            <div className="center">
                <h5><strong>Phone: </strong> See <a href="img/DarrenBentler_Resume.pdf">résumé</a></h5>
            </div>
            <div>
                <Projects />
            </div>
        </>
    )
}

export default ContactLinks;