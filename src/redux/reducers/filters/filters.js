import { SET_FILTERS } from "../../constants";
import filters from "../../../data/products.json";

const initialState = [...filters];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTERS: {
      return [...state, ...action];
    }

    default:
      return state;
  }
}
