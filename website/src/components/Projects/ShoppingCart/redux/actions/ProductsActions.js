import { ActionTypes } from "../constants/actionTypes";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProducts = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const increment = (id) => {
  return {
    type: ActionTypes.INCREMENT,
    payload: id,
  };
};

export const decrement = (id) => {
  return {
    type: ActionTypes.DECREMENT,
    payload: id,
  };
};
