import React from "react";
import "./Projects.scss";
import Slider from "./Slider/Slider";
import ProjectsBtn from "./ProjectsBtn/ProjectsBtn";
import Paint from "./Paint/Paint";
import Kalkulator from "./Kalkulator/Kalkulator";
import DotBtn from "./ProjectsBtn/DotBtn";

function Projects() {
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
