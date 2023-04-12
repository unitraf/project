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
import { date } from "../../../helpers/render";

import "../facturation.css";
import ModalFacture from "./ModalFacture";
import Title from "../../../components/title/Title";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newFacture",
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
  "Numéro",
  "Date",
  "Dossier",
  "Client",
  "Débours",
  "Interventions",
  "Taxes",
  "Net à payer",
  "Action",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const Factures = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false)
const [dossier, setDossier] = useState(null)
  const {  dossiers } = state;
  const factures = dossiers.filter((dossier) => dossier.facture && dossier);
 
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.facture.numero}</td>
      <td>{date(item.facture.date)}</td>
      <td>{item.facture.dossier}</td>
      <td>{item.facture.client}</td>
      <td>{item.facture.debours}</td>
      <td>{item.facture.interventions}</td>
      <td>{item.facture.tva}</td>
      <td>{item.facture.net}</td>

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
          onClick={() =>{
            setDossier(item)
            setShowModal(!showModal)
          console.log(item);
          }
          }
        />{" "}
        /
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() =>
            navigate("/facturation/factures/newFacture", { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiFileCancelOutline}
          size={0.6}
          title="Avoir"
          onClick={() =>
            navigate("/facturation/avoirs/newAvoir", { state: item })
          }
        />{" "}
      </td>
    </tr>
  );

  return (
    <div className="clients">
       <Title title ="Factures (Historique)"link={link} renderLink={renderLink} />
    
     
    
      <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={factures}
        renderBody={renderBody}
      />

      <ModalFacture showModal={showModal} setShowModal={setShowModal} dossier={dossier} />
    </div>
  );
};
export default Factures;
