import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

const ShoppingCart = ({ showModal, setShowModal }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal__content-header">
              <h3>Shopping basket</h3>
              <span
                className="modal__content-close"
                onClick={() => setShowModal(false)}
              >
                Close
              </span>
            </div>

            <ul className="modal__content-list">
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.title} - {item.price} $
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="price">Total Price: {totalPrice.toFixed(2)} $</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
