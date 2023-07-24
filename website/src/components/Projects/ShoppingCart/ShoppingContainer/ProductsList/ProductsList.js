// import React, { useEffect } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import "./ProductsList.scss";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setProducts } from "../../redux/actions/ProductsActions";

// function ProductList({
//   handleProductJewelery,
//   handleProductWomen,
//   handleProductMen,
//   handleProductElectro,
// }) {
//   const products = useSelector((state) => state.allProducts.products);

//   const dispatch = useDispatch();

//   const fetchProducts = async () => {
//     const response = await axios
//       .get("https://fakestoreapi.com/products")
//       .catch((error) => {
//         console.log("Error", error);
//       });
//     dispatch(setProducts(response.data));
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="products__list">
//       <Link onClick={handleProductJewelery}>Jewelery</Link>
//       <Link onClick={handleProductWomen}>Women's cloths</Link>
//       <Link onClick={handleProductMen}>Men's cloths</Link>
//       <Link onClick={handleProductElectro}>Electronics</Link>
//     </div>
//   );
// }

// export default ProductList;
