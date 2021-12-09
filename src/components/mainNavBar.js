import React from 'react';
import { Container, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class MainNavBar extends React.Component {
  render() { 
    return (
      <div class="App-navbar">
      <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Luis Vargas</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#datascience">Data Science</Nav.Link>
            <Nav.Link href="#astrophysics">Astrophysics</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )
  }
}

export default MainNavBar;
