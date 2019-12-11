import React, { useState } from "react";
import NumberButton from './NumberButton.js';
import { numbers } from '../../../data.js';

const Numbers = (props) => {

  const [numberState, setNumberState] = useState(numbers);
  return (
    <div className='num-buttons'>
      {numberState.map((number,index) => {
        return (
          <NumberButton key={index} text={number} addNumber={props.addNumber} />
        )
      })}

    </div>
  );
};

export default Numbers;
