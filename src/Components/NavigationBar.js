import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LOGO_URL } from "../../utils/Constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const cart = useSelector((state) => state.app.list);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              style={{
                width: "50px",
              }}
              src={LOGO_URL}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"}>
                About US
              </Nav.Link>

              <Nav.Link as={Link} to={"/contactus"}>
                Contact US
              </Nav.Link>
              <Nav.Link as={Link} to={"/cart"}>
                Cart ({cart.length})
              </Nav.Link>

              <Nav.Link eventKey={2} href="#memes">
                <Button
                  size="sm"
                  style={{
                    backgroundColor: "transparent",
                    color: "gray",
                    border: "none",
                  }}
                >
                  logout
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
