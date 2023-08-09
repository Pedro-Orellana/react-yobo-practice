import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const BasicToolbar = () => {
    
    return(
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>Practice Page</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/first_page"}>First Page</Nav.Link>
            <Nav.Link as={Link} to={"/second_page"}>Second Page</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}


export default BasicToolbar