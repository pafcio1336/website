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
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        // Jeśli produkt już istnieje w koszyku, zwiększ tylko jego ilość
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        // W przeciwnym razie dodaj nowy produkt do koszyka
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case REMOVE_FROM_CART:
      const productId = action.payload.productId;
      const quantity = action.payload.quantity || 1;

      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - quantity }
              : item
          )
          .filter((item) => item.quantity > 0),
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
