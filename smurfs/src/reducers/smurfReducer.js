import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_ERROR,
} from "../actions/smurfActions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: "",

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
      return { ...state, smurfs: [...state.smurfs, ...action.payload], isFetching: false };
    case FETCHING_SMURF_ERROR:
      return { ...state, error: action.payload, isFetching: false };
      default:
        return state;
  }
};
