import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    console.log("Cleartext was clicked" + text);
    let newText = "";
    setText(newText);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here..");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button class="btn btn-warning" onClick={handleClearClick}>
          Cleartext
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          UPPER CASE
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
          lower case
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container mx-4">
        <h1>Your text summary</h1>
        <p>
          {text.split("").length}words and {text.length} characters
        </p>
        <p> {0.008 * text.split("").length}Minuts read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something to in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
