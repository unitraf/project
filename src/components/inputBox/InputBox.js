import React from "react";
import "./inputBox.css";
const InputBox = (props) => {
  const { label, col } = props;
  return (
    <div className ={`input-Box col-${col}`}>
      <input {...props} disabled  />
      <label htmlFor={""}>{label}</label>
    </div>
  );
};

export default InputBox;
