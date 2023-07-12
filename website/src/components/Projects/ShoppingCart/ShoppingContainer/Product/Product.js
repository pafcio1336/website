import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Product.scss";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { increment } from "../../redux/actions/ProductsActions";

function Product({ itemCategory, handleProductDetail }) {
  const products = useSelector((state) => state.allProducts.products);
  const counterObj = useSelector((state) => state.allProducts.counter.value);
  const dispatch = useDispatch();
  // console.log(counter);
  const counterValue = counterObj ? counterObj.counter : null;
  const handlePulsCartClick = (event) => {
    event.preventDefault();

    dispatch(increment(counterValue));
  };

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
                    <button className="btn" onClick={handlePulsCartClick}>
                      + <AiOutlineShoppingCart /> {counterValue}
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
