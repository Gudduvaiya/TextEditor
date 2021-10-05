import React, { useState } from "react";

export default function Textbox(props) {
  const [text, settext] = useState("");

  const eventonchange = (event) => {
    console.log(event.target.value);
    settext(event.target.value);
  };

  const eventonclick = () => {
    const newtext = text.toUpperCase();
    settext(newtext);
    // props.Showalert("Converted to Uppercase! ", "Success");
  };
  const eventonclicklow = () => {
    const newlowtext = text.toLowerCase();
    settext(newlowtext);
    // props.Showalert("Converted to Lowercase! ", "Success");
  };
  let eventonclickcopy = () => {
    navigator.clipboard.writeText(text);
    // props.Showalert("Copied to Clipboard! ", "Success");
  };

  // // Dark Mode

  // const [mode,setmode]=useState("light")

  return (
    <>
      <div>
        <div style={{ display: "flex" }}>
          <h1>{props.head}</h1>
          <button
            type="button"
            class="btn btn-dark"
            style={{
              marginLeft: "530px", //Dark mode
              borderRadius: "11px",
              border: "13px double #3dd6f9",
            }}
          >
            Enable Dark Mode
          </button>
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            value={text}
            onChange={eventonchange}
            placeholder="Enter your text to convert into Uppercase/Lowercase"
            id="floatingTextarea"
            rows="7"
          ></textarea>
          {/* <label for="floatingTextarea">Comments</label> */}
        </div>
        <button className="btn btn-warning mx-2 my-2" onClick={eventonclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success" onClick={eventonclicklow}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={eventonclickcopy}>
          Copy Text
        </button>
      </div>
      <p>
        Your Paragraph has {text.split(" ").length - 1} Words and {text.length}{" "}
        Charectors
      </p>
    </>
  );
}
