import React from "react";
import { ExampleFirst } from "./ExampleFirst";
import { ExampleFourth } from "./ExampleFourth";
import { ExampleSecond } from "./ExampleSecond";
import { ExampleThird } from "./ExampleThird";

import countries from "./countries.json";
import { ExampleFifth } from "./ExampleFifth";

const App: React.FC = () => {
  return (
    <>
      <ExampleFirst />
      <hr />
      <ExampleSecond />
      <hr />
      <ExampleThird />
      <hr />
      <ExampleFourth countries={countries} />
      <hr />
      <ExampleFifth />
    </>
  );
};

export default App;
