import {
  FETCHING_NAME_START,
  FETCHING_NAME_SUCCESS,
  FETCHING_NAME_ERROR,
  FETCHING_AGE_START,
  FETCHING_AGE_SUCCESS,
  FETCHING_AGE_ERROR,
  FETCHING_HEIGHT_START,
  FETCHING_HEIGHT_SUCCESS,
  FETCHING_HEIGHT_ERROR,
} from "../actions/smurfActions";

const initialState = {
  name: "",
  age: "",
  height: "",
  id: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NAME_START:
      console.log("fetching a name");
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_NAME_SUCCESS:
      return { ...state, name: action.payload, isFetching: false };
    case FETCHING_NAME_ERROR:
      return { ...state, error: action.payload, isFetching: false };
    case FETCHING_AGE_START:
      console.log("fetching a age");
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_AGE_SUCCESS:
      return { ...state, age: action.payload, isFetching: false };
    case FETCHING_AGE_ERROR:
      return { ...state, error: action.payload, isFetching: false };
    case FETCHING_HEIGHT_START:
      console.log("fetching a height");
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_HEIGHT_SUCCESS:
      return { ...state, height: action.payload, isFetching: false };
    case FETCHING_HEIGHT_ERROR:
      return { ...state, error: action.payload, isFetching: false };
      default:
        return state;
  }
};
