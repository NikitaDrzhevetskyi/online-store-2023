import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">Apple-Store</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-item-button" title="Католог">
                <Dropdown.Item href="#action-1">Iphone</Dropdown.Item>
                <Dropdown.Item href="#action-2">MacBook</Dropdown.Item>
                <Dropdown.Item href="#action-3">ipad</Dropdown.Item>
                <Dropdown.Item href="#action-4">Apple Watch</Dropdown.Item>
                <Dropdown.Item href="#action-5">AirPods</Dropdown.Item>
                <Dropdown.Item href="#action-6">Акссексуари</Dropdown.Item>
                <Dropdown.Item href="#action-7">Гаджети</Dropdown.Item>
                <Dropdown.Item href="#action-8">БУ техніка</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search in shop..." />
              <Button variant="outline-warning">
                <i className="bi bi-search-heart text-white"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
                <span className="position-absolute top-1 start-10 traslate-middle p-2 bg-danger border border-light rounded-circle"></span>
              </Nav.Link>
            </LinkContainer>

            <NavDropdown title="Nikita Drz" id="collasible-nav-dropdown">
              <NavDropdown.Item
                eventKey="/user/my-orders"
                as={Link}
                to="/user/my-orders"
              >
                My Orders
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <Badge pill bg="danger">
                  2
                </Badge>
                <i className="bi bi-cart-dash-fill"></i>
                <span className="ms-1">CART</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
