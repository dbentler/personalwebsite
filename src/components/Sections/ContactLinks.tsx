import { Button } from "react-bootstrap";

const ContactLinks = () => {

    return (
        <>
            <div className="center">
                <h2>
                    <span>Portfolio</span>
                </h2>
                <br></br>
            </div>
            <div className="buttons-container">
                <Button variant="dark" size='lg' href="https://github.com/dbentler">Github (Programming, Source Code)</Button>
                <Button variant="dark" size='lg' href="">Projects (Blog, Programming)</Button>
                <Button variant="dark" size='lg' href="">Videos (Editing)</Button>
            </div>

            <div className="center">
                <h2>
                    <span>How To <strong className="redText">Contact</strong> Me</span> <br></br>
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
                <h4><strong>Direct Lines of Contact</strong></h4>
            </div>
            <div className="center">
                <h5><strong>Email: </strong> ny.dbentler@gmail.com</h5>
            </div>
            <div className="center">
                <h5><strong>Phone: </strong> See <a href="img/DarrenBentler_Resume.pdf">résumé</a></h5>
            </div>
        </>
    )
}

export default ContactLinks;