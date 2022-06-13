import { configureStore } from "@reduxjs/toolkit"; // replacing "createStore"

const initialState = { counter: 0, showCounter: true };

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

const store = configureStore({ reducer: counterReducer }); // replacing "createStore" deprecated

// const counterHandler = () => {
//   const counterStatus = store.getState();
//   console.log(counterStatus);
// };

// store.subscribe(counterHandler);

// store.dispatch({ type: "increase" });
// store.dispatch({ type: "decrease" });

export default store;
