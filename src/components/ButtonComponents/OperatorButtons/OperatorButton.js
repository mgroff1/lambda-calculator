import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="opp btns" onClick={() =>
      props.addOperator(props.text.value)
    } className="opp btns">
      {props.text.char}
    </button>
  );
};

export default OperatorButton;
