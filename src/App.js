import React, {useState} from "react";
import "./App.css";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import Operators from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'
import Display from './components/DisplayComponents/Display'

import Logo from "./components/DisplayComponents/Logo";

function App() {


  const [displayResult, setDisplay] = useState([]);

  return (
    <div className="container">
      <Logo />
      <div className="App">

        <Display display={displayResult}/>
        <div className = "btns-container">
          <Specials display={displayResult} setDisplay={setDisplay} />
        <Numbers display={displayResult} setDisplay={setDisplay} />
        <Operators display={displayResult} setDisplay={setDisplay} />

        </div>
      </div>
    </div>
  );
}

export default App;
