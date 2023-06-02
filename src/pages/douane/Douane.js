import React from "react";
import Icon from "@mdi/react";
import { useNavigate } from "react-router-dom";
import {
  mdiChartBoxOutline,
  mdiFileCertificateOutline,
  mdiFileDocumentAlertOutline,
  mdiFileDocumentCheckOutline,
  mdiHomeAnalytics,
  mdiLicense,
} from "@mdi/js";
import Title from "../../components/title/Title";
import Button from "../../components/buttonLink/Button";
const listCard = [
  {
    icon: mdiFileDocumentAlertOutline,
    link: "Transit (1)",
    route: "/douane/t1",
  },
  {
    icon: mdiFileDocumentCheckOutline,
    link: "Déclarations",
    route: "/douane/ddu",
  },
  {
    icon: mdiFileCertificateOutline,
    link: "Tarifs SH",
    route: "/douane/tarifs",
  },
  {
    icon: mdiHomeAnalytics,
    link: "Bureaux",
    route: "/douane/bureaux",
  },
  {
    icon: mdiLicense,
    link: "Exonérations",
    route: "/douane/exo",
  },
];

const Douane = () => {
  const navigate = useNavigate();

  const renderStat = (
    <div>
      <div className="dossier col-12">
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
            <span>Instances (dossiers)</span>{" "}
          </legend>
          <div className="pr-row"></div>
        </fieldset>
        {/* BAE */}
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
              path={mdiFileDocumentCheckOutline}
              size={0.8}
              color={"var(--main-color)"}
            />
            <span>Bon à enlever (BAE)</span>{" "}
          </legend>
          <div className="pr-row"></div>
        </fieldset>
        {/* Stat */}
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
              path={mdiChartBoxOutline}
              size={0.8}
              color={"var(--main-color)"}
            />
            <span>Statistiques</span>{" "}
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
    <>
      <div className="card">
        <Title title="Formalités (accessoires...)" />
      </div>
    
      <Button listCard={listCard} />
      {renderStat}
    </>
  );
};

export default Douane;
