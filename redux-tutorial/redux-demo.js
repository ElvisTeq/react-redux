const redux = require("redux"); // Importing redux

// state => prev.value
// action => type passed in ".dispatch"
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// Creating/Storing redux function to a variable
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const lastestState = store.getState(); // all data
  console.log(lastestState);
};

store.subcribe(counterSubscriber); // Subcribe/Add function

store.dispatch({ type: "increment" }); // Running store and its subscriptions
// Type => (second argument in Redux function)

store.dispatch({ type: "decrement" });
