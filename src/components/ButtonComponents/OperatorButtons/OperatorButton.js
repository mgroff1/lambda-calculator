import React from "react";

const OperatorButton = (props) => {
  return (
    <button onClick={() =>
      props.addOperator(props.text.value)
    } className="operator-button">
      {props.text.char}
    </button>
  );
};

export default OperatorButton;
