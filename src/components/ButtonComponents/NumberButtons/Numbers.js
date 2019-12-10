import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';

function Numbers (props) {

  const [numberBtn] = useState(numbers);

  return (
<div className = "num-buttons">
      {numberBtn.map ((item, index) =>
        <NumberButton key={index} setDisplay={props.setDisplay} display={props.displayResult} text={item} />
      )}
</div>
  );
};

export default Numbers;
