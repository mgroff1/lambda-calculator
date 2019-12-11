import React from "react";
import {oppStyles} from "./oppStyle.js";
const OperatorButton = (props) => {
  return (
    <button style={props.text.char === '=' ? oppStyles.equal:oppStyles.btns} onClick={() =>
      props.addOperator(props.text.value)
    }>
      {props.text.char}
    </button>
  );
};

export default OperatorButton;
