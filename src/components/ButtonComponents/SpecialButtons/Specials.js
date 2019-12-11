import React from "react";
import SpecialButton from './SpecialButton.js';
import { specials } from '../../../data.js';

const Specials = (props) => {


  return (
    <div className="spec-buttons">
      {specials.map((special,index) =>
        <SpecialButton key={index} text={special} addSpecial={props.addSpecial}/>
      )}

    </div>
  );
};

export default Specials
