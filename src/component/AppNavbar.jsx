import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import '../css/Navbar.css' // Use the updated CSS file for styling

function AppNavbar() {
  return (
    <Navbar expand='lg' className='custom-navbar'>
      <Container className='px-5'>
        {/* Logo */}
        <Navbar.Brand href='#' className='custom-logo'>
          Flistechnologies
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          {/* Navigation Links */}
          <Nav className='ms-auto custom-nav-links'>
            <Nav.Link href='#home' className='custom-nav-link'>
              Home
            </Nav.Link>
            <Nav.Link href='#projects' className='custom-nav-link'>
              Projects
            </Nav.Link>
            <Nav.Link href='#about' className='custom-nav-link'>
              About Us
            </Nav.Link>
          </Nav>

          {/* Contact Button */}
          <Button className='custom-contact-btn ms-auto'>Contact Us</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
