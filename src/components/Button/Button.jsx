import React from "react";

const Button = props => (
  <button onClick={props.onClick} id={props.id}>
    {props.buttonName}
  </button>
);

export default Button;
