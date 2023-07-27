import { Card } from "react-bootstrap";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {

  return (
   
      <Card className="my-2 shadow-sm" style={{ backgroundColor: "#f4f2f5" }}>
        <Card.Body className="d-flex justify-content-between">
          <b style={{ color: "black" }}>
            {data.title} ({data?.itemCards?.length})
          </b>
          <span>⬇</span>
        </Card.Body>
        <ItemList items={data?.itemCards} />
      </Card>
     
   
  );
};
export default RestaurantCategory;
