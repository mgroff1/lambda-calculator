import React from "react";


const SpecialButton = (props) => {
  return (
    <>
      <button onClick={() => {
        props.addSpecial(props.text)
      }} className="special-button">
        {props.text}
      </button>

    </>
  );
};

export default SpecialButton;
