import axios from "axios";


export const FETCHING_NAME_START = "FETCHING_NAME_START";
export const FETCHING_NAME_SUCCESS = "FETCHING_NAME_SUCCESS";
export const FETCHING_NAME_ERROR = "FETCHING_NAME_ERROR";
export const FETCHING_AGE_START = "FETCHING_AGE_START";
export const FETCHING_AGE_SUCCESS = "FETCHING_AGE_SUCCESS";
export const FETCHING_AGE_ERROR = "FETCHING_AGE_ERROR";
export const FETCHING_HEIGHT_START = "FETCHING_HEIGHT_START";
export const FETCHING_HEIGHT_SUCCESS = "FETCHING_HEIGHT_SUCCESS";
export const FETCHING_HEIGHT_ERROR = "FETCHING_HEIGHT_ERROR";

export const getName = () => (dispatch) => {
    // console.log("getting smurf");
    dispatch({type: FETCHING_NAME_START});
    axios
    .get(`http://localhost:3333/smurfs`)
    .then((res) => {
        dispatch({type: FETCHING_NAME_SUCCESS, payload: res.data[0].name})
        console.log("API: ", res.data[0].name)
    })
    .catch((err) => {
        dispatch({type: FETCHING_NAME_ERROR, payload: ""})
        console.log(err)
    })
}

export const getAge = () => (dispatch) => {
    // console.log("getting smurf");
    dispatch({type: FETCHING_AGE_START});
    axios
    .get(`http://localhost:3333/smurfs`)
    .then((res) => {
        dispatch({type: FETCHING_AGE_SUCCESS, payload: res.data[0].age})
        console.log("API: ", res.data[0].age)
    })
    .catch((err) => {
        dispatch({type: FETCHING_NAME_ERROR, payload: ""})
        console.log(err)
    })
}

export const getHeight = () => (dispatch) => {
    // console.log("getting smurf");
    dispatch({type: FETCHING_HEIGHT_START});
    axios
    .get(`http://localhost:3333/smurfs`)
    .then((res) => {
        dispatch({type: FETCHING_HEIGHT_SUCCESS, payload: res.data[0].height})
        console.log("API: ", res.data[0].height)
    })
    .catch((err) => {
        dispatch({type: FETCHING_NAME_ERROR, payload: ""})
        console.log(err)
    })
}