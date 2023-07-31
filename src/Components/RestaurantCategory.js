import { Card } from "react-bootstrap";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showData, setShowIndex, LatestIndex }) => {
  const handleSetShow = () => {
    setShowIndex(LatestIndex);
  };

  return (
    <Card className="my-2 border-0 shadow">
      <Card.Body
        className="d-flex justify-content-between"
        style={{ cursor: "pointer" }}
        onClick={() => handleSetShow()}
      >
        <b style={{ color: "black" }}>
          {data.title} ({data?.itemCards?.length})
        </b>
        <span>⬇</span>
      </Card.Body>
      {showData && <ItemList items={data?.itemCards} />}
    </Card>
  );
};
export default RestaurantCategory;
