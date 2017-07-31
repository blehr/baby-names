import {
  SET_RESULTS,
  SORT_BY_OCCURRENCES,
  SORT_BY_YEAR
} from "../actions/types";

const initialState = {
  results: [],
  sortBy: "Occurrences"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_RESULTS:
      return { ...state, results: action.payload };
    case SORT_BY_OCCURRENCES:
      return {
        ...state,
        results: state.results
          .slice(0)
          .sort((a, b) => b.occurrences - a.occurrences),
        sortBy: "Occurrences"
      };
    case SORT_BY_YEAR:
      return {
        ...state,
        results: state.results.slice(0).sort((a, b) => b.year - a.year),
        sortBy: "Year"
      };
    default:
      return state;
  }
}
