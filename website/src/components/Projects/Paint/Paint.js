import React, { useState } from "react";
import "../Paint/Paint.css";
import Tools from "./Tools/Tools";
import Brush from "./Tools/Brush";
import ContainerPaint from "./ContainerPaint";

function Paint() {
  // const [utensil, SetUtensil] = useState({
  //   tool: "brush",
  //   weight: "normal",
  //   color: "black",
  // });

  // const handleUtensil = (updateItem, holder) => {
  //   const newUtensil = { ...utensil };
  //   if (updateItem === "eraser") {
  //     newUtensil["color"] = "white";
  //     newUtensil["tool"] = "brush";
  //     SetUtensil(newUtensil);
  //   } else {
  //     newUtensil[holder] = updateItem.toLowerCase();
  //     SetUtensil(newUtensil);
  //   }

  //   console.log(newUtensil);

  return (
    <div className="projects">
      <div className="paint">
        <ContainerPaint />
      </div>
    </div>
  );
}

export default Paint;
