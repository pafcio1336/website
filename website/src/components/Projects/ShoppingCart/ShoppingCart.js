import React, { useEffect } from "react";
import ShoppingContainer from "./ShoppingContainer/ShoppingContainer";
import "./ShoppingCart.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/actions/ProductsActions";

function ShoppingCart() {
  const products = useSelector((state) => state.allProducts.products);
  const id = products.length > 0 ? products[0].id : null;
  const counter = useSelector(
    (state) => state.counter.items.find((item) => item.id === id)?.counter
  );
  const dispatch = useDispatch();

  const handlePlusCartClick = (id) => {
    dispatch(increment(id));
    console.log(counter);
  };

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div className="projects">
      <div className="box-2">
        <ShoppingContainer
          handlePlusCartClick={handlePlusCartClick}
          counter={counter}
          products={products}
          id={id}
        />
      </div>
    </div>
  );
}

export default ShoppingCart;

// const handlePlusCartClick = (id) => {
//   // event.preventDefault();

//   dispatch(increment(el));
//   console.log("counter:", counter);
//   console.log("id:", el);
//   // console.log("id:", el[id].id - 1);
//   console.log(id);
// };

// console.log("counter:", counter);
// console.log("id:", el);
// // console.log("id:", el[id].id - 1);
// console.log(id);
