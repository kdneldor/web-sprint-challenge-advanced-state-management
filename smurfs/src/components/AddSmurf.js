import React from "react";
import axios from "axios";

class AddSmurf extends React.Component {
  
  state = {
    smurf: { name: "", height: "", age: "" },
  };

  handleChanges = (e) => {
    e.preventDefault();
    this.setState({
      smurf: { ...this.state.smurf, [e.target.name]: e.target.value },
    });
  };

  // newSmurf = (smurf) => {
  //   const newSmurf = {
  //     smurf: smurf,
  //   };
  //   this.setState({
  //     smurfs: [{ ...this.state.smurfs, newSmurf }],
  //   });
  // };

  onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3333/smurfs`, this.state.smurf)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    this.setState({ smurf: { name: "", height: "", age: "" } });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Smurf Name"
          value={this.state.smurf.name}
          onChange={this.handleChanges}
        ></input>
        <input
          type="text"
          name="height"
          placeholder="Enter Smurf Height"
          value={this.state.smurf.height}
          onChange={this.handleChanges}
        ></input>
        <input
          type="text"
          name="age"
          placeholder="Enter Smurf Age"
          value={this.state.smurf.age}
          onChange={this.handleChanges}
        ></input>
        <button>Add Smurf</button>
      </form>
    );
  }
}

export default AddSmurf;
