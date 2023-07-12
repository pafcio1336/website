import { ActionTypes } from "../constants/actionTypes";

const initState = {
  products: [],
  counter: 0,
};

// const initCounter = {
//   counter: 0,
// };

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const counterReducer = (state = initState.counter, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case ActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
