import React from "react";

const NumberButton = (props) => {

  return (

    <>
      <button className = {`props.text` != 0 ? ` btns num`:`btns num zero`} onClick={() => {
        props.addNumber(props.text)
      }} >
        {props.text}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;
