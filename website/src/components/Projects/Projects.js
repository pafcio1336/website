import React, { useState, useRef } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import "./Projects.css";
import Slider from "./Slider/Slider";
// import SliderBtn from "./Slider/SliderBtn/SliderBtn";
import ProjectsBtn from "./ProjectsBtn/ProjectsBtn";
import Paint from "./Paint/Paint";
import Kalkulator from "./Kalkulator/Kalkulator";
import DotBtn from "./ProjectsBtn/DotBtn";

function Projects() {
  const [{ x, y }, scrollTo] = useWindowScroll();

  return (
    <>
      <div className="container__projects">
        <div className="container__projects go__left">
          <ProjectsBtn direction="prev" />
        </div>
        <div className="container__projects go__right">
          <ProjectsBtn direction="next" />
        </div>
        <div className="container__projects bottom">
          <DotBtn />
        </div>

        <Paint />
        <Slider />
        <Kalkulator />
      </div>
    </>
  );
}

export default Projects;
