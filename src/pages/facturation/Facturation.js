import React from "react";
import Title from "../../components/title/Title";
import {
  mdiAccountOutline,
  mdiDatabase,
  mdiFileAlert,
  mdiFileAlertOutline,
  mdiFileCancel,
  mdiFileCheckOutline,
  mdiFileImageMinusOutline,
  mdiFileMinus,
  mdiFileMinusOutline,
  mdiFileMultipleOutline,
  mdiFilePlusOutline,
  mdiFileSendOutline,
  mdiHomeOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import { useLocation, useNavigate } from "react-router-dom";
const listCard = [
  {
    icon: mdiFilePlusOutline,
    link: "Acomptes",
    route: "/facturation/acompte",
  },
  {
    icon: mdiFileMinusOutline,
    link: "Avoirs",
    route: "/facturation/avoirs",
  },
  {
    icon: mdiFileMultipleOutline,
    link: "Dévis",
    route: "/facturation/devis",
  },
  {
    icon: mdiFileCheckOutline,
    link: "Factures",
    route: "/facturation/factures",
  },
];
function Facturation() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const renderFacturations = (
    <div className="facturations">
      <div className="cardLink">
        {listCard.map((item, index) => (
          <div
            className=" card cardLink-item"
            key={index}
            onClick={() => navigate(item.route)}
          >
            <Icon path={item.icon} size={2} color={"var(--main-color)"} />

            <div>{item.link}</div>
          </div>
        ))}
      </div>
    </div>
  );
  const renderStat = (
    <div>
      <div className="dossier col-12">
        {/* Encours  */}
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
              path={mdiFileAlertOutline}
              size={0.8}
              color={"var(--main-color)"}
            />
            <span>Encours</span>{" "}
          </legend>
          <div className="pr-row"></div>
        </fieldset>
        {/*Envoyés*/}
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
              path={mdiFileSendOutline}
              size={0.8}
              color={"var(--main-color)"}
            />
            <span>Envoyés</span>{" "}
          </legend>
          <div className="pr-row"></div>
        </fieldset>
        {/* Validé */}
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
              path={mdiFileCheckOutline}
              size={0.8}
              color={"var(--main-color)"}
            />
            <span>Validés</span>{" "}
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
            navigate(-1);
          }}
        >
          Quitter
        </button>
      </div>
    </div>
  );
  return (
    <div>
      <div className="card">
        <Title title="Facturations (documents)" />
      </div>
      {location === "/facturation" && (
        <>
          {renderFacturations} {renderStat}{" "}
        </>
      )}
    </div>
  );
}

export default Facturation;
