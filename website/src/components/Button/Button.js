import React from "react";
import "./Button.scss";
function Button(props) {
  return (
    <nav>
      <ul className="button">
        <li>
          <a href={props.navTitle} className="button-primary">
            {props.navTitle}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Button;
