// import React, { useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import "./ProductDetail.scss";
// import Product from "../Product/Product";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setLoading,
//   selectedProducts,
//   removeSelectedProducts,
// } from "../../redux/actions/ProductsActions";
// import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";

// function ProductDetail() {
//   const { productId } = useParams();
//   const product = useSelector((state) => state.allProducts.products);
//   const { image, title, price, category, description } = product;

//   const loading = useSelector((state) => state.loading);

//   const dispatch = useDispatch();
//   console.log(productId);

//   const fetchProductDetail = async (id) => {
//     dispatch(setLoading(true));
//     console.log(id);

//     try {
//       const response = await axios.get(
//         `https://fakestoreapi.com/products/${id}`
//       );
//       console.log("API Response:", response.data); // Log the API response
//       dispatch(selectedProducts(response.data));
//       console.log(response.data);
//     } catch (error) {
//       console.log("Error:", error);
//     }

//     dispatch(setLoading(false));
//   };
//   // const response = await axios
//   //   .get(`https://fakestoreapi.com/products/${id}`)
//   //   .catch((error) => {
//   //     console.log("Error", error);
//   //   });

//   // dispatch(selectedProducts(response.data));
//   // console.log(response.data);
//   // dispatch(setLoading(false));
//   // ****************************************

//   // const response = await axios
//   //   .get(`https://fakestoreapi.com/products/${id}`)
//   //   .catch((error) => {
//   //     console.log("Error", error);
//   //   });

//   // dispatch(selectedProducts(response.data));
//   // console.log(response.data);
//   //};

//   useEffect(() => {
//     if (productId && productId !== "") fetchProductDetail(productId);
//     return () => {
//       dispatch(removeSelectedProducts());
//     };
//   }, [productId]);
//   return (
//     <div className="product__detail">
//       {/* {Object.keys(product).length === 0 ? (
//         <div className="product__detail-loading">...Loading</div>*/}
//       {loading ? ( // Wyświetlenie "Loading" w trakcie oczekiwania na dane
//         <div className="product__detail-loading">...Loading</div>
//       ) : (
//         <div className="product__detail-container">
//           <div className="product__detail-image">{image}</div>
//           <div className="product__datail-specyfication">
//             <div className="product__detail-header">{title}</div>
//             <div className="product__detail-price">{price}</div>
//             <div className="product__detail-category">{category}</div>
//             <div className="Poduct__detail-description">{description}</div>
//             <button className="product__detail-cart"></button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductDetail;
