import React, { useEffect, useState } from "react";
import { useResMenu } from "../../utils/useResMenu";
import { useParams } from "react-router-dom";
import ShimmerComponent from "../Components/ShimmerComponent";
import { Card, Col, Container, Row } from "react-bootstrap";

const SingleResMenu = () => {
  const params = useParams();
  const { resId } = params;

  const singleRes = useResMenu(resId);

  if (singleRes === null) return <ShimmerComponent />;

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
              <h4>{singleRes?.cards[0]?.card?.card?.info?.name}</h4>
              <Container className="text-muted">
                <span style={{ display: "block", fontSize: "13px" }}>
                  {singleRes?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
                </span>
                <span style={{ display: "block", fontSize: "13px" }}>
                  {singleRes?.cards[0]?.card?.card?.info?.locality}
                </span>
                {singleRes?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                  (res) => (
                    <li>Elemnet</li>
                  )
                )}
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleResMenu;
