import {
  mdiDotsVertical,
  mdiFileCancelOutline,
  mdiPlus,
  mdiPrinterEye,
  mdiSquareEditOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../../../components/menu/Menu";
import Table from "../../../components/table/Table";
import { anneeMois, date, nombre } from "../../../helpers/render";

import "../facturation.css";
import ModalAcompte from "./ModalAcompte";
import Title from "../../../components/title/Title";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newAcompte",
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
  
  "Dévis",
  "Prospect",
  "% Taux",
  "HT",
  "TVA",
  "TTC",
  "Solde dû",
  "Action",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const Acompte = () => {
  const state = useSelector((state) => state.prospections);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState(null);
  const { devis } = state;
console.log(state);
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.acompte?`${anneeMois(item.acompte.date)}/${item.acompte.numero}`:"-"}</td>
      
      <td>{`${anneeMois(item.date)}/${item.numero}`}</td>
      <td>{item.prospect.nom}</td>
      <td>{item.acompte?item.acompte.taux:"-"}</td>
      <td>{item.acompte?nombre(item.acompte.ht):"-"}</td>
      <td>{item.acompte?nombre(item.acompte.tva):"-"}</td>
      <td>{item.acompte?nombre(item.acompte.ttc):"-"}</td>
      <td>{nombre(item.acompte?(parseFloat(item.acompte.ttc) - parseFloat(item.net)):parseFloat(item.net) )}</td>
      
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
            navigate("/facturation/devis/newAcompte", { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiFileCancelOutline}
          size={0.6}
          title="Supprimer"
          onClick={() => {
            // navigate("/facturation/avoirs/newAvoir", { state: item })
          }}
        />
      </td>
    </tr>
  );

  return (
    <div className="clients">
      <Title title ="Acomptes (Prospections)"link={link} renderLink={renderLink} />
    
      
      <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={devis}
        renderBody={renderBody}
      />

      <ModalAcompte
        showModal={showModal}
        setShowModal={setShowModal}
        devis={devis}
      />
    </div>
  );
};
export default Acompte;
