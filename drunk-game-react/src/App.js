import React, { Component } from "react";
import "./App.css";
import Selector from "./Selector.js";

class App extends Component {

  state = {
    GameUpText: "Ahahahah!! Нуже, выбирай!Не бойся"
  };

  StateSet = (MassValues) => {
    this.setState(MassValues)
  }

  StateGet = (StateName) => {
    return(this.state[StateName]);
  };

  render() {

    return (
      <div className="Main">
        <h1>Привет Друг, давай сыграем с тобой в игру!</h1>
        <p>{this.state.GameUpText}</p>
        <br />
        <Selector StateSet={this.StateSet} StateGet={this.StateGet}/>
      </div>
    );
  }
}

export default App;
