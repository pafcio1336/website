import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="section__home">
      <div className="section__home-wrapper">
        <div className="section__home-welcome section__home-welcome--border">
          <h2 className="section__home-welcome--main">Hi there !!!</h2>
          <h1 className="section__home-welcome--second">
            New React Programist on the market!
          </h1>
          <p className="section__home-welcome--paragraph">
            I invite you to browse my new personal webpage presenting some
            skills in the field of JavaScript, React and a bit sense of styling.
            Ejoy!!!
          </p>
        </div>
        <div className="section__home-photoContainer">
          <div className="section__home-photo">
            <object src="../../iamge/zdjecie2.jpg" alt="zdjecie2"></object>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
