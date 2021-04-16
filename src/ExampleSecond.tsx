import React, { useState } from "react";

export const ExampleSecond: React.FC = () => {
  const [textValue, setTextValue] = useState("");
  const [selectValue, setSelectValue] = useState("first");
  const [checkboxValue, setCheckboxValue] = useState("");
  const [radioValue, setRadioValue] = useState("");

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ textValue, selectValue, checkboxValue, radioValue });
  }

  function handleTextInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    console.log(value);
    setTextValue(value);
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.currentTarget;
    setSelectValue(value);
  }

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.currentTarget;

    setCheckboxValue(checked ? value : "");
  }

  function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;

    setRadioValue(value);
  }

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
