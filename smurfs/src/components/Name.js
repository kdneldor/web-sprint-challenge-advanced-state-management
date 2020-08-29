import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getName } from "../actions/smurfActions";

const Name = ({ getName, name, isFetching }) => {
  // Hit the API after the component mounts
  useEffect(() => {
    getName();
  }, [getName]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Smurf Name: {name} </h2>
    </>
  );
};

const mapStateToProps = (state) => {
  return { name: state.name, isFetching: state.isFetching };
};

const mapDispatchToProps = { getName };

export default connect(mapStateToProps, mapDispatchToProps)(Name);