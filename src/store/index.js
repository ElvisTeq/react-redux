import { configureStore } from "@reduxjs/toolkit"; // replacing "createStore"

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  // action.amount => to dynamically change value
  // dispatch({ type: , amount: }) => for the subcribed component
  if (action.type === "increase") {
    return { counter: state.counter + action.amount };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
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
