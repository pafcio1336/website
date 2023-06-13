import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <div>
      <button className="button-primary">{props.navTitle}</button>
    </div>
  );
}

export default Button;
