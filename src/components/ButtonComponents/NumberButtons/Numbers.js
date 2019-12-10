import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';

function Numbers (props) {

  const [numberBtn] = useState(numbers);

  return (
<div className = "num-buttons">
      {numberBtn.map ((item, ...index) =>
        <NumberButton key={index} incoming={props.incoming} display={props.display} text={item} />
      )}
</div>
  );
};

export default Numbers;
