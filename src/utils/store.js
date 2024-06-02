// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "../features/jobs/querySlice";

export default configureStore({
  reducer: {
    query: queryReducer,
  },
});
