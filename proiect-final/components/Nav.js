import Logo from "./Logo"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import index from "../pages/index"

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            <h4><Nav.Link href="./">home</Nav.Link></h4>
            <h4><Nav.Link href="./about">about</Nav.Link></h4>
            <h4><Nav.Link href="./contact">contact</Nav.Link></h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

