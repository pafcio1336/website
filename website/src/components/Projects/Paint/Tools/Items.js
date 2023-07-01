import React from "react";
import "../Tools/Items.css";

function Items() {
  return (
    <div>
      <div className="items">
        <button
          name="brush"
          // onClick={(event) => handleUtensil(event.target.name, "tool")}
        >
          🖌
        </button>

        <button
          name="bucket"
          // onClick={(event) => handleUtensil(event.target.name, "tool")}
        >
          🗃
        </button>
        <button
          name="eraser"
          // onClick={(event) => handleUtensil(event.target.name, "tool")}
        >
          {/* ❌ */}X
        </button>
      </div>
    </div>
  );
}

export default Items;
