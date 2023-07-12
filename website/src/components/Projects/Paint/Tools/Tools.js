import React from "react";
import Items from "./Items";
import ColorWrapper from "./ColorWrapper";
import Brush from "./Brush";
import "../Tools/Tools.scss";

function Tools({ colorline, lineWidth, bucket, eraser }) {
  return (
    <div className="tolls__wrapper">
      <Items bucket={bucket} eraser={eraser} colorline={colorline} />
      <Brush lineWidth={lineWidth} />
      <ColorWrapper colorline={colorline} />
    </div>
  );
}

export default Tools;
