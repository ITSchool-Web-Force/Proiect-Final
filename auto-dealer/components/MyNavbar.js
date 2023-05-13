import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Logo from "../public/gc-logo-white.png";

function ColorSchemesExample() {
  return (
    <Navbar bg="dark" variant="dark" className="navbar-style">
      <Container>
        <Nav.Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={50}
            height={50}
            priority={true}
            className="logo"
          />
        </Nav.Link>
        <div className="navbar-buttons">
          <Nav className="me-auto">
            <Nav.Link href="/current-stock" className="navbar-button">
              Current Stock
            </Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
