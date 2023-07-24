import React, { useState } from "react";
import "./NavBar.scss";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../redux/selectors";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
// import { useSelector, useDispatch } from "react-redux";
// import Product from "../Product/Product";
// import ModalCart from "../NavBar/ModalCart/ModalCart";

function NavBar({ showModal, setShowModal }) {
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <div className="navbar">
      <h2 className="title">Your Shop</h2>
      <div className="navbar__cart" onClick={() => setShowModal(true)}>
        <AiOutlineShoppingCart />
      </div>

      <span className="counter">{totalQuantity}</span>
    </div>
  );
}

export default NavBar;

//onClick={openModalCart}
