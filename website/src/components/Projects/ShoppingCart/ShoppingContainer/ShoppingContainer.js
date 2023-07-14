import React, { useState } from "react";
import "./ShoppingContainer.scss";
import NavBar from "./NavBar/NavBar";
import ProductList from "./ProductsList/ProductsList";
import Product from "./Product/Product";
import ProductDetail from "./ProductDetail/ProductDetail";
import { useSelector } from "react-redux/es/hooks/useSelector";

function ShoppingContainer({ handlePlusCartClick, counter, id, products }) {
  const [showProductJewelery, setShowProductJewelery] = useState(false);
  const [showProductWomen, setShowProductWomen] = useState(false);
  const [showProductMen, setShowProductMen] = useState(false);
  const [showProductElectro, setShowProductElectro] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  // const counter = useSelector((state) => state.AllProducts.counter);

  const handleProductJewelery = () => {
    setShowProductJewelery(true);
    setShowProductWomen(false);
    setShowProductMen(false);
    setShowProductElectro(false);
    setShowProductDetail(false);
  };

  const handleProductWomen = () => {
    setShowProductWomen(true);
    setShowProductJewelery(false);
    setShowProductMen(false);
    setShowProductElectro(false);
    setShowProductDetail(false);
  };

  const handleProductMen = () => {
    setShowProductMen(true);
    setShowProductWomen(false);
    setShowProductJewelery(false);
    setShowProductElectro(false);
    setShowProductDetail(false);
  };

  const handleProductElectro = () => {
    setShowProductElectro(true);
    setShowProductMen(false);
    setShowProductWomen(false);
    setShowProductJewelery(false);
    setShowProductDetail(false);
  };

  const handleProductDetail = (id) => {
    setShowProductDetail(true);
    setShowProductElectro(false);
    setShowProductMen(false);
    setShowProductWomen(false);
    setShowProductJewelery(false);
    console.log("click");
  };
  return (
    <div className="container__shopping">
      <NavBar counter={counter} />
      <div className="container__shopping-content">
        <ProductList
          handleProductJewelery={handleProductJewelery}
          handleProductWomen={handleProductWomen}
          handleProductMen={handleProductMen}
          handleProductElectro={handleProductElectro}
          handlePlusCartClick={handlePlusCartClick}
        />
        {showProductJewelery ? (
          <Product
            counter={counter}
            itemCategory="jewelery"
            handleProductDetail={handleProductDetail}
            handlePlusCartClick={handlePlusCartClick}
          />
        ) : null}
        {showProductWomen ? (
          <Product
            counter={counter}
            itemCategory="women's clothing"
            handleProductDetail={handleProductDetail}
            handlePlusCartClick={handlePlusCartClick}
          />
        ) : null}
        {showProductMen ? (
          <Product
            counter={counter}
            itemCategory="men's clothing"
            handleProductDetail={handleProductDetail}
            handlePlusCartClick={handlePlusCartClick}
          />
        ) : null}
        {showProductElectro ? (
          <Product
            counter={counter}
            itemCategory="electronics"
            handleProductDetail={handleProductDetail}
            handlePlusCartClick={handlePlusCartClick}
          />
        ) : null}
        {showProductDetail ? <ProductDetail counter={counter} /> : null}
      </div>
    </div>
  );
}

export default ShoppingContainer;

// const mapStateToProps = (state) => {
//   return {
//     counter: state.allProducts.counter,
//   };

// connect(mapStateToProps)(
