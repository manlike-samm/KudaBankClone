import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/counterSlice";

const ReduxTest = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inVal, setInVal] = useState("");

  const handleChange = (e) => {
    setInVal(e.target.value);
    console.log(inVal);
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input onChange={handleChange} />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(inVal))}
        >
          increment by amount
        </button>
      </div>
    </div>
  );
};

export default ReduxTest;
