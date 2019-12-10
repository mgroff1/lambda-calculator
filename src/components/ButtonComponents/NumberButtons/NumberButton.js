import React from "react";

const NumberButton = (props) => {
  return (

    <button className = "num btns" onClick={() => props.setDisplay(props.text)} >{props.text}</button>

  );
};

export default NumberButton;
