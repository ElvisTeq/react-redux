import redux from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = redux.configureStore(counterReducer);

const counterHandler = () => {
  const counterStatus = store.getState();
  console.log(counterStatus);
};

store.subscribe(counterHandler);

store.dispatch({ type: "increase" });
store.dispatch({ type: "decrease" });

export default store;
