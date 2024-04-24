import { Container, Navbar as NavbarBS, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <NavbarBS className="text-light mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} className="text-light" to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} className="text-light" to="/shop">
            Shop
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-light"
          style={{
            width: "3rem",
            height: "3rem",
            position: "relative",
            fontSize: "1.2rem",
          }}
        >
          <i className="bi bi-cart" />
          <div
            className="rounded-circle bg-secondary d-flex justify-content-center align-items-center text-light"
            style={{
              width: "1.2rem",
              height: "1.2rem",
              right: -7,
              position: "absolute",
              bottom: -7,
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
