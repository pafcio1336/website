import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FILTER_PRODUCTS_BY_CATEGORY,
} from "../redux/actions";

const initialState = {
  cartItems: [],
  filteredCategory: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case FILTER_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        filteredCategory: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
