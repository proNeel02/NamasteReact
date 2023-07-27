import { Card } from "react-bootstrap";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <Card className="my-2 border-0">
      <Card.Body className="d-flex justify-content-between">
        <b style={{ color: "black" }}>
          {data.title} ({data?.itemCards?.length})
        </b>
        <span style={{ cursor: "pointer" }}>⬇</span>
      </Card.Body>
      <ItemList items={data?.itemCards} />
    </Card>
  );
};
export default RestaurantCategory;
