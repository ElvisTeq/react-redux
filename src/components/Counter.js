import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux"; // redux method to get 'store' data

const Counter = () => {
  const dispatch = useDispatch(); // Dispatching "store"
  const counter = useSelector((state) => state.counter); // Get "store" data

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
