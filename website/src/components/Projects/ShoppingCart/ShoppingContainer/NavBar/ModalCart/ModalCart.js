import React from "react";
import ReactModal from "react-modal";

function ModalCart({ isOpen, onClose, children }) {
  return (
    <ReactModal
      className="Modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      overlayClassName="Overlay"
      shouldCloseOnOverlayClick={true}
    >
      {children}
      <button className="Modal btnClose" onClick={onClose}>
        Close
      </button>
    </ReactModal>
  );
}

export default ModalCart;
