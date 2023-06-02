import React from "react";
import { useNavigate } from "react-router-dom";

const Bilan = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="dossier col-12">
        {/* Bilan */}
        <fieldset className="card entite col-12 ">
          <legend
            className="card legend"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {" "}
            <span>Bilan</span>{" "}
          </legend>
          <div className="pr-row"></div>
        </fieldset>
      </div>
      {/* Button retour */}
      <div className="" style={{ margin: 5 }}>
        <button
          className="button"
          type="button"
          onClick={() => {
            navigate("/comptabilite");
          }}
        >
          Quitter
        </button>
      </div>
    </div>
  );
};

export default Bilan;
