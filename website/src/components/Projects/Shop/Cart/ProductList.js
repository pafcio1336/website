import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addToCart, filterProductsByCategory } from "../redux/actions";
import "./ProductList.scss";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";

const ProductList = ({ showModal, setShowModal }) => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector((state) => state.cartItems);

  // State to track the IDs of products recently added to the cart
  const [recentlyAddedProductIds, setRecentlyAddedProductIds] = useState([]);

  const dispatch = useDispatch();
  const filteredCategory = useSelector((state) => state.filteredCategory);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    if (recentlyAddedProductIds.includes(product.id)) {
      return;
    }

    dispatch(addToCart({ ...product, quantity: 1 }));

    setRecentlyAddedProductIds([...recentlyAddedProductIds, product.id]);

    setTimeout(() => setRecentlyAddedProductIds([]), 1000);
  };

  const handleFilterByCategory = (category) => {
    dispatch(filterProductsByCategory(category));
  };

  const filteredProducts = filteredCategory
    ? products.filter((product) => product.category === filteredCategory)
    : products;

  return (
    <>
      <div className="cart">
        <div className="products__list-category">
          <button onClick={() => handleFilterByCategory(null)}>
            All Products
          </button>
          <button onClick={() => handleFilterByCategory("electronics")}>
            Electronics
          </button>
          <button onClick={() => handleFilterByCategory("jewelery")}>
            Jewelery
          </button>
          <button onClick={() => handleFilterByCategory("men's clothing")}>
            Men clothing
          </button>
          <button onClick={() => handleFilterByCategory("women's clothing")}>
            Women clothing
          </button>
        </div>
        <div className="products__container">
          {filteredProducts.map((product) => (
            <div className="product__card-container" key={product.id}>
              <div className="product__card-image">
                <img src={product.image} alt={product.title}></img>
              </div>
              <div className="product__card-title">{product.title}</div>
              <div className="wrapper">
                <div className="product__card-container--price">
                  {`${"$" + product.price}`}
                  <div className="product__card-container--price btn">
                    <button
                      className="btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      + <AiOutlineShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
              <div className="product__card-container--category">
                {product.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
