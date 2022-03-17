import React, { useState } from "react";

export default function Conversion(props) {
  const [text, seText] = useState("");
  const eventChange = (e) => {
    seText(e.target.value);
  };
  const conversionUpButton = () => {
    let newText = text.toUpperCase();
    seText(newText);
  };
  const conversionLowButton = () => {
    let newText = text.toLowerCase();
    seText(newText);
  };
  const conversionClearButton = () => {
    let newText =''
    seText(newText);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-danger">{props.title}</h1>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter your Text
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            value={text}
            onChange={eventChange}
          ></textarea>
          <button className="btn btn-primary mt-3 me-2" onClick={conversionUpButton}>Convert to Upper Case</button>
          <button className="btn btn-success mt-3 me-2" onClick={conversionLowButton}>Convert to Lower Case</button>
          <button className="btn btn-danger mt-3" onClick={conversionClearButton}>
            Clear
          </button>
        </div>
      </div>
      <div className="container">
          <h1>Your Text Summary</h1>
          <p className="lead">Your text has {text.split(" ").length} words and {text.length} characters</p>
      </div>
    </>
  );
}
