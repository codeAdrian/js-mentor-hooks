import React from "react";
import { useCounter } from "./useCounter";

export const ExampleFifth = () => {
  const counterFirst = useCounter();
  const counterSecond = useCounter(100);
  return (
    <div>
      <h2>Custom hooks</h2>
      <div>
        <h3>Counter 1</h3>
        <button onClick={counterFirst.decrementValue}>Decrement</button>{" "}
        {counterFirst.counter}{" "}
        <button onClick={counterFirst.incrementValue}>Increment</button>
      </div>

      <div>
        <h3>Counter 2</h3>
        <button onClick={counterSecond.decrementValue}>Decrement</button>{" "}
        {counterSecond.counter}
      </div>
    </div>
  );
};
