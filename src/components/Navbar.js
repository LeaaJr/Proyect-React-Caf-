import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from "react";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Café</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Café</Nav.Link>
            <NavDropdown title="#review" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Menu">Expresso</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cappuchino
              </NavDropdown.Item>
              <NavDropdown.Item href="#Menu">Americano</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#about">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default BasicExample;