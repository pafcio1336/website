import React from "react";
import "./Brush.css";

function Brush() {
  return (
    <select
      // onChange={(event) => handleUtensil(event.target.value, "weight")}
      className="brush__detail"
    >
      <option>Thin</option>
      <option>Normal</option>
      <option>Thick</option>
    </select>
  );
}

export default Brush;
