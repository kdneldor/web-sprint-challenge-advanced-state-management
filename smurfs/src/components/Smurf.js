import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/smurfActions";

const Smurf = ({ getSmurf, name, isFetching }) => {
  // Hit the API after the component mounts
  console.log();
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Smurfs!</h2>
      <p>Smurf Name: </p>
      <p>Smurf Height: </p>
      <p>Smurf Age: </p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    height: state.height,
    age: state.age,
    isFetching: state.isFetching,
  };
};

const mapDispatchToProps = { getSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(Smurf);
