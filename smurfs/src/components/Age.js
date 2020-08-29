import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAge } from "../actions/smurfActions";

const Age = ({ getAge, age, isFetching }) => {
  // Hit the API after the component mounts
  useEffect(() => {
    getAge();
  }, [getAge]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Smurf Age: {age} </h2>
    </>
  );
};

const mapStateToProps = (state) => {
  return { age: state.age, isFetching: state.isFetching };
};

const mapDispatchToProps = { getAge };

export default connect(mapStateToProps, mapDispatchToProps)(Age);