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

export const increment = (value) => {
  return {
    type: ActionTypes.INCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: ActionTypes.DECREMENT,
    payload: value,
  };
};
