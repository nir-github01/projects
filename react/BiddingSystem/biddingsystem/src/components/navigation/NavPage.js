import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationPage() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Bidding System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown>
          <span  style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SfNVulavWHxsBLgsREuUPNrd0cgxrlPnhV3QJw6jcMw3IjfJ&s")`}}></span>
            <Nav.Link href="#deets">LogIN</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
          LogOut
            </Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationPage;