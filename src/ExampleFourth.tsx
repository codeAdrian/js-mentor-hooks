import React, { useState, useMemo } from "react";

interface Country {
  name: string;
  code: string;
}

interface Props {
  countries: Country[];
}

export const ExampleFourth: React.FC<Props> = ({ countries }) => {
  const [filterLetter, setFilterLetter] = useState("A");
  const [someCounter, setSomeCounter] = useState(0);

  const filteredCountries = useMemo(() => {
    console.log("FILTERING");
    return countries
      .filter(({ name }) => name[0].toUpperCase() === filterLetter)
      .map(({ name }) => name);
  }, [countries, filterLetter]);

  function changeFilterLetter(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;

    if (value.length > 1) {
      return;
    }

    setFilterLetter(value.toUpperCase());
  }

  function handleCounter() {
    setSomeCounter(someCounter + 1);
  }

  return (
    <div>
      <h2>useCallback &amp; useMemo</h2>
      <button onClick={handleCounter}>Increment some counter</button>
      <p>{someCounter}</p>
      <input
        onChange={changeFilterLetter}
        type="text"
        value={filterLetter}
      ></input>
      <br />
      <br />
      {filteredCountries.join(", ")}
    </div>
  );
};
