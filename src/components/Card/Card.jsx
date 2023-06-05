import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { currency, addToCartText, deleteFromCartText } from "../constants";
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../../redux/constants";
import "./Card.css";

const cartDataPresent = (id) => (state) =>
  state.cart.find((cart) => cart.id === id);

function Card({ id, image, title, price, addedToCard }) {
  const dispatch = useDispatch();
  const isItemInCart = useSelector(cartDataPresent(id), shallowEqual);

  const addItemToCart = () => {
    if (isItemInCart) {
      dispatch({
        type: REMOVE_ITEM_FROM_CART,
        payload: {
          id,
        },
      });
    } else {
      dispatch({
        type: ADD_ITEM_TO_CART,
        payload: {
          id,
          title,
          price,
          image,
          addedToCard,
        },
      });
    }
  };

  return (
    <div className="card-main">
      <img src={image} />
      <h4 className="margin-10 card-title">{title}</h4>
      <h4 className="margin-10">
        {currency} {price}
      </h4>
      <button className={isItemInCart && "added"} onClick={addItemToCart}>
        {isItemInCart ? deleteFromCartText : addToCartText}
      </button>
    </div>
  );
}

export default Card;
