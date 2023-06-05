import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LOGO_URL } from '../../utils/Constants';

const NavigationBar = () => {
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  style={{
                    width: "50px",
                  }}
                  src={LOGO_URL}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Home</Nav.Link>
                  <Nav.Link href="#pricing">About US</Nav.Link>
    
                  <Nav.Link href="#deets">Contact US</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Cart
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      );
}
export default NavigationBar
