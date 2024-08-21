import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/public/pet-adopt.png"
              width="55"
              height="45"
              className="d-inline-block"
              alt="logo-adopt"
            />
            Pets Adoption
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
