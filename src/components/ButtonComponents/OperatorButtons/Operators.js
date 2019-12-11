import React from "react";
import OperatorButton from './OperatorButton.js';
import { operators } from '../../../data.js';

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="opp-buttons">
      {operators.map((operator,index) =>
        <OperatorButton key={index} text={operator} addOperator={props.addOperator} />
      )}

    </div>
  );
};

export default Operators;
