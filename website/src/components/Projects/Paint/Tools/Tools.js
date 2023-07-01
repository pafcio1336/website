import React, { useState } from "react";
import Items from "./Items";
import ColorWrapper from "./ColorWrapper";
import Brush from "./Brush";
import "../Tools/Tools.css";

function Tools({ setLineColor }) {
  return (
    <div className="tolls__wrapper">
      <Items />
      <Brush />
      <ColorWrapper setLineColor={setLineColor} />
    </div>
  );
}

export default Tools;
