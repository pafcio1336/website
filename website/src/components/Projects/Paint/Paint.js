import React, { useState } from "react";
import "../Paint/Paint.scss";
import ContainerPaint from "./ContainerPaint";

function Paint() {
  return (
    <div className="projects">
      <div className="paint">
        <ContainerPaint />
      </div>
    </div>
  );
}

export default Paint;
