import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Button.css";
function Button(props) {
  return (
    <nav>
      <ul className="button">
        <li>
          {/* <BrowserRouter> */}
          <a href={props.navTitle} className="button-primary">
            {props.navTitle}
          </a>
          {/* </BrowserRouter> */}
        </li>
      </ul>
    </nav>
  );
}

export default Button;
