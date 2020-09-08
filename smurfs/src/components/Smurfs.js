import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/smurfActions";
import Smurf from "./Smurf";

const Smurfs = (props) => {
  console.log(props);

  useEffect(() => {
    props.getSmurf();
  }, []);

  return (
    <>
      <h2>Smurfs!</h2>
      {props.smurfs.map((smurf) => {
        return <Smurf smurf={smurf} />;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapDispatchToProps = { getSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);
