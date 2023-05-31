import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Form, InputGroup, Navbar, Row } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ComponentCard from "./ComponentCard";
import { cards } from "./object";
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
              src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105821/1269.png"
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
};

const Body = () => {
  
  
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="12">
            <Card className="border-0">
              <Card.Body>
                <InputGroup size="sm">
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Search Your Food here!!"
                    style={{ border: "none", cursor: "pointer" }}
                  />
                </InputGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md="12">
            <Row>
              {/* map() return cards with jsx */}
              {cards?.map((obj) => {
                return <ComponentCard key={obj.Id} object={obj} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const AppLayOut = () => {
  return (
    <>
      <NavigationBar />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
