import React from "react";
import "../Tools/Items.css";

function Items({ bucket, eraser, colorLine }) {
  return (
    <div>
      <div className="items">
        {/* <button name="brush">🖌</button> */}
        <button
          name="bucket"
          colorLine={colorLine}
          onClick={() => bucket(colorLine)}
        >
          🗃
        </button>
        <button name="eraser" onClick={eraser}>
          X
        </button>
      </div>
    </div>
  );
}

export default Items;
