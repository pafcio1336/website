import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

const ShoppingCart = ({ showModal, setShowModal }) => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId, quantity) => {
    if (quantity > 1) {
      dispatch(removeFromCart(productId, 1));
    } else {
      dispatch(removeFromCart(productId));
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const productQuantities = cartItems.reduce((quantities, item) => {
    quantities[item.id] = (quantities[item.id] || 0) + item.quantity;
    return quantities;
  }, {});

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
                  {productQuantities[item.id] > 1 && (
                    <span>({productQuantities[item.id]})</span>
                  )}
                  {productQuantities[item.id] === 1 && (
                    <button
                      onClick={() =>
                        handleRemoveFromCart(item.id, item.quantity)
                      }
                    >
                      remove
                    </button>
                  )}
                  {productQuantities[item.id] > 1 && (
                    <button onClick={() => handleRemoveFromCart(item.id, 1)}>
                      remove one
                    </button>
                  )}
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
