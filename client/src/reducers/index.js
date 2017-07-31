import { combineReducers } from "redux";
import QueryReducer from "./query-reducer";
import NamesReducer from "./names-reducer";

const rootReducer = combineReducers({
  query: QueryReducer,
  names: NamesReducer
});

export default rootReducer;