import {
  SELECTED_YEAR,
  SELECTED_SEX,
  SELECTED_NAME,
  IS_FETCHING
} from "../actions/types";

const initialState = {
  year: 2016,
  name: "",
  sex: "M",
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECTED_YEAR:
      return { ...state, year: action.payload };
    case SELECTED_SEX:
      return { ...state, sex: action.payload };
    case SELECTED_NAME:
      return { ...state, name: action.payload };
    case IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
}
