import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button className = "opp btns" onClick={() => props.incoming(props.text)}>{props.text}{}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;
