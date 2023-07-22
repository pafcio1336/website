import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../../redux/actions/ProductsActions";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";

function ProductDetail() {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;

  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((error) => {
        console.log("Error", error);
      });

    dispatch(selectedProducts(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);
  return (
    <div className="product__detail">
      {Object.keys(product).length === 0 ? (
        <div className="product__detail-loading">...Loading</div>
      ) : (
        <div className="product__detail-container">
          <div className="product__detail-image">{image}</div>
          <div className="product__datail-specyfication">
            <div className="product__detail-header">{title}</div>
            <div className="product__detail-price">{price}</div>
            <div className="product__detail-category">{category}</div>
            <div className="Poduct__detail-description">{description}</div>
            <button className="product__detail-cart"></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
