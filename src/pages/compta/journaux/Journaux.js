import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../../components/title/Title";
import TreeViewJournaux from "./TreeViewJournaux";
import Journal from "./journal/Journal";

const Journaux = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="dossier col-12">
        {/* Journaux */}
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
            <span>Journal</span>{" "}
          </legend>
          <div className="pr-row"><TreeViewJournaux/></div>
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

      <Journal/>
    </div>
  );
};

export default Journaux;
