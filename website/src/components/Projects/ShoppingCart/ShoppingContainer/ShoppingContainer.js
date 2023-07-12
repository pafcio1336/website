import React, { useState } from "react";
import "./ShoppingContainer.scss";
import NavBar from "./NavBar/NavBar";
import ProductList from "./ProductsList/ProductsList";
import Product from "./Product/Product";
import ProductDetail from "./ProductDetail/ProductDetail";
import { useSelector } from "react-redux/es/hooks/useSelector";

function ShoppingContainer() {
  const [showProductJewelery, setShowProductJewelery] = useState(false);
  const [showProductWomen, setShowProductWomen] = useState(false);
  const [showProductMen, setShowProductMen] = useState(false);
  const [showProductElectro, setShowProductElectro] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const products = useSelector((state) => state.allProducts.products);
  const { id, title, image, price, category } = products;

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
      <NavBar />
      <div className="container__shopping-content">
        <ProductList
          handleProductJewelery={handleProductJewelery}
          handleProductWomen={handleProductWomen}
          handleProductMen={handleProductMen}
          handleProductElectro={handleProductElectro}
        />
        {showProductJewelery ? (
          <Product
            itemCategory="jewelery"
            handleProductDetail={handleProductDetail}
          />
        ) : null}
        {showProductWomen ? (
          <Product
            itemCategory="women's clothing"
            handleProductDetail={handleProductDetail}
          />
        ) : null}
        {showProductMen ? (
          <Product
            itemCategory="men's clothing"
            handleProductDetail={handleProductDetail}
          />
        ) : null}
        {showProductElectro ? (
          <Product
            itemCategory="electronics"
            handleProductDetail={handleProductDetail}
          />
        ) : null}
        {showProductDetail ? <ProductDetail id={id} /> : null}
      </div>
    </div>
  );
}

export default ShoppingContainer;
