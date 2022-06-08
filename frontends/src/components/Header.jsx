import React from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container /* NavDropdown*/ } from "react-bootstrap";
import { Link, Router } from "react-router-dom";

const Header = () => {
  return (
          <Router>
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>

          <Routes>

          <Navbar.Brand>TechStop</Navbar.Brand>
          </Routes>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart" className="fas fa-shopping-cart"> Cart</Nav.Link>
              <Nav.Link href="/login" className="fas fa-user"> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
          </Router>
  );
};

export default Header;
