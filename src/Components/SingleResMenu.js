import React, { useEffect, useState } from "react";
import { useResMenu } from "../../utils/useResMenu";
import { useParams } from "react-router-dom";
import ShimmerComponent from "../Components/ShimmerComponent";
import { Card, Col, Container, Row } from "react-bootstrap";
import RestaurantCategory from "./RestaurantCategory";

const SingleResMenu = () => {
  const params = useParams();
  const { resId } = params;

  const [showIndex, setShowIndex] = useState(-1);
  const singleRes = useResMenu(resId);

  if (singleRes === null) return <ShimmerComponent />;

  const { name, cuisines, costForTwoMessage } =
    singleRes?.cards[0]?.card?.card?.info;

  const { itemCards } =
    singleRes?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const Categories =
    singleRes?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <Container className="mt-3">
      <Row>
        <Col
          md={{
            span: 8,
            offset: 2,
          }}
        >
          <Card className="border-0">
            <Card.Body>
              <Container className="text-muted">
                <h3 style={{ color: "black" }}>{name}</h3>
                <span style={{ display: "block", fontSize: "13px" }}>
                  {cuisines.join(", ")} - {costForTwoMessage}
                </span>
                {Categories?.map((category, index) => {
                  return (
                    <RestaurantCategory
                      key={category?.card?.card?.title}
                      data={category?.card?.card}
                      showData={index === showIndex ? true : false}
                      setShowIndex={(LatestIndex) => {
                        setShowIndex((prevIndex) => {
                          if (LatestIndex === prevIndex) {
                            return -1;
                          }
                          return LatestIndex;
                        });
                      }}
                      LatestIndex={index}
                    />
                  );
                })}
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleResMenu;
