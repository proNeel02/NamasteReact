import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

import { AiOutlineStar } from "react-icons/ai";

const ComponentCard = (props) => {

  const { object } = props;
  const {URL, Title, Cusions, Ratings, DeliveryTime, Price} = object;
  return (
    <>
      {/* Second Row */}
      <Col md="3" className="p-2"  style={{ border: "none", cursor: "pointer" }}>
        <Card className="border-0 shadow">
          <Card.Img
            variant="top"
            src={URL}
          />

          <Card.Body>
            <Card.Title style={{ fontSize: "15px" }}>{Title}</Card.Title>
            <span className="text-muted">
              {Cusions}
            </span>
          </Card.Body>
          <Row>
            <Col md="3">
              <Badge bg="success" className="d-flex justify-content-around">
                <AiOutlineStar />
                <span>{Ratings}</span>
              </Badge>
            </Col>

            <Col>
              <ul
                className="d-flex justify-content-evenly text-muted"
                style={{ fontSize: "10px" }}
              >
                <li className="pe-3">{DeliveryTime}</li>
                <li>{Price}</li>
              </ul>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default ComponentCard;
