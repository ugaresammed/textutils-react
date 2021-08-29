import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    //console.log("Change");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    //console.log("Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "Success");
  };

  const handleloClick = () => {
    //console.log("Clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("Enter text here");
  return (
    <jsx>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          RemoveExtraSpaces
        </button>
      </div>
      <div
        className="container my-2 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="">Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "please enter a something above textarea"}
        </p>
      </div>
    </jsx>
  );
}
