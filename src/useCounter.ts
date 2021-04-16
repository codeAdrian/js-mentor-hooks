import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
  const [counter, setCounter] = useState(initialValue);

  function incrementValue() {
    setCounter(counter + 1);
  }

  function decrementValue() {
    setCounter(counter - 1);
  }

  return {
    counter,
    incrementValue,
    decrementValue,
  };
};
