// import React from "react";
// import ReactModal from "react-modal";

// function ModalCart({ isOpen, onClose, children }) {
//   return (
//     <ReactModal
//       className="Modal"
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Modal"
//       overlayClassName="Overlay"
//       shouldCloseOnOverlayClick={true}
//     >
//       {children}
//       <button className="Modal btnClose" onClick={onClose}>
//         Close
//       </button>
//     </ReactModal>
//   );
// }

// export default ModalCart;

import React, { useState } from "react";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
function ModalCart() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div>
      <button className="navbar__cart" onClick={openModal}>
        <AiOutlineShoppingCart />
      </button>
      {isOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <div className="modal__content">
              <div className="modal__content-list">
                {/* <div className="modal__content-list--wrapper">
                  <span className="modal__content-list--wrapper counter">
                    1<span className="modal__content-list--wrapper x">x</span>
                    <div className="modal__content-list--wrapper contentlist">
                      just random text
                    </div>
                  </span>
                </div> */}
                <div className="element__wrapper">
                  <div className="list__wrapper">
                    <span>1x .</span>
                    <span>TEXt</span>
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
                <div className="total__price">$ Total</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalCart;
