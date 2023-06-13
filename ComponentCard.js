import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

import { AiOutlineStar } from "react-icons/ai";

const ComponentCard = (props) => {
  const {
    cloudinaryImageId,
    costForTwoString,
    cuisines,
    deliveryTime,
    name,
    avgRating,
  } = props?.object?.data;
  // urlinitial = https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/
  return (
    <>
      {/* Second Row */}
      <Col md="3" className="p-2" style={{ border: "none", cursor: "pointer" }}>
        <Card className="border-0 shadow">
          <Card.Img
            variant="top"
            src={
              `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` +
              cloudinaryImageId
            }
            // src={URL}
          />

          <Card.Body>
            <Card.Title style={{ fontSize: "15px" }}>{name}</Card.Title>
            <span className="text-muted">
              {(cuisines.length > 2 ? cuisines.slice(0, 2) : cuisines).join(
                ","
              )}
            </span>
          </Card.Body>
          <Row>
            <Col md="3">
              <Badge bg="success" className="d-flex justify-content-around">
                <AiOutlineStar />
                <span>{avgRating}</span>
              </Badge>
            </Col>

            <Col>
              <ul
                className="d-flex justify-content-evenly text-muted"
                style={{ fontSize: "10px" }}
              >
                <li className="pe-3">{`${deliveryTime} MINS`}</li>
                <li>{costForTwoString}</li>
              </ul>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default ComponentCard;
