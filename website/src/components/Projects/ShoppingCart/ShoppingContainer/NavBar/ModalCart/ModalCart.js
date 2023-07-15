import React, { useState } from "react";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { useSelector, useDispatch } from "react-redux";
function ModalCart() {
  const [isOpen, setIsOpen] = useState(false);
  const products = useSelector((state) => state.allProducts.products);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const renderProductsInCart = products.map((product) => {
    const { title, price } = product;
    return (
      <div className="modal__content">
        <div className="modal__content-list">
          <div className="element__wrapper">
            <div className="list__wrapper">
              <span>1x .</span>
              <span>{title}</span>
            </div>
            <button>&minus;</button>
          </div>
        </div>
        <div className="btn__price-wrapper">
          <div className="modal__content-btn--close">
            <button className="btn__close" onClick={closeModal}>
              Close
            </button>
          </div>
          <div className="total__price">Total: {price}$</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <button className="navbar__cart" onClick={openModal}>
        <AiOutlineShoppingCart />
      </button>
      {isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal"></div>
        </div>
      )}
    </div>
  );
}

export default ModalCart;
