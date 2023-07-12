import React from "react";
import "./NavBar.scss";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../redux/actions/ProductsActions";
import Product from "../Product/Product";

function NavBar() {
  const counter = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  // dispatch(increment());
  return (
    <div className="navbar">
      <div className="navbar__cart">
        <AiOutlineShoppingCart />
        <span className="counter">{counter}</span>
      </div>
    </div>
  );
}

export default NavBar;
