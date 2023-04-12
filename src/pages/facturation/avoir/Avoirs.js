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
import { anneeMois, date } from "../../../helpers/render";

import "../facturation.css";
import ModalAvoir from "./ModalAvoir";
import ModalFacture from "./ModalAvoir";
import Title from "../../../components/title/Title";
const link = [
  {
    icon: mdiPlus,
    content: "Nouveau",
    route: "newAvoir",
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
  "Ref.",
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

const Avoirs = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const {  dossiers } = state;

  const dossier = dossiers.filter((dossier) => dossier.avoirs && dossier)[0];

  const [showModal, setShowModal] = useState(false)
const [avoir, setAvoir] = useState(null)
 
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{`${anneeMois( item.date)}/${item.numero}`}</td>
      <td>{`${anneeMois( item.facture.date)}/${item.facture.numero}`}</td>
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
            setAvoir(item)
            setShowModal(!showModal)
          console.log(item);
          }
          }
        />{" "}
        {/* /
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() =>
            navigate("/facturation/avoirs/newFacture", { state: item })
          }
        />{" "} */}
        {/* /
        <Icon
          path={mdiFileCancelOutline}
          size={0.6}
          title="Avoir"
          onClick={() =>
            navigate("/facturation/avoirs/newAvoir", { state: item })
          }
        />{" "} */}
      </td>
    </tr>
  );
console.log(dossier);
  return (
    <div className="clients">
      <Title title =" Avoirs (Remboursements)"link={link} renderLink={renderLink} />
    
     
      <Table
        headData={headData}
        renderHead={renderHead}
        bodyData={dossier&&dossier.avoirs}
        renderBody={renderBody}
      />

      <ModalAvoir showModal={showModal} setShowModal={setShowModal} dossier={dossier} />
    </div>
  );
};
export default Avoirs;
