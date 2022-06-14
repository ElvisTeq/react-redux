import { configureStore } from "@reduxjs/toolkit"; // replacing "createStore"

// Reducer functions were exported only
import counterReducer from "./counter";
import authReducer from "./auth";

// connecting Redux
// Receives an obj { reducer: function.reducer }
const store = configureStore({
  // Adding multiple Slices
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

/*
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter, // Needs to be added (when is called it will not automatically contain "initialState" defaults)
    };
  }

  // action.amount => to dynamically change value
  // dispatch({ type: , amount: }) => for the subcribed component
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter, // Needs to be added (when is called it will not automatically contain "initialState" defaults)
    };
  }

  return state;
};

*/
