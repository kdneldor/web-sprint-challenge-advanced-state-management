import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getHeight } from "../actions/smurfActions";

const Height = ({ getHeight, height, isFetching }) => {
  // Hit the API after the component mounts
  useEffect(() => {
    getHeight();
  }, [getHeight]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Smurf Height: {height} </h2>
    </>
  );
};

const mapStateToProps = (state) => {
  return { height: state.height, isFetching: state.isFetching };
};

const mapDispatchToProps = { getHeight };

export default connect(mapStateToProps, mapDispatchToProps)(Height);