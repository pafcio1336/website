import React from "react";
import "./Skills.css";
import Typewriter from "typewriter-effect";
function Skills() {
  return (
    <div className="section__skills">
      <div className="container">
        <div className="skill__box">
          <span className="title">HTML</span>
          <div className="skill__bar ">
            <span className="skill__percentage html">
              <span className="tooltip">95%</span>
            </span>
          </div>
        </div>
        <div className="skill__box">
          <span className="title">CSS/SCSS</span>
          <div className="skill__bar ">
            <span className="skill__percentage css">
              <span className="tooltip">70%</span>
            </span>
          </div>
        </div>
        <div className="skill__box">
          <span className="title">JavaScript</span>
          <div className="skill__bar ">
            <span className="skill__percentage javascript">
              <span className="tooltip">60%</span>
            </span>
          </div>
        </div>
        <div className="skill__box">
          <span className="title">React/Redux</span>
          <div className="skill__bar ">
            <span className="skill__percentage react">
              <span className="tooltip">75%</span>
            </span>
          </div>
        </div>
        <div className="skill__box">
          <span className="title">Git</span>
          <div className="skill__bar ">
            <span className="skill__percentage git">
              <span className="tooltip">30%</span>
            </span>
          </div>
        </div>
      </div>
      <div className="section__skills paragraph paragraph-typewriter">
        <Typewriter
          options={{
            delay: 15,
            deleteSpeed: 15,
            loop: true,
            pauseFor: 3000,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Where does it come from? Contrary to popular belief, Lorem Ipsum is notsimply random text. It has roots in a piece of classical Latin Where does it come from? Contrary to popular belief, Lorem Ipsum is notsimply random text. It has roots in a piece of classical Latin Where does it come from? Contrary to popular belief, Lorem Ipsum is notsimply random text. It has roots in a piece of classical Latin"
              )

              .pauseFor(10000)
              .deleteAll(15)
              .typeString(
                "Where does it come from? Contrary to popular belief, Lorem Ipsum is notsimply random text. It has roots in a piece of classical Latin Where does it come from? Contrary to popular belief, Lorem Ipsum is notsimply random text. It has roots in a piece of classical Latin Where does it come from? Contrary to popular belief, Lorem Ipsum is notsimply random text. It has roots in a piece of classical Latin"
              )
              .start();
          }}
        />
      </div>
    </div>
  );
}

export default Skills;
