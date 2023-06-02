import React from "react";
import "./inputBox.css";
const InputBox = (props) => {
  const { label, col, style } = props;
  return (
    <div className ={`input-Box col-${col}`}>
      <input {...props} disabled style={style}  />
      <label htmlFor={""}>{label}</label>
    </div>
  );
};

export default InputBox;
