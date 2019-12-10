import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton'


function Operators(props){
  const [operatorBtn] = useState(operators);

  return (
    <div className = "opp-buttons">
      {operatorBtn.map((item, ...index) =>
        <OperatorButton key={index} setDisplay={props.setDisplay} display={props.displayResult} text={item.char} />
      )}

    </div>
  );
};

export default Operators;
