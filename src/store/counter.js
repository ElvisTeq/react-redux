import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// createSlice => replacing "counterReducer()" "action.type" handling
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState, // initial data
  // "action.type" functionality
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // payload => is set by default by redux/toolkit
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions; // Export all counterSlice.reducers

// Exporting only recuder functions for "configureStore()"
export default counterSlice.reducer;
