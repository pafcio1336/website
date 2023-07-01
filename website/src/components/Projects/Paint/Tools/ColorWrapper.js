import React from "react";
import "../Tools/ColorWrapper.css";
import ColorsCard from "./ColorsCard";

const colorArray = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "black",
  "white",
  "brown",
  "purple",
  "grey",
  "orange",
];

function ColorWrapper({ setLineColor }) {
  const colorGrid = colorArray.map((color) => {
    return (
      <ColorsCard
        setLineColor={setLineColor}
        key={color}
        color={color}
        style={{
          backgroundColor: `${color}`,
        }}
      />
    );
  });
  return <div className="colors">{colorGrid}</div>;
}

export default ColorWrapper;
