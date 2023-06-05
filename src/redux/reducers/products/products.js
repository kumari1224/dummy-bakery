import { SET_PRODUCTS } from "../../constants";
import data from "../../../data/data.json";

const initialState = { ...data };

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS: {
      return { ...state, ...action };
    }

    default:
      return state;
  }
}
