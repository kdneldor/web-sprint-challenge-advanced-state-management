import React, { Component } from "react";
import Name from "./Name"
import Height from "./Height"
import Age from "./Age"
import AddSmurf from "./AddSmurf"
import "./App.css";
class App extends Component {
  render() {
    console.log("Hello")
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Name />
        <Height />
        <Age />
        <AddSmurf />
      </div>
    );
  }
}

export default App;
