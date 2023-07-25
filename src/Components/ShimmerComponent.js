import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ShimmerComponent = () => {
  return (
    <Container className="mt-5">
      <Row className="mt-3">
        <Col md="12">
          <Row>
            <h1>Loading...</h1>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ShimmerComponent;
