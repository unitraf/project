import React from "react";
import "./fieldset.css";

const Fieldset = (props) => {
  const { legend, content } = props;
  return (
    <fieldset  {...props}>
      <legend className="legend">{legend}</legend>
      <div  >{content}</div>
    </fieldset>
  );
};

export default Fieldset;
