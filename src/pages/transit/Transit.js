import {
  mdiEye,
  mdiFileDocumentAlertOutline,
  mdiFolderFileOutline,
  mdiFolderOpenOutline,
  mdiFolderPlusOutline,
  mdiShipWheel,
  mdiShippingPallet,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Table from "../../components/table/Table";
import { date, prefixe } from "../../helpers/render";
import { groupBy } from "../../helpers/fonctions";
import "./transit.css";
import Onglets from "../../components/onglet/Onglets";
import Title from "../../components/title/Title";
import Button from "../../components/buttonLink/Button";
let headData = [
  "Date",
  "N° Dossier",
  "Client",
  "Description",
  "Poids",
  "Document",
  "Départ",
  "Arrivée",
  "Action",
];

const listCard = [
  {
    icon: mdiFolderPlusOutline,
    link: "Nouveau",
    route: "/transit/dossiers/newDossier/",
  },
  {
    icon: mdiFolderOpenOutline,
    link: "Dossiers",
    route: "/transit/dossiers",
  },
  {
    icon: mdiFolderFileOutline,
    link: "Minutes",
    route: "/transit/minutes",
  },
  {
    icon: mdiShippingPallet,
    link: "Livraisons",
    route: "/transit/livraison",
  },
];

const renderHead = (item, index) => <th key={index}>{item}</th>;


const Transit = () => {
  const navigate = useNavigate()
  const state = useSelector((state) => state);
  const { dossiers } = state;
  const status = groupBy(dossiers, "status");

  const renderStatus = (status) => (
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
            <span>{`${status}`}</span>{" "}
          </legend>
          <div className="pr-row"></div>
        </fieldset>
      </div>
    </div>
  );
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.date ? date(item.date) : "-"}</td>
      <td>{`   ${prefixe(item.date, item.numero)}`}</td>
      <td>{item.client.nom}</td>
      <td>{item.description}</td>
      <td>{item.poids}</td>
      <td>{item.document}</td>
      <td>{item.depart ? date(item.depart) : "-"}</td>
      <td>{item.arrivee ? date(item.arrivee) : "-"}</td>
  
      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
     
          <Icon path={mdiEye} size={0.6} title="Aperçu"  onClick={()=>navigate(`/transit/dossier/view/${item.numero}`, {state:item})} />{" "}
      /
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer"  onClick={()=>navigate(`/transit/dossiers/${item.numero}`, {state:item})} />{" "}
      
     
      </td>
    </tr>
  );
  
  const renderDossiers = (
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
            <Icon path={mdiShipWheel} size={0.8} color={"var(--main-color)"} />
            <span>Suivi(s)</span>{" "}
          </legend>
          <div className="pr-row"></div>
          <Table
            headData={headData}
            renderHead={renderHead}
            bodyData={dossiers}
            renderBody={renderBody}
          />
        </fieldset>
      </div>
    </div>
  );
  return (
    <div>
      <div className="card">
        <Title title="Expéditions (Tracking)" />
      </div>

      <Button listCard={listCard} />
      {renderDossiers}
    </div>
  );
};

export default Transit;
