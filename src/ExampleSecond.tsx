import React from "react";

export const ExampleSecond: React.FC = () => {
  function handleFormSubmit(e: React.FormEvent) {}

  function handleTextInput(e: React.ChangeEvent<HTMLInputElement>) {}

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {}

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {}

  function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {}

  return (
    <>
      <h2>useState - Form example</h2>
      <form onSubmit={handleFormSubmit}>
        <p>
          <label>Text input</label>
          <br />
          <input onChange={handleTextInput} type="text" />
        </p>

        <p>
          <label>Select</label>
          <br />

          <select defaultValue="First option" onChange={handleSelect}>
            <option value="first">First option</option>
            <option value="second">Second option</option>
            <option value="third">Third option</option>
          </select>
        </p>

        <p>
          <label>Checkbox</label>
          <br />
          <input
            onChange={handleCheckbox}
            type="checkbox"
            value="accept"
          ></input>
        </p>

        <p>
          <label>Radio</label>
          <br />
          <input
            onChange={handleRadio}
            name="radio-group"
            type="radio"
            value={"radio first"}
          ></input>{" "}
          First
          <br />
          <input
            onChange={handleRadio}
            name="radio-group"
            type="radio"
            value={"radio second"}
          ></input>{" "}
          Second
        </p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
