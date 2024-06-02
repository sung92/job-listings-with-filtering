import { combineReducers } from "@reduxjs/toolkit";
import queryReducer from "../features/jobs/querySlice";

const rootReducer = combineReducers({
  query: queryReducer,
  // Add other reducers here if you have more
});

export default rootReducer;
