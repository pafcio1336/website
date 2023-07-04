import React from "react";
import "../Tools/Items.css";

function Items({bucket, eraser}) {
  return (
    <div>
      <div className="items">
        <button
          name="brush" 
        >
          🖌
        </button>
        <button
          name="bucket"
          onClick={() => bucket()}
        >
          🗃
        </button>
        <button
          name="eraser"
          onClick={eraser}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Items;
