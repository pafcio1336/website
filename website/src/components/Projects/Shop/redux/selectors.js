export const getTotalQuantity = (state) =>
  state.cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
