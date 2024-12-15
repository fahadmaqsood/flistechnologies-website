import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import '../css/Navbar.css'

function AppNavbar() {
  const navigate = useNavigate() // Hook to navigate programmatically

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
          <Nav className='ms-auto custom-nav-links'>
            <Nav.Link as={NavLink} to='/' className='custom-nav-link'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/projects' className='custom-nav-link'>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to='/products' className='custom-nav-link'>
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to='/about-us' className='custom-nav-link'>
              About Us
            </Nav.Link>
          </Nav>

          {/* Contact Button */}
          <Button
            className='custom-contact-btn'
            onClick={() => navigate('/contact-us')}
          >
            Contact Us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
