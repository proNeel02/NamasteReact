import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

import ComponentCard from "../../ComponentCard";
import ShimmerComponent from "./ShimmerComponent";
import { withPromotedLabel } from "../../ComponentCard";

// import { useSelector } from "react-redux";
const Body = () => {
  const [resData, setResData] = useState(null);

  const RestraCardWithPromotedLabel = withPromotedLabel(ComponentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      setResData(
        data?.data.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      // console.log(
      //   data?.data.cards[5]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
    } catch (err) {
      console.log(err);
    }
  };

  if (resData === null) {
    return <ShimmerComponent />;
  } else {
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
                      style={{
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "500",
                      }}
                  
                    />
                  </InputGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md="12">
              <Row>
                {resData?.map((obj) => {
                  return obj?.data?.promoted ? (
                    <RestraCardWithPromotedLabel
                      key={obj?.data?.id}
                      object={obj}
                    />
                  ) : (
                    <ComponentCard key={obj?.info?.id} object={obj} />
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default Body;
