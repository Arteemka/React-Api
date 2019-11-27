import React from "react";

const Button = props => (
  <button onClick={props.gettingDate} className={props.className}>
    {props.buttonName}
  </button>
);

export default Button;
