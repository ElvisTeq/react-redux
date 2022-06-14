import { configureStore, createSlice } from "@reduxjs/toolkit"; // replacing "createStore"

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

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// connecting Redux
const store = configureStore({
  // Adding multiple Slices
  reducer: {
    counter: counterSlice.reducer, // state.counter.DATA
    auth: authSlice.reducer, // state.auth.DATA
  },
});
// Receives an obj { reducer: function.reducer }

export const counterActions = counterSlice.actions; // Export all counterSlice.reducers
export const authActions = authSlice.actions;

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
