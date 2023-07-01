import React from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

function SliderBtn({ direction, moveSlide }) {
  let btnDirection =
    direction === "prev" ? (
      <MdOutlineArrowBackIosNew />
    ) : (
      <MdOutlineArrowForwardIos />
    );

  return (
    <button
      onClick={moveSlide}
      className={
        direction === "prev" ? "Slider__button prev" : "Slider__button next"
      }
    >
      {btnDirection}
    </button>
  );
}

export default SliderBtn;
