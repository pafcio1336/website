import React from "react";
import "./Brush.scss";

function Brush({ lineWidth }) {
  return (
    <select
      onChange={(event) => lineWidth(event.target.value)}
      className="brush__detail"
    >
      <option value="5">Thin</option>
      <option value="10">Normal</option>
      <option value="15">Thick</option>
    </select>
  );
}

export default Brush;
