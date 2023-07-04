import React, { useState } from "react";
import Items from "./Items";
import ColorWrapper from "./ColorWrapper";
import Brush from "./Brush";
import "../Tools/Tools.css";

function Tools({colorLine, lineWidth, bucket, eraser}) {

  
  return (
    <div className="tolls__wrapper">
      <Items bucket={bucket} eraser={eraser}/>
      <Brush lineWidth={lineWidth}/>
      <ColorWrapper colorLine={colorLine} />
    </div>
  );
}

export default Tools;
