import React, {useState} from "react";
import "./App.css";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import Operators from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'
import Display from './components/DisplayComponents/Display'

import Logo from "./components/DisplayComponents/Logo";

function App() {


  const [display, incoming] = useState([]);

  return (
    <div className="container">
      <Logo />
      <div className="App">

        <Display display={display}/>
        <div className="button-container">
        <div className = "button-group">
          <Specials display={display} incoming={incoming}></Specials>
      <Numbers display={display} incoming={incoming}></Numbers>
          </div>

  <Operators display={display} incoming={incoming}></Operators>
</div>
      </div>
    </div>
  );
}

export default App;
