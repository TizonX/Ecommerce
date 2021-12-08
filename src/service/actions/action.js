import { SET_PRODUCTS, SELECT_PRODUCTS, REMOVE_PRODUCTS } from "../Constants";

export function setProducts(products) {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
}

export function selectProduct(products) {
  return {
    type: SELECT_PRODUCTS,
    payload: products,
  };
}
