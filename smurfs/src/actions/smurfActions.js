import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_ERROR = "FETCHING_SMURF_ERROR";

export const getSmurf = (smurf) => (dispatch) => {
  dispatch({ type: FETCHING_SMURF_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then((response) => {
      response.data.map((smurf) => {
        console.log(smurf);
        return smurf;
      });
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: smurf });
      console.log("API: ", response.data );
    })
    .catch((err) => {
      dispatch({ type: FETCHING_SMURF_ERROR, payload: "" });
      console.log(err);
    });
};
