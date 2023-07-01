import React from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import "../ProjectsBtn/ProjectsBtn.css";

function ProjectsBtn({ direction }) {
  const [{ x, y }, scrollTo] = useWindowScroll();
  let btnDirection =
    direction === "prev" ? (
      <MdOutlineArrowBackIosNew />
    ) : (
      <MdOutlineArrowForwardIos />
    );

  // let body = document.body;
  let width = window.screen.availWidth - 700;

  console.log(width);
  return (
    <>
      <button
        onClick={
          direction === "prev"
            ? () => {
                width >= 0
                  ? scrollTo({ left: 0, top: 0, behavior: "smooth" })
                  : scrollTo({ left: width, top: 0, behavior: "smooth" });
              }
            : () => {
                width = 0
                  ? scrollTo({
                      left: width,
                      top: 0,
                      behavior: "smooth",
                    })
                  : scrollTo({ left: width, top: 0, behavior: "smooth" });
              }
        }
      >
        {btnDirection}
      </button>
    </>
  );
}
// className={
//   direction === "prev"
//     ? "Slider__button prevProject"
//     : "Slider__button nextProject"
// }
export default ProjectsBtn;
