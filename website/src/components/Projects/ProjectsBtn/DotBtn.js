import React from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import "./DotBtn.scss";

// function DotBtn() {
//   const [{ x, y }, scrollTo] = useWindowScroll();
//   let width = window.screen.availWidth;
//   return (
//     <div className="button__dot">
//       <button
//         className="dot"
//         onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })}
//       ></button>
//       <button
//         className="dot"
//         onClick={() => scrollTo({ left: width, top: 0, behavior: "smooth" })}
//       ></button>
//       <button
//         className="dot"
//         onClick={() =>
//           scrollTo({ left: width * 2, top: 0, behavior: "smooth" })
//         }
//       ></button>
//     </div>
//   );
// }
// export default DotBtn;

function DotBtn() {
  const width = window.screen.availWidth;

  // Funkcja do przewijania do konkretnej pozycji
  const scrollToPosition = (leftPosition) => {
    window.scrollTo({ left: leftPosition, top: 0, behavior: "smooth" });
  };

  return (
    <div className="button__dot">
      <button className="dot" onClick={() => scrollToPosition(-100)}></button>
      <button className="dot" onClick={() => scrollToPosition(width)}></button>
      <button
        className="dot"
        onClick={() => scrollToPosition(width * 2)}
      ></button>
    </div>
  );
}

export default DotBtn;
