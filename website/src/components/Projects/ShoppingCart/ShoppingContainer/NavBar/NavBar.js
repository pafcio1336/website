import React, { useState } from "react";
import "./NavBar.scss";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../redux/actions/ProductsActions";
import Product from "../Product/Product";
import ModalCart from "./ModalCart/ModalCart";

function NavBar({ counter }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const counter = useSelector((state) => state.counter.counter);
  // console.log("navbar:", counter);
  const openModalCart = () => {
    setModalIsOpen(true);
    console.log("modal is open");
  };

  const closeModalCart = () => {
    setModalIsOpen(false);
    console.log("modal is close");
  };
  return (
    <div className="navbar">
      <div className="navbar__cart" onClick={openModalCart}>
        <AiOutlineShoppingCart />
      </div>

      <span className="counter">{counter}</span>
      <div className="Modal" overlayClassName="Overlay">
        <ModalCart isOpen={modalIsOpen} onClose={closeModalCart}>
          <div className="random">
            <h2>hello modal</h2>
            <p>
              fjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkdladadjfsldjfoisadjfoisdjfsjdfdjf
            </p>
            {/* <button className="btn" onClose={closeModalCart}></button> */}
          </div>
        </ModalCart>
      </div>
    </div>
  );
}

export default NavBar;
