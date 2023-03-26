import React from "react";
import "./inputBox.css";
const InputBox = (props) => {
  const { name, label, col } = props;
  return (
    <div className ={`inputBox col-${col}`}>
      <input {...props} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default InputBox;
