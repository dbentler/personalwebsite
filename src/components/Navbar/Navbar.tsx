import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className='navigation'>
                <Container className='navigation'>
                    <Navbar.Brand className='navigation' href="/">Darren Bentler</Navbar.Brand>
                    <Nav className="me-auto navigation">
                        <Nav.Link className='navigation' href="/">Home</Nav.Link>
                        <Nav.Link className='navigation' href="projects">Projects</Nav.Link>
                        <Nav.Link className='navigation' href="img/DarrenBentler_Resume.pdf">Download Résumé</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar;