import React from "react";
import "./Items.css";
import "./ColorsCard.css";

function ColorsCard({ color, setLineColor }) {
  const handleColor = (event) => {
    setLineColor((color = event.target.value));
    console.log(event.target.value);
  };
  return (
    <div
      onClick={(event) => handleColor(event)}
      className="color-icon"
      style={{ backgroundColor: `${color}` }}
    ></div>
  );
}

export default ColorsCard;
