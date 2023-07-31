import { Button, Card, Container } from "react-bootstrap";
import { IMG_URL } from "../../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemFromCart,
  addItems,
  removeItem,
  removeItemFromCart,
} from "../../utils/appStore";
const ItemList = ({ items, page = null }) => {
  const list = useSelector((state) => state.app.list);
  const dispatch = useDispatch();

  const handleClick = (e, item) => {
    item.card.info.Quantity = 1;
    dispatch(addItems(item));
  };

  const handleClickRemove = (e, id) => {
    dispatch(removeItem(id));
  };

  const handleAddItemFromCart = (id) => {
    dispatch(addItemFromCart(id));
  };

  const handleRemoveItemUpdateCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <Container>
      {items?.map((item) => {
        return (
          <Card
            className="my-1 border-0 border-bottom border-radius"
            key={item?.card?.info?.id}
          >
            <Card.Body>
              <div
                style={{ color: "black" }}
                className="d-flex justify-content-between align-items-center"
              >
                <h6>{item.card.info.name}</h6>

                <div className="d-flex justify-content-center align-items-end">
                  <img
                    src={IMG_URL + item?.card?.info?.imageId}
                    alt="img"
                    style={{ width: "130px", borderRadius: "15px" }}
                  />
                  {page !== "cart" ? (
                    <Button
                      className="border-0"
                      size="sm"
                      style={{
                        color: "#fff",
                        position: "absolute",
                        backgroundColor: "black",
                      }}
                      onClick={(e) => {
                        handleClick(e, item);
                      }}
                    >
                      Add +
                    </Button>
                  ) : (
                    <div
                      style={{
                        width: "120px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        position: "absolute",
                      }}
                    >
                      <Button
                        className="border"
                        size="sm"
                        style={{
                          color: "black",
                          backgroundColor: "transparent",
                        }}
                        onClick={() =>
                          handleAddItemFromCart(item?.card?.info?.id)
                        }
                      >
                        +
                      </Button>

                      <Button
                        className="border"
                        size="sm"
                        style={{
                          color: "black",

                          backgroundColor: "transparent",
                        }}
                        onClick={(e) =>
                          handleClickRemove(e, item?.card?.info?.id)
                        }
                      >
                        remove
                      </Button>

                      <Button
                        className="border"
                        size="sm"
                        style={{
                          color: "black",
                          backgroundColor: "transparent",
                        }}
                        onClick={() =>
                          handleRemoveItemUpdateCart(item?.card?.info?.id)
                        }
                      >
                        -
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="p-2 m-2"
              >
                <div style={{ color: "black" }}>
                  <b>₹ {item.card.info.price / 100}</b>
                </div>

                {page && (
                  <>
                    <div style={{ color: "black" }}>
                      <b>quantity : {item.card.info.Quantity}</b>
                    </div>

                    <div style={{ color: "black" }}>
                      <b>
                        Amount : ₹{" "}
                        {(item.card.info.Quantity * item.card.info.price) / 100}
                      </b>
                    </div>
                  </>
                )}
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
