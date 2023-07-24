export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const FILTER_PRODUCTS_BY_CATEGORY = "FILTER_PRODUCTS_BY_CATEGORY";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
export const removeFromCart = (productId, quantity = 1) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productId,
      quantity,
    },
  };
};

export const filterProductsByCategory = (category) => ({
  type: FILTER_PRODUCTS_BY_CATEGORY,
  payload: category,
});
