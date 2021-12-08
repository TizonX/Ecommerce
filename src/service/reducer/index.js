import { combineReducers } from "redux";
import { productReducer, selectProductsReducer } from "./reducers";

export default combineReducers({
  productReducer,
  selectProductsReducer,
});
