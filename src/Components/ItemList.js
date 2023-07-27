import { Card, Container } from "react-bootstrap";
import { IMG_URL } from "../../utils/Constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <Container>
      {items?.map((item) => {
        return (
          <Card className="my-1" key={item?.card?.info?.id}>
            <Card.Body>
              <div
                style={{ color: "black" }}
                className="d-flex justify-content-between align-items-center"
              >
                <h6>{item.card.info.name}</h6>
                <img
                  src={IMG_URL + item?.card?.info?.imageId}
                  alt="img"
                  style={{ width: "100px" }}
                />
              </div>
              <div style={{ color: "black" }}>
                <b>₹{item.card.info.price / 100}</b>
              </div>
              <div>{item.card.info.description}</div>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};
export default ItemList;
