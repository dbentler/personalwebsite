import { Button } from "react-bootstrap";

const NotFound = () => {
    return (
        <>
            <div className="center">
                <h2>
                    <span>404: Not Found</span>
                </h2>
            </div>
            <div className="center">
                <p className="exposition">
                I'm sorry, but it appears the page you wanted does not exist.

                <br></br><br></br>

                In the meantime, please enjoy this silly picture of my rabbit:
                </p>
            </div>
            <div className="center">
                <img className="projects-img" src='img/silly_lucy.JPG' alt=''/>
            </div>
            <div className='buttons-container'>
                <Button variant="success" size='lg' href='/'>Go back to the home page</Button>
            </div>
        </>
    )
}
export default NotFound;