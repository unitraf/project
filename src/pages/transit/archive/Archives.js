import { mdiFileDocumentAlertOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import "../transit.css";
import Title from "../../../components/title/Title";

const Archives = () => {
  const renderArchives = (status) => (
    <div className="dossier col-12" style={{ marginTop: 5 }}>
      {/* Instances */}
      <fieldset className="card entite col-12 ">
        <legend
          className="card legend"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Icon
            path={mdiFileDocumentAlertOutline}
            size={0.8}
            color={"var(--main-color)"}
          />
          <span>{`${status}`}</span>{" "}
        </legend>
        <div className="pr-row"></div>
      </fieldset>
    </div>
  );
  return (
    <div>
      <div className="card">
        <Title title="Dossiers (clôturés)" />
      </div>

      {renderArchives("Historique")}
    </div>
  );
};

export default Archives;
