import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { makeCartEmpty } from "../../utils/appStore";
import { Link } from "react-router-dom";

const Cart = () => {
  const list = useSelector((state) => state.app.list);
  
  const dispatch = useDispatch();

  return (
    <Container>
      <Card className="border-0 mt-3">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <h3>Cart - {list.length}</h3>
            {list.length ? (
              <Button
                size="sm"
                variant="danger"
                onClick={() => {
                  dispatch(makeCartEmpty());
                }}
              >
                Remove all Items
              </Button>
            ) : (
              <Button size="sm" variant="success" as={Link} to="/">
                Add Items{" "}
              </Button>
            )}
          </div>

          <Row>
            <Col
              md={{
                span: 8,
                offset: 2,
              }}
            >
              {list.length ? (
                <ItemList items={list} page={"cart"}/>
              ) : (
                <h5 className="text-center">Cart is Empty</h5>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cart;
