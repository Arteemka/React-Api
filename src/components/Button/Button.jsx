import React from "react";

const Button = props => (
  <button onClick={props.gettingDate} className={props.className}>
    {props.findButton}
  </button>
);

export default Button;
