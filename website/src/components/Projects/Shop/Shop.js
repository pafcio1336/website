import React, { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductList from "./Cart/ProductList";
import ShoppingCart from "./Cart/ShoppingCart";
import NavBar from "./NavBar/NavBar";
import { filterProductsByCategory } from "./redux/actions";
import "./Shop.scss";

const Shop = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  dispatch(filterProductsByCategory(null));

  return (
    <div className="projects">
      <div className="box-2">
        <div className="container__shopping">
          <NavBar showModal={showModal} setShowModal={setShowModal} />
          <ProductList />
          <ShoppingCart showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </div>
  );
};
export default Shop;
