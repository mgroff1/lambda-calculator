import React from "react";
class myComponent extends React.Component {
    constructor() {
        super();
        }
    render() {
        return(
            <button onclick="this.handleClick().bind(this)">{this.text}</button>
        );
        }
    handleClick() {
        console.log(this); // this is myComponent
    }
}
const NumberButton = (props) => {

  let arr =[];

  return (
<>
    <button className = "num btns" onClick={() => props.setDisplay(props.text)} > {props.text}</button>
</>
  );
};

export default NumberButton;
