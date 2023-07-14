import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Product.scss";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { increment } from "../../redux/actions/ProductsActions";
import { useEffect } from "react";

function Product({
  itemCategory,
  handleProductDetail,
  handlePlusCartClick,
  counter,
}) {
  const products = useSelector((state) => state.allProducts.products);
  // const counter = useSelector((state) => state.counter.counter);
  console.log("Product:", counter);

  const renderProducts = products
    .filter((product) => {
      return product.category === itemCategory;
    })
    .map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <div className="product__card" key={id}>
          <Link>
            <div className="product__card-image">
              <img src={image} alt={title}></img>
            </div>

            <div className="product__card-container">
              <div className="product__card-title">{title}</div>
              <div className="product__card-container">
                <div className="product__card-container--price">
                  $ {price}
                  <div className="product__cart-container--price btn">
                    <button
                      className="btn"
                      key={id}
                      onClick={() => handlePlusCartClick(id)}
                    >
                      + <AiOutlineShoppingCart value={id} /> {counter}
                    </button>
                  </div>
                </div>

                <div className="product__card-container--category">
                  {category}
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });

  return <div className="products__container">{renderProducts}</div>;
}

export default Product;

// onClick={handleProductDetail} to={`/product/${id}`}
