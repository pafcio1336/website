import React from "react";
import "../Tools/Items.scss";

function Items({ bucket, eraser, colorline }) {
  return (
    <div>
      <div className="items">
        {/* <button name="brush">🖌</button> */}
        <button
          name="bucket"
          colorline={colorline}
          onClick={() => bucket(colorline)}
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
