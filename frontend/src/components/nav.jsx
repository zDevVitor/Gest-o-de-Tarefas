import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AdditionalContentExample from '../components/alert';

const nav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Gestão de Tarefas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  )
}

export default nav