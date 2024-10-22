import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cabecera: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Conciertos Star</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/conciertos">Conciertos</Nav.Link>
          <NavDropdown title="Artistas" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/registrar-artistas">Registrar Artistas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/listar-artistas">Listar Artistas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/administrar-artistas">Administrar Artistas</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/acerca">Acerca De</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Cabecera;
