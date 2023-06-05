import Card from "../Card";
import { useSelector, shallowEqual } from "react-redux";
import { productTitle } from "../constants";
import cupcake from "../images/cupcake.png";
import "./Products.css";

const selectFilters = (state) => state.products;

function Products() {
  const data = useSelector(selectFilters, shallowEqual);

  return (
    <div className="products-container">
      <div className="products-title">
        <h1>{productTitle}</h1>
        <div className="products-title-underline">
          <div className="half-underline" />
          <img src={cupcake} />
          <div className="half-underline" />
        </div>
      </div>
      <div className="products-main">
        {data?.cakes?.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
