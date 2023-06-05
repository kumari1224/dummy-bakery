import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Filters from "../Filters";
import Products from "../Products";
import cartIcon from "./../images/trolley.png";
import "./Home.css";

const cardListSelector = (state) => state.cart;

function Home() {
  const cartList = useSelector(cardListSelector, shallowEqual);
  console.log("cartList", cartList.length);

  return (
    <div>
      <div className="bg-strip"></div>
      <Link to="cart">
        <div className="app-cart">
          <img src={cartIcon} className="app-cart-icon" />
          <div className="cart-count">{cartList.length}</div>
        </div>
      </Link>

      <div className="app-container">
        <Filters />
        <Products />
      </div>
    </div>
  );
}

export default Home;
