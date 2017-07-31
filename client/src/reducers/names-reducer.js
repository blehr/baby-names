import {
  SET_RESULTS
} from "../actions/types";

const initialState = {
  results: []
}


export default function(state = initialState, action) {
  switch(action.type) {
    case SET_RESULTS:
      return { ...state, results: action.payload };
  default:
    return state;
  }
}