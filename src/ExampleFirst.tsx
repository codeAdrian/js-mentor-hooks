import React, { useRef, useState } from "react";

export const ExampleFirst: React.FC = () => {
  let numberVar = 0;
  const numberRef = useRef(0);
  const [numberState, setNumberState] = useState(0);

  function incrementVar() {
    numberVar += 1;
    console.log("Var: ", numberVar);
  }

  function incrementRef() {
    numberRef.current += 1;
    console.log("Ref: ", numberRef.current);
  }

  function incrementState() {
    const newState = numberState + 1;
    setNumberState(newState);
    console.log("State: ", newState);
  }

  return (
    <div>
      <h2>JS vars vs useRef vs useState</h2>
      <p>
        <button onClick={incrementVar}>Increment var</button> Number var:{" "}
        {numberVar}
      </p>
      <p>
        <button onClick={incrementRef}>Increment ref</button> Number Ref:{" "}
        {numberRef.current}
      </p>
      <p>
        <button onClick={incrementState}>Increment state</button> Number state:{" "}
        {numberState}
      </p>
    </div>
  );
};
