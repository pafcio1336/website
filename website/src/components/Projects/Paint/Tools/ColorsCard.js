import React from "react";
import "./Items.css";
import "./ColorsCard.css";

function ColorsCard({color, colorLine}) {
  return (
    <div
      onClick={() => colorLine(color)}
      className="color-icon"
      style={{ backgroundColor: `${color}` }}
    ></div>
  );
}

export default ColorsCard;
