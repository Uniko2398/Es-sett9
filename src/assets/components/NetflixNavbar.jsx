import { Navbar, Nav, Container } from "react-bootstrap";

function NetflixNavbar() {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="public/assets/logo.png"
            alt="Logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="fw-bold active">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="text-white bi-search icons"></i>
            <div id="kids" className="text-white fw-bold ms-3">
              KIDS
            </div>
            <i className="text-white bi-bell icons ms-3"></i>
            <i className="text-white bi-person-circle icons ms-3"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NetflixNavbar;
