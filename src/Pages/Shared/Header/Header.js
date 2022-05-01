import React from 'react';
import logo from '../../../images/logo.png'
import './Header.css'




const { Navbar, Container, Nav } = require("react-bootstrap");

const Header = () => {
  return (


    <Navbar className='navbar' collapseOnSelect expand="lg"  variant="dark">
      <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="" /> Flash Bright</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          
        </Nav>
        <Nav>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;