import React from "react";
import axios from "axios";

class AddSmurf extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      height: "",
      age: "",
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleHeight = (e) => {
    this.setState({
      height: e.target.value,
    });
  };

  handleAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  newSmurf = (smurf) => {
    const newSmurf = {
      name: smurf,
      height: smurf,
      age: smurf,
    };
    this.setState({
      name: [...this.state.name, newSmurf],
      height: [...this.state.height, newSmurf],
      age: [...this.state.age, newSmurf],
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3333/smurfs`, this.newSmurf());
    console.log(this.state)
    this.setState({ name: "", height: "", age: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Smurf Name"
          value={this.state.name}
          onChange={this.handleName}
        ></input>
        <input
          type="text"
          name="height"
          placeholder="Enter Smurf Height"
          value={this.state.height}
          onChange={this.handleHeight}
        ></input>
        <input
          type="text"
          name="age"
          placeholder="Enter Smurf Age"
          value={this.state.age}
          onChange={this.handleAge}
        ></input>
        <button>Add Smurf</button>
      </form>
    );
  }
}

export default AddSmurf;
