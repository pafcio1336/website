// import React, { useState } from "react";
// import "./NavBar.scss";
// import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
// import { useSelector, useDispatch } from "react-redux";
// import Product from "../Product/Product";
// import ModalCart from "../NavBar/ModalCart/ModalCart";

// function NavBar({ counter }) {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModalCart = () => {
//     setModalIsOpen(true);
//     console.log("modal is open");
//   };

//   const closeModalCart = () => {
//     setModalIsOpen(false);
//     console.log("modal is close");
//   };
//   return (
//     <div className="navbar">
//       <div className="navbar__cart" onClick={openModalCart}>
//         <ModalCart>
//           <AiOutlineShoppingCart />
//         </ModalCart>
//       </div>

//       <span className="counter">{counter}</span>
//     </div>
//   );
// }

// export default NavBar;
