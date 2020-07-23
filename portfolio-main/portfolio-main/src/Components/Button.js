import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={`button ${props.className}`}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
      href={props.href}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
