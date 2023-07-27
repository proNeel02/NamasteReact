import React from "react";
import { Card, Col, Container, FormLabel, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ComponentCard = (props) => {
  const {
    id,
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
      <Col
        md="3"
        style={{ border: "none", cursor: "pointer", textDecoration: "none" }}
        as={Link}
        to={"/restaurents/" + id}
      >
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

// Higher Order Component is a Component that take other component as a parameter and return a Component as a value.

export const withPromotedLabel = (ComponentCard) => {
  return (props) => {
    return (
      <Col md={3}>
        <label
          style={{
            position: "absolute",
            backgroundColor: "gray",
            color: "white",
            borderRadius: "5px",
            padding: "5px",
            fontSize: "12px",
            fontWeight: "bold",
            zIndex: 1,
          }}
        >
          Promoted
        </label>
        <ComponentCard {...props} />
      </Col>
    );
  };
};

export default ComponentCard;
