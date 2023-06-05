import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  EMPTY_CART,
} from "../../constants";
import filters from "../../../data/products.json";

const initialState = [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      return [...state, { ...action.payload }];
    }
    case REMOVE_ITEM_FROM_CART: {
      return state.filter((data) => data.id !== action.payload.id);
    }
    case EMPTY_CART: {
      return initialState;
    }

    default:
      return state;
  }
}
