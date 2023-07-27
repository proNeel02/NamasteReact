import { Card, Container } from "react-bootstrap";

const ItemList = ({ items }) => {
  return (
    <Container>
      {items?.map((item) => {
        return (
          <Card className="my-1">
            <Card.Body>
              <div>{item.card.info.name}</div>
              <div>{item.card.info.price}</div>
              <div>{item.card.info.description}</div>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};
export default ItemList;
