import React from "react";
import "./Items.scss";
import "./ColorsCard.scss";

function ColorsCard({ color, colorline }) {
  return (
    <div
      onClick={() => colorline(color)}
      className="color-icon"
      style={{ backgroundColor: `${color}` }}
    ></div>
  );
}

export default ColorsCard;
