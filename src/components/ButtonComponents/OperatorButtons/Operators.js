import React from "react";
import OperatorButton from './OperatorButton.js';
import { operators } from '../../../data.js';

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="operator-div">
      {operators.map(operator =>
        <OperatorButton text={operator} addOperator={props.addOperator} />
      )}

    </div>
  );
};

export default Operators;
