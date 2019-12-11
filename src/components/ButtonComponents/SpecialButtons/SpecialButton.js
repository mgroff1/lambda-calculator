import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className='btns spec' onClick={() => {
        props.addSpecial(props.text)
      }} className="spec btns">
        {props.text}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;
