import React from "react";
import "./Skills.scss";
import Typewriter from "typewriter-effect";
function Skills() {
  return (
    <div className="section__skills">
      {/* <div className="section__skills wrapper"> */}
      <div className="section__skill container">
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
                `My name is Paweł and I am a young programmer with a wide range of interests. I specialize in creating web applications, with a focus on front-end development. I love crafting elegant user interfaces that are both aesthetically pleasing and intuitive to use. I am passionate about web technologies and constantly expanding my knowledge of new frameworks and tools.<br><br> My experience includes working with programming languages such as <span style="color: #EFD81D")">JavaScript</span>, <span style="color: #E96228")">HTML</span>, <span style="color: #E96228">CSS</span>, <span style="color: #C76494">SASS</span>, as well as frameworks like <span style="color: #5ED3F3">React</span> and <span style="color: #7CB701">Node.js</span>. In addition, I have experience using smaller libraries such as Axios, Tailwind, Formik, and many others. I find great satisfaction in solving problems and delivering solutions.<br><br> Apart from programming, I have an interest in astronomical observations and enjoy expanding my knowledge in the field of astrophysics. I am open to new challenges and always ready to learn and develop my skills.<br><br> If you have any questions, collaboration proposals, or simply want to discuss a project, feel free to get in touch. I look forward to meeting fellow programming enthusiasts and creating innovative solutions together.`
              )

              .pauseFor(5000)
              .deleteAll(1)
              .typeString(
                `My name is Paweł and I am a young programmer with a wide range of interests. I specialize in creating web applications, with a focus on front-end development. I love crafting elegant user interfaces that are both aesthetically pleasing and intuitive to use. I am passionate about web technologies and constantly expanding my knowledge of new frameworks and tools.<br><br> My experience includes working with programming languages such as <span style="color: #EFD81D")">JavaScript</span>, <span style="color: #E96228")">HTML</span>, <span style="color: #E96228">CSS</span>, <span style="color: #C76494">SASS</span>, as well as frameworks like <span style="color: #5ED3F3">React</span> and <span style="color: #7CB701">Node.js</span>. In addition, I have experience using smaller libraries such as Axios, Tailwind, Formik, and many others. I find great satisfaction in solving problems and delivering solutions.<br><br> Apart from programming, I have an interest in astronomical observations and enjoy expanding my knowledge in the field of astrophysics. I am open to new challenges and always ready to learn and develop my skills.<br><br> If you have any questions, collaboration proposals, or simply want to discuss a project, feel free to get in touch. I look forward to meeting fellow programming enthusiasts and creating innovative solutions together.`
              )
              .pauseFor(5000)
              .start();
          }}
        />
      </div>
    </div>
    // </div>
  );
}

export default Skills;
