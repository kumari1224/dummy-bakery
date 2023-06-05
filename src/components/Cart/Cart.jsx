import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { currency, addToCartText, deleteFromCartText } from "../constants";
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../../redux/constants";
import "./Cart.css";

const cartDataPresent = (state) => state.cart;

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartDataPresent, shallowEqual);

  return (
    <div className="cart-main">
      {cartItems?.length ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  {currency} {item.price}
                </td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() =>
                      dispatch({ type: REMOVE_ITEM_FROM_CART, payload: item })
                    }
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "Cart is empty"
      )}
    </div>
  );
}

export default Cart;
