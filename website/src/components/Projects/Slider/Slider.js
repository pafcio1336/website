import React, { useEffect, useState, useRef } from "react";
import SliderBtn from "./SliderBtn/SliderBtn";
import "./Slider.css";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [res, setRes] = useState([]);
  const [text, setText] = useState("cars");
  const [inputValue, setInputValue] = useState("");
  const [focusInput, setFocusInput] = useState(false)


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

  const handleFocus = () => {
    if(focusInput) setInputValue("")    
  }

  const handleInput = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(inputValue);
    setInputValue("");
    setFocusInput(false);
  };

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=FcIU-p3BqCRnIJ15OXdIqqfC7tv0psYXmYTyLKA9vVQ`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setRes(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [text]);

  return (
    <div className="projects">
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          required
          onFocus={handleFocus}
          onChange={handleInput}
          placeholder="Type your request"
        ></input>
        <button type="submit">find</button>
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
              <img      src={img.urls.small}
                alt={img.alt_description}
                loading="lazy">
              </img>
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
