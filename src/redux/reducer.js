import { combineReducers } from "redux";

import filtersReducer from "./reducers/filters/filters";
import productsReducer from "./reducers/products/products";
import cartReducer from './reducers/cart/cart';

const rootReducer = combineReducers({
  filters: filtersReducer,
  products: productsReducer,
  cart: cartReducer
});

export default rootReducer;
