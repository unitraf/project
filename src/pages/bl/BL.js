import {
  mdiFileDocumentAlertOutline,
  mdiPlus,
  mdiPrinterSearch,
  mdiSquareEditOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../../components/table/Table";
import { date } from "../../helpers/render";

import "./bl.css";
import ModalBL from "./ModalBL";
import Title from "../../components/title/Title";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newBl",
  },
];
const renderLink = (item, index) => (
  <Link to={item.route} key={index}>
    <div className="item">
      <Icon path={item.icon} size={0.8} color="var(--main-color)" />
      <span>{item.content}</span>
    </div>
  </Link>
);
const BL = () => {
  const [showModal, setShowModal] = useState(false);
  const [dossier, setDossier] = useState({});
  const state = useSelector((state) => state.dossiers);
  const dossiers = state.filter((dossier) => dossier.status === "Livré");

  let headData = [
    "N° BL",
    "Date",
    "Dossier",
    "Destinataire",
    "Nombre",
    "Description",
    "Poids",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.bl ? item.bl.numero : "-"}</td>
      <td>{item.bl ? date(item.bl.date) : "-"}</td>
      <td>{`380/${item.numero}`}</td>
      <td>{item.client.nom}</td>
      <td>{item.nombre}</td>
      <td>{item.description}</td>
      <td>{item.poids}</td>

      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Icon
          path={mdiPrinterSearch}
          size={0.6}
          title="Aperçu"
          onClick={() => {
            console.log("Preview for print", item);
            setDossier(item);
            setShowModal(true);
          }}
        />{" "}
        /
        <Link to={`/transit/livraison/${item.numero}`}>
          {" "}
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
        </Link>

      </td>
    </tr>
  );

  const renderBL = (status) => (
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
        <div className="pr-row">
          <Table
            headData={headData}
            renderHead={renderHead}
            bodyData={dossiers}
            renderBody={renderBody}
          />
        </div>
      </fieldset>
    </div>
  );

  return (
    <div className="clients">
      <div className="card">
        <Title
          title="Bordereaux (bons)"
          link={link}
          renderLink={renderLink}
        />
      </div>

      {renderBL("Historique")}

      <ModalBL
        showModal={showModal}
        setShowModal={setShowModal}
        dossier={dossier}
      />
    </div>
  );
};
export default BL;
