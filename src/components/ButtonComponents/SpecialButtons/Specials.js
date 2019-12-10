import React, {useState} from "react";
import {specials} from '../../../data'
import SpecialButton from './SpecialButton'

const Specials = () => {

  const [specialBtn] = useState(specials)
  return (
    <div className = "spec-buttons">
      {specialBtn.map((item, index) =>
        <SpecialButton key={index} text={item} />
      )}

    </div>
  );
};

export default Specials;
