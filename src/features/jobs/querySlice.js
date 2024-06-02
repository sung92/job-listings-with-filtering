import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const querySlice = createSlice({
  name: "query",
  initialState: [],
  reducers: {
    addQuery: (state, action) => {
      // Directly mutating the state is safe inside createSlice thanks to Immer.
      const exists = state.some((item) => item === action.payload);
      if (!exists) {
        state.push(action.payload);
      }
    },
    deleteQuery: (state, action) => {
      return state.filter((query) => query !== action.payload);
    },
    clearQuery: () => {
      return initialState;
    },
  },
});

export const { addQuery, deleteQuery, clearQuery } = querySlice.actions;
export default querySlice.reducer;
