import React, { useEffect, useState, useRef } from "react";
import SliderBtn from "./SliderBtn/SliderBtn";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Slider.css";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [res, setRes] = useState([]);
  const [text, setText] = useState("cars");

  const nextSlide = () => {
    if (slideIndex !== res.results.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === res.results.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(res.results.length);
    }
  };

  const handleInput = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setText((prev) => ({ ...prev, text: event.target.value }));

    console.log(text);
  };

  useEffect(() => {
    setText(text);
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=FcIU-p3BqCRnIJ15OXdIqqfC7tv0psYXmYTyLKA9vVQ`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setRes(result);
          console.log(text);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [text]);

  return (
    <div className="projects">
      <form className="inputForm" value={text}>
        <input
          type="text"
          required
          onChange={handleInput}
          placeholder="Type your request"
        ></input>
        <button onClick={handleSubmit}>find</button>
      </form>
      <div className="container__slider">
        {res.results?.map((img, index) => {
          return (
            <div
              className={
                slideIndex === index + 1 ? "slider active-anim" : "slider"
              }
              key={img.id}
            >
              <LazyLoadImage
                src={img.urls.small}
                alt={img.alt_description}
                loading="lazy"
              ></LazyLoadImage>
            </div>
          );
        })}
        <SliderBtn moveSlide={prevSlide} direction={"prev"} />
        <SliderBtn moveSlide={nextSlide} direction={"next"} />
      </div>
    </div>
  );
}

export default Slider;
