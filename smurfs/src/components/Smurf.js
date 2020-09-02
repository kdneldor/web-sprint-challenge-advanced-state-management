import React from "react";

const Smurf = ({ smurf }) => {
  return (
    <>
      <p>Smurf Name: {smurf.name}</p>
      <p>Smurf Height: {smurf.height}</p>
      <p>Smurf Age: {smurf.age}</p>
    </>
  );
};

export default Smurf;
