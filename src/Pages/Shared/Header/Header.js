import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import logo from '../../../images/Logo/logo.png'
import './Header.css'




const { Navbar, Container, Nav } = require("react-bootstrap");

const Header = () => {
  const[user]= useAuthState(auth);

  const handleSignOut = ()=>{
    signOut(auth);
  }
  return (


    <Navbar className='navbar' sticky='top' collapseOnSelect expand="lg"  variant="dark">
      <Container>
      <Navbar.Brand href="/
      home"><img src={logo} alt="" /> Flash Bright</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="home#services">Services</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          
        </Nav>
        <Nav>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
         { 
         user ?
         <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
         :
         <Nav.Link eventKey={2} href="/login">
            Login
          </Nav.Link>
          }
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;