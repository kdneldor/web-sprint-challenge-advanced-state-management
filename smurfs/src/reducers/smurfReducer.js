import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_ERROR,
} from "../actions/smurfActions";

const initialState = {
  name: "",
  age: "",
  height: "",
  id: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      // console.log("fetching a name");
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_SMURF_SUCCESS:
      return { ...state, name: action.payload, age: action.payload, height: action.payload, isFetching: false };
    case FETCHING_SMURF_ERROR:
      return { ...state, error: action.payload, isFetching: false };
      default:
        return state;
  }
};
