import {
  mdiFileDocumentAlertOutline,
  mdiPlus,
  mdiPrinterSearch,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Table from "../../components/table/Table";
import { nombre } from "../../helpers/render";
import "./minutes.css";
import ModalMinute from "./ModalMinute";
import Title from "../../components/title/Title";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newMinute",
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
const Minutes = () => {
  const state = useSelector((state) => state);
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { dossiers } = state;
  const minutes = dossiers.map((dossier) => dossier.minute).flat(Infinity);
  let headData = [
    "Régime",
    "Repertoire",
    "T1",
    "Sommier",
    "Exo",
    "License",
    "Désignation",
    "Val. Douane",
    "Total Impos.",
    "Taxes Glob.",
    "Total Décl.",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index} title={`Dossier N° ${item.dossier}`}>
      <td>{item.regime}</td>
      <td>{item.repertoire}</td>
      <td>{item.t1}</td>
      <td>{item.sommier}</td>
      <td>{item.exo}</td>
      <td>{item.license}</td>
      <td>{item.designation}</td>
      <td>{nombre(item.valeur)}</td>

      <td>{nombre(item.droits)}</td>
      <td>{nombre(item.taxe)}</td>
      <td>{nombre(item.total)}</td>

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
            setShowModal(true);
          }}
        />{" "}
        /
        <Link to={`/transit/minutes/${item.repertoire}`}>
          {" "}
          <Icon path={mdiSquareEditOutline} size={0.6} title="Editer" />{" "}
        </Link>
        /
        <Link
          to={`/transit/minutes/${item.repertoire}/destroy`}
          onClick={(e) => {}}
        >
          {" "}
          <Icon path={mdiTrashCanOutline} size={0.6} title="Supprimer" />{" "}
        </Link>
      </td>
    </tr>
  );

  const renderMinutes = (status) => (
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
            bodyData={minutes}
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
          title="Brouillons (manuels)"
          link={link}
          renderLink={renderLink}
        />
      </div>

      {renderMinutes("Historique")}

      <ModalMinute
        showModal={showModal}
        setShowModal={setShowModal}
        minute={minutes[index]}
      />
    </div>
  );
};
export default Minutes;
