import {
  mdiDotsVertical,
  mdiFile,
  mdiFileCancel,
  mdiFileCancelOutline,
  mdiPlus,
  mdiPrinter,
  mdiPrinterEye,
  mdiSquareEditOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../../../components/menu/Menu";
import Table from "../../../components/table/Table";
import { anneeMois, date, nombre } from "../../../helpers/render";

import "../facturation.css";
import ModalDevis from "./ModalDevis";
import Title from "../../../components/title/Title";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newDevis",
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
let headData = [
  "Reférence",
  
  "Dossier",
  "Prospect",
  "Débours",
  "Interventions",
  "Montant",
  "Taxe",
  "à perçevoir",
  "Status",
  "Action",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const Devis = () => {
  const state = useSelector((state) => state.prospections);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState(null);
  const { devis } = state;
console.log(state);
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{`${anneeMois(item.date)}/${item.numero}`}</td>
    
      <td>{item.dossier?item.dossier:"-"}</td>
      <td>{item.prospect.nom}</td>
      <td>{item.debours?nombre(item.debours):"-"}</td>
      <td>{item.interventions?nombre(item.interventions):"-"}</td>
      <td>{item.ht?nombre(item.ht):"-"}</td>
      <td>{item.tva?nombre(item.tva):"-"}</td>
      <td>{nombre(item.net)}</td>
      <td>{item.status}</td>

      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Icon
          path={mdiPrinterEye}
          size={0.6}
          title="Aperçu"
          onClick={() => {
            setItem(item);
            setShowModal(!showModal);
            console.log(item);
          }}
        />{" "}
        /
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() =>
            navigate("/facturation/devis/newDevis", { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiFileCancelOutline}
          size={0.6}
          title="Acompte"
          onClick={() => {
            navigate("/facturation/acompte/newAcompte", { state: item })
          }}
        />
      </td>
    </tr>
  );

  return (
    <div className="clients">
      <Title title ="Dévis (Situation)"link={link} renderLink={renderLink} />
    
      <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={devis}
        renderBody={renderBody}
      />

      <ModalDevis
        showModal={showModal}
        setShowModal={setShowModal}
        devis={devis}
      />
    </div>
  );
};
export default Devis;
