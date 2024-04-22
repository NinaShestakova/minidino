"use client";
import { useState } from "react";

const UseStateTest = () => {
  function decrementCount() {
    setCount(count - 1);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  const [count, setCount] = useState(() => {
    return 4;
  });
  return (
    <div className="text-center text-9xl">
      <button onClick={decrementCount}>-</button>
      <span className="text-5xl"> {count} </span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default UseStateTest;
