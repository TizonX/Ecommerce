import { SET_PRODUCTS, SELECT_PRODUCTS } from "../Constants";
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};

export const selectProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECT_PRODUCTS:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};
